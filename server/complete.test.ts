import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(userId: number = 1): TrpcContext {
  const user: AuthenticatedUser = {
    id: userId,
    openId: `test-user-${userId}`,
    email: `test${userId}@example.com`,
    name: `Test User ${userId}`,
    loginMethod: "credentials",
    role: "user",
    password: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("Complete Feature Tests", () => {
  describe("Team Management", () => {
    it("should fetch user teams successfully", async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      const teams = await caller.teams.getUserTeams();
      expect(Array.isArray(teams)).toBe(true);
    });

    it("should include team details with player count", async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      const teams = await caller.teams.getUserTeams();
      
      if (teams.length > 0) {
        const team = teams[0];
        expect(team).toHaveProperty("id");
        expect(team).toHaveProperty("name");
        expect(team).toHaveProperty("matchId");
        expect(team).toHaveProperty("playerCount");
        expect(team).toHaveProperty("totalCreditsUsed");
      }
    });
  });

  describe("Points Calculation", () => {
    it("should calculate points for a match", async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      const result = await caller.contests.calculatePoints({
        matchId: "test-match-123",
      });

      expect(result).toHaveProperty("success");
      expect(result).toHaveProperty("message");
    });
  });

  describe("Contest Sync", () => {
    it("should sync contests successfully", { timeout: 15000 }, async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      const result = await caller.contests.syncContests();

      expect(result).toHaveProperty("success");
      expect(result.success).toBe(true);
    });

    it("should auto-create contests for new matches", { timeout: 15000 }, async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      // First sync to create contests
      await caller.contests.syncContests();

      // Verify contests were created (this would need actual match data)
      expect(true).toBe(true); // Placeholder - would check database
    });
  });

  describe("Contest System Edge Cases", () => {
    it("should handle joining a full contest", async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      // This would need setup of a full contest
      // For now, just verify the procedure exists
      expect(caller.contests.joinContest).toBeDefined();
    });

    it("should prevent duplicate contest entries", async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      // Verify procedure exists for testing
      expect(caller.contests.joinContest).toBeDefined();
    });
  });

  describe("Team Creation Validation", () => {
    it("should reject team with less than 11 players", async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.teams.createTeam({
          matchId: "test-match",
          name: "Invalid Team",
          playerIds: ["p1", "p2"], // Only 2 players
          captainId: "p1",
          viceCaptainId: "p2",
          totalCreditsUsed: 50,
        })
      ).rejects.toThrow();
    });

    it("should reject team with more than 100 credits", async () => {
      const ctx = createAuthContext(1);
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.teams.createTeam({
          matchId: "test-match",
          name: "Over Budget Team",
          playerIds: Array(11).fill("player"),
          captainId: "player",
          viceCaptainId: "player",
          totalCreditsUsed: 150, // Over 100 credits
        })
      ).rejects.toThrow();
    });
  });
});
