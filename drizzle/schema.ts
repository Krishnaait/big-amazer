import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }).unique(),
  password: varchar("password", { length: 255 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * User Teams table - stores fantasy teams created by users
 */
export const userTeams = mysqlTable("userTeams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  matchId: varchar("matchId", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  captainId: varchar("captainId", { length: 255 }).notNull(),
  viceCaptainId: varchar("viceCaptainId", { length: 255 }).notNull(),
  totalCreditsUsed: decimal("totalCreditsUsed", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UserTeam = typeof userTeams.$inferSelect;
export type InsertUserTeam = typeof userTeams.$inferInsert;

/**
 * Team Players table - stores players in each team
 */
export const teamPlayers = mysqlTable("teamPlayers", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull(),
  playerId: varchar("playerId", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

/**
 * Contests table - stores contest information
 */
export const contests = mysqlTable("contests", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  entryFee: decimal("entryFee", { precision: 10, scale: 2 }).notNull(),
  prizePool: decimal("prizePool", { precision: 10, scale: 2 }).notNull(),
  maxEntries: int("maxEntries").notNull(),
  currentEntries: int("currentEntries").default(0).notNull(),
  status: mysqlEnum("status", ["pending", "live", "completed"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Contest = typeof contests.$inferSelect;
export type InsertContest = typeof contests.$inferInsert;

/**
 * Contest Entries table - stores user entries in contests
 */
export const contestEntries = mysqlTable("contestEntries", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull(),
  userId: int("userId").notNull(),
  teamId: int("teamId").notNull(),
  points: decimal("points", { precision: 10, scale: 2 }).default("0").notNull(),
  rank: int("rank"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContestEntry = typeof contestEntries.$inferSelect;
export type InsertContestEntry = typeof contestEntries.$inferInsert;