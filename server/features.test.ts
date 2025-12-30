import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    password: null,
    loginMethod: "credentials",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
      cookie: () => {},
    } as any,
  };

  return { ctx };
}

describe("Team Creation", () => {
  it("should validate team must have 11 players", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.teams.createTeam({
        matchId: "test-match",
        name: "Test Team",
        players: ["p1", "p2"], // Only 2 players
        captainId: "p1",
        viceCaptainId: "p2",
        totalCreditsUsed: 100,
      })
    ).rejects.toThrow("Team must have exactly 11 players");
  });

  it("should validate captain and vice-captain are different", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.teams.createTeam({
        matchId: "test-match",
        name: "Test Team",
        players: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11"],
        captainId: "p1",
        viceCaptainId: "p1", // Same as captain
        totalCreditsUsed: 100,
      })
    ).rejects.toThrow("Captain and vice-captain must be different players");
  });
});

describe("Contest System", () => {
  it("should fetch contests for a match", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contests.getContests({ matchId: "test-match" });

    expect(result).toHaveProperty("success");
    expect(result).toHaveProperty("contests");
    expect(result).toHaveProperty("count");
    expect(result.success).toBe(true);
    expect(Array.isArray(result.contests)).toBe(true);
  });

  it("should fetch leaderboard for a contest", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    try {
      const result = await caller.contests.getLeaderboard({ contestId: 999 });
      
      // If contest doesn't exist, it should throw
      expect(result).toHaveProperty("success");
    } catch (error: any) {
      // Expected to throw "Contest not found" for non-existent contest
      expect(error.message).toContain("Contest not found");
    }
  });
});

describe("Cricket API Integration", () => {
  it("should fetch matches successfully", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.cricket.getMatches();

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
    expect(result).toHaveProperty("live");
    expect(result).toHaveProperty("upcoming");
    expect(result).toHaveProperty("completed");
  }, 10000); // 10 second timeout for API call

  it("should handle match squad request", async () => {
    const { ctx } = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    try {
      const result = await caller.cricket.getMatchSquad({ matchId: "invalid-match-id" });
      
      // Should either return data or throw error
      expect(result).toHaveProperty("success");
    } catch (error: any) {
      // Expected for invalid match ID
      expect(error.message).toContain("Squad not available");
    }
  });
});
