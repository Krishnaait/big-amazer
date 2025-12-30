-- Big Amazer Database Schema
-- Create all necessary tables for the fantasy cricket platform

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  openId VARCHAR(64) UNIQUE,
  name TEXT,
  email VARCHAR(320) UNIQUE,
  password VARCHAR(255),
  loginMethod VARCHAR(64),
  role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  lastSignedIn TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- User Teams table
CREATE TABLE IF NOT EXISTS userTeams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  matchId VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  captainId VARCHAR(255) NOT NULL,
  viceCaptainId VARCHAR(255) NOT NULL,
  totalCreditsUsed DECIMAL(10, 2) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_userId (userId),
  INDEX idx_matchId (matchId)
);

-- Team Players table
CREATE TABLE IF NOT EXISTS teamPlayers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  teamId INT NOT NULL,
  playerId VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_teamId (teamId)
);

-- Contests table
CREATE TABLE IF NOT EXISTS contests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  matchId VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  contestType VARCHAR(100) NOT NULL DEFAULT 'educational',
  maxEntries INT NOT NULL,
  currentEntries INT NOT NULL DEFAULT 0,
  status ENUM('pending', 'live', 'completed') NOT NULL DEFAULT 'pending',
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_matchId (matchId),
  INDEX idx_status (status)
);

-- Contest Entries table
CREATE TABLE IF NOT EXISTS contestEntries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contestId INT NOT NULL,
  userId INT NOT NULL,
  teamId INT NOT NULL,
  points DECIMAL(10, 2) NOT NULL DEFAULT 0,
  `rank` INT,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_contestId (contestId),
  INDEX idx_userId (userId),
  INDEX idx_teamId (teamId)
);
