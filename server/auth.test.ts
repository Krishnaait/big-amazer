import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createMockContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      cookie: () => {},
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("Authentication System", () => {
  it("should register a new user successfully", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const uniqueEmail = `test${Date.now()}@example.com`;
    
    const result = await caller.auth.register({
      name: "Test User",
      email: uniqueEmail,
      password: "password123",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Registration successful");
  });

  it("should not allow duplicate email registration", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const uniqueEmail = `duplicate${Date.now()}@example.com`;
    
    // Register first time
    await caller.auth.register({
      name: "Test User",
      email: uniqueEmail,
      password: "password123",
    });

    // Try to register again with same email
    await expect(
      caller.auth.register({
        name: "Another User",
        email: uniqueEmail,
        password: "password456",
      })
    ).rejects.toThrow("User with this email already exists");
  });

  it("should validate password minimum length", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.auth.register({
        name: "Test User",
        email: "test@example.com",
        password: "12345", // Less than 6 characters
      })
    ).rejects.toThrow();
  });
});

describe("Cricket API Integration", () => {
  it("should fetch matches successfully", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.cricket.getMatches();

    expect(result.success).toBe(true);
    expect(result).toHaveProperty("live");
    expect(result).toHaveProperty("upcoming");
    expect(result).toHaveProperty("completed");
    expect(Array.isArray(result.live)).toBe(true);
    expect(Array.isArray(result.upcoming)).toBe(true);
    expect(Array.isArray(result.completed)).toBe(true);
  });
});
