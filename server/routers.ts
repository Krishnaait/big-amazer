import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { getUserByEmail, createUser, verifyPassword } from "./db";
import { z } from "zod";
import { SignJWT } from "jose";
import { ENV } from "./_core/env";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    
    register: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(6),
      }))
      .mutation(async ({ input }) => {
        const { name, email, password } = input;
        
        // Check if user already exists
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
          throw new Error("User with this email already exists");
        }
        
        // Create new user
        await createUser(name, email, password);
        
        return {
          success: true,
          message: "Registration successful! Please login.",
        };
      }),
    
    login: publicProcedure
      .input(z.object({
        email: z.string().email(),
        password: z.string(),
      }))
      .mutation(async ({ input, ctx }) => {
        const { email, password } = input;
        
        // Find user by email
        const user = await getUserByEmail(email);
        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }
        
        // Verify password
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw new Error("Invalid email or password");
        }
        
        // Create session token
        const token = await new SignJWT({
          userId: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        })
          .setProtectedHeader({ alg: "HS256" })
          .setExpirationTime("7d")
          .sign(new TextEncoder().encode(ENV.cookieSecret));
        
        // Set cookie
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, token, {
          ...cookieOptions,
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        
        return {
          success: true,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        };
      }),
    
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Cricket Data API
  cricket: router({
    getMatches: publicProcedure
      .input(z.object({ matchId: z.string().optional() }).optional())
      .query(async ({ input }) => {
        const { getMatches } = await import("@shared/cricketApi");
        const allMatches = await getMatches();
        
        // If specific matchId requested, return that match
        if (input?.matchId) {
          const match = allMatches.find(m => m.id === input.matchId);
          return { success: true, match: match || null };
        }
        
        // Otherwise categorize matches
        const live = allMatches.filter(m => m.status === "Live" || m.matchStarted && !m.matchEnded);
        const upcoming = allMatches.filter(m => !m.matchStarted).sort((a, b) => 
          new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime()
        );
        const completed = allMatches.filter(m => m.matchEnded).sort((a, b) => 
          new Date(b.dateTimeGMT).getTime() - new Date(a.dateTimeGMT).getTime()
        );
        
        return {
          success: true,
          live,
          upcoming,
          completed,
        };
      }),
    
    getMatchSquad: publicProcedure
      .input(z.object({ matchId: z.string() }))
      .query(async ({ input }) => {
        const { getMatchSquad } = await import("@shared/cricketApi");
        const squad = await getMatchSquad(input.matchId);
        
        if (!squad) {
          throw new Error("Squad not available for this match");
        }
        
        return {
          success: true,
          data: squad,
        };
      }),
  }),

  // Teams router
  teams: router({
    getUserTeams: protectedProcedure
      .query(async ({ ctx }) => {
        const db = await import("./db").then(d => d.getDb());
        if (!db) throw new Error("Database not available");
        
        const { userTeams, teamPlayers } = await import("../drizzle/schema");
        const { eq } = await import("drizzle-orm");
        
        // Fetch user's teams
        const teams = await db.select().from(userTeams).where(eq(userTeams.userId, ctx.user.id));
        
        // Fetch players for each team
        const teamsWithPlayers = await Promise.all(
          teams.map(async (team) => {
            const players = await db.select().from(teamPlayers).where(eq(teamPlayers.teamId, team.id));
            return {
              ...team,
              playerCount: players.length,
              players: players.map(p => p.playerId),
            };
          })
        );
        
        return teamsWithPlayers;
      }),
    
    createTeam: protectedProcedure
      .input(z.object({
        matchId: z.string(),
        name: z.string(),
        players: z.array(z.string()),
        captainId: z.string(),
        viceCaptainId: z.string(),
        totalCreditsUsed: z.number(),
      }))
      .mutation(async ({ input, ctx }) => {
        const { matchId, name, players, captainId, viceCaptainId, totalCreditsUsed } = input;
        
        // Validate
        if (players.length !== 11) {
          throw new Error("Team must have exactly 11 players");
        }
        if (!captainId || !viceCaptainId) {
          throw new Error("Captain and vice-captain must be selected");
        }
        if (captainId === viceCaptainId) {
          throw new Error("Captain and vice-captain must be different players");
        }
        
        const db = await import("../drizzle/schema").then(m => import("./db").then(d => d.getDb()));
        if (!db) throw new Error("Database not available");
        
        const { userTeams, teamPlayers } = await import("../drizzle/schema");
        
        // Insert team
        const teamResult = await db.insert(userTeams).values({
          userId: ctx.user.id,
          matchId,
          name,
          captainId,
          viceCaptainId,
          totalCreditsUsed: totalCreditsUsed.toString(),
        });
        
        const teamId = Number((teamResult as any).insertId);
        
        // Insert players
        for (const playerId of players) {
          await db.insert(teamPlayers).values({
            teamId,
            playerId,
          });
        }
        
        return {
          success: true,
          teamId,
          message: "Team created successfully!",
        };
      }),
  }),

  // Contests router
  contests: router({
    getContests: publicProcedure
      .input(z.object({ matchId: z.string().optional() }).optional())
      .query(async ({ input }) => {
        const db = await import("./db").then(d => d.getDb());
        if (!db) return { success: true, contests: [], count: 0 };
        
        const { contests } = await import("../drizzle/schema");
        const { eq } = await import("drizzle-orm");
        
        let allContests;
        if (input?.matchId) {
          allContests = await db.select().from(contests).where(eq(contests.matchId, input.matchId));
        } else {
          allContests = await db.select().from(contests);
        }
        
        return {
          success: true,
          contests: allContests,
          count: allContests.length,
        };
      }),
    
    seedContests: publicProcedure
      .input(z.object({ matchId: z.string() }))
      .mutation(async ({ input }) => {
        const db = await import("./db").then(d => d.getDb());
        if (!db) throw new Error("Database not available");
        
        const { contests } = await import("../drizzle/schema");
        
        const sampleContests = [
          { name: "Mega Contest", entryFee: "10", prizePool: "1000", maxEntries: 100 },
          { name: "Head to Head", entryFee: "50", prizePool: "90", maxEntries: 2 },
          { name: "Winner Takes All", entryFee: "25", prizePool: "225", maxEntries: 10 },
        ];
        
        for (const contest of sampleContests) {
          await db.insert(contests).values({
            matchId: input.matchId,
            ...contest,
          });
        }
        
        return {
          success: true,
          message: `Created ${sampleContests.length} contests for match ${input.matchId}`,
        };
      }),
    
    joinContest: protectedProcedure
      .input(z.object({
        contestId: z.number(),
        teamId: z.number(),
      }))
      .mutation(async ({ input, ctx }) => {
        const db = await import("./db").then(d => d.getDb());
        if (!db) throw new Error("Database not available");
        
        const { contests, contestEntries } = await import("../drizzle/schema");
        const { eq } = await import("drizzle-orm");
        
        // Find contest
        const contestResult = await db.select().from(contests).where(eq(contests.id, input.contestId)).limit(1);
        if (contestResult.length === 0) {
          throw new Error("Contest not found");
        }
        
        const contest = contestResult[0];
        
        // Check if contest is full
        if (contest.currentEntries >= contest.maxEntries) {
          throw new Error("Contest is full");
        }
        
        // Create entry
        await db.insert(contestEntries).values({
          contestId: input.contestId,
          userId: ctx.user.id,
          teamId: input.teamId,
        });
        
        // Increment currentEntries
        await db.update(contests)
          .set({ currentEntries: contest.currentEntries + 1 })
          .where(eq(contests.id, input.contestId));
        
        return {
          success: true,
          message: "Successfully joined contest!",
        };
      }),
    
    getLeaderboard: publicProcedure
      .input(z.object({ contestId: z.number() }))
      .query(async ({ input }) => {
        const db = await import("./db").then(d => d.getDb());
        if (!db) return { success: true, contest: null, entries: [] };
        
        const { contests, contestEntries, userTeams, users } = await import("../drizzle/schema");
        const { eq, desc } = await import("drizzle-orm");
        
        // Get contest details
        const contestResult = await db.select().from(contests).where(eq(contests.id, input.contestId)).limit(1);
        if (contestResult.length === 0) {
          throw new Error("Contest not found");
        }
        
        const contest = contestResult[0];
        
        // Get all entries with team and user info
        const entries = await db
          .select({
            id: contestEntries.id,
            points: contestEntries.points,
            rank: contestEntries.rank,
            teamName: userTeams.name,
            userName: users.name,
          })
          .from(contestEntries)
          .leftJoin(userTeams, eq(contestEntries.teamId, userTeams.id))
          .leftJoin(users, eq(contestEntries.userId, users.id))
          .where(eq(contestEntries.contestId, input.contestId))
          .orderBy(desc(contestEntries.points));
        
        return {
          success: true,
          contest,
          entries,
        };
      }),
    
    calculatePoints: publicProcedure
      .input(z.object({ matchId: z.string() }))
      .mutation(async ({ input }) => {
        const db = await import("./db").then(d => d.getDb());
        if (!db) throw new Error("Database not available");
        
        const { contestEntries, contests, userTeams, teamPlayers } = await import("../drizzle/schema");
        const { eq } = await import("drizzle-orm");
        
        try {
          // Find all contests for this match
          const matchContests = await db.select().from(contests).where(eq(contests.matchId, input.matchId));
          
          // For each contest, calculate points for all entries
          for (const contest of matchContests) {
            const entries = await db.select().from(contestEntries).where(eq(contestEntries.contestId, contest.id));
            
            // Calculate points for each entry
            const updatedEntries = await Promise.all(
              entries.map(async (entry) => {
                // Get team details
                const team = await db.select().from(userTeams).where(eq(userTeams.id, entry.teamId)).limit(1);
                if (!team.length) return entry;
                
                const teamData = team[0];
                const players = await db.select().from(teamPlayers).where(eq(teamPlayers.teamId, teamData.id));
                
                // Calculate points (simplified scoring logic)
                // In production, fetch actual player stats from CricAPI
                let totalPoints = 0;
                
                for (const player of players) {
                  // Base points for selection
                  let playerPoints = 10;
                  
                  // Add bonus for captain (2x) and vice-captain (1.5x)
                  if (player.playerId === teamData.captainId) {
                    playerPoints *= 2;
                  } else if (player.playerId === teamData.viceCaptainId) {
                    playerPoints *= 1.5;
                  }
                  
                  totalPoints += playerPoints;
                }
                
                // Update entry points
                await db.update(contestEntries)
                  .set({ points: totalPoints.toString() })
                  .where(eq(contestEntries.id, entry.id));
                
                return { ...entry, points: totalPoints.toString() };
              })
            );
            
            // Calculate ranks based on points
            const sortedEntries = updatedEntries.sort((a, b) => parseFloat(b.points || "0") - parseFloat(a.points || "0"));
            
            for (let i = 0; i < sortedEntries.length; i++) {
              await db.update(contestEntries)
                .set({ rank: i + 1 })
                .where(eq(contestEntries.id, sortedEntries[i].id));
            }
          }
          
          return {
            success: true,
            message: `Points calculated for ${matchContests.length} contests`,
          };
        } catch (error: any) {
          console.error("Points calculation error:", error);
          throw new Error(`Failed to calculate points: ${error.message}`);
        }
      }),
    
    syncContests: publicProcedure
      .mutation(async () => {
        const db = await import("./db").then(d => d.getDb());
        if (!db) throw new Error("Database not available");
        
        const { contests } = await import("../drizzle/schema");
        const { eq } = await import("drizzle-orm");
        const { getMatches } = await import("../shared/cricketApi");
        
        try {
          // Fetch all matches from CricAPI
          const matchesData = await getMatches();
          
          // Update contest statuses and auto-create contests for new matches
          for (const match of matchesData || []) {
            const matchStatus = match.status?.toLowerCase() || "";
            let contestStatus: "pending" | "live" | "completed" = "pending";
            
            if (matchStatus.includes("live") || matchStatus.includes("inprogress")) {
              contestStatus = "live";
            } else if (matchStatus.includes("complete") || matchStatus.includes("finish")) {
              contestStatus = "completed";
            }
            
            // Check if contests exist for this match
            const existingContests = await db.select().from(contests).where(eq(contests.matchId, match.id));
            
            // Auto-create default contests for new upcoming matches
            if (existingContests.length === 0 && contestStatus === "pending") {
              // Create 3 default contests
              await db.insert(contests).values([
                {
                  matchId: match.id,
                  name: "Mega Contest",
                  entryFee: "50",
                  prizePool: "10000",
                  maxEntries: 1000,
                  currentEntries: 0,
                  status: "pending",
                },
                {
                  matchId: match.id,
                  name: "Head to Head",
                  entryFee: "25",
                  prizePool: "45",
                  maxEntries: 2,
                  currentEntries: 0,
                  status: "pending",
                },
                {
                  matchId: match.id,
                  name: "Winner Takes All",
                  entryFee: "100",
                  prizePool: "900",
                  maxEntries: 10,
                  currentEntries: 0,
                  status: "pending",
                },
              ]);
            } else if (existingContests.length > 0) {
              // Update existing contests status
              await db.update(contests)
                .set({ status: contestStatus })
                .where(eq(contests.matchId, match.id));
            }
          }
          
          return {
            success: true,
            message: "Contests synchronized successfully",
            matchesProcessed: matchesData?.length || 0,
          };
        } catch (error: any) {
          console.error("Contest sync error:", error);
          throw new Error(`Failed to sync contests: ${error.message}`);
        }
      }),
    
    cronSyncContests: publicProcedure
      .input(z.object({ secret: z.string() }))
      .mutation(async ({ input }) => {
        // Validate cron secret
        const CRON_SECRET = process.env.CRON_SECRET || "default-cron-secret";
        
        if (input.secret !== CRON_SECRET) {
          throw new Error("Unauthorized: Invalid cron secret");
        }
        
        // Call syncContests internally
        const db = await import("./db").then(d => d.getDb());
        if (!db) throw new Error("Database not available");
        
        const { contests } = await import("../drizzle/schema");
        const { eq } = await import("drizzle-orm");
        const { getMatches } = await import("../shared/cricketApi");
        
        try {
          const matchesData = await getMatches();
          let updated = 0;
          
          for (const match of matchesData || []) {
            const matchStatus = match.status?.toLowerCase() || "";
            let contestStatus: "pending" | "live" | "completed" = "pending";
            
            if (matchStatus.includes("live") || matchStatus.includes("inprogress")) {
              contestStatus = "live";
            } else if (matchStatus.includes("complete") || matchStatus.includes("finish")) {
              contestStatus = "completed";
            }
            
            const result = await db.update(contests)
              .set({ status: contestStatus })
              .where(eq(contests.matchId, match.id));
            
            updated++;
          }
          
          return {
            success: true,
            message: `Cron sync completed: ${updated} matches processed`,
            timestamp: new Date().toISOString(),
          };
        } catch (error: any) {
          console.error("Cron sync error:", error);
          return {
            success: false,
            message: `Cron sync failed: ${error.message}`,
            timestamp: new Date().toISOString(),
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
