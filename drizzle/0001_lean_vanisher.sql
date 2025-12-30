CREATE TABLE `contestEntries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contestId` int NOT NULL,
	`userId` int NOT NULL,
	`teamId` int NOT NULL,
	`points` decimal(10,2) NOT NULL DEFAULT '0',
	`rank` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contestEntries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`entryFee` decimal(10,2) NOT NULL,
	`prizePool` decimal(10,2) NOT NULL,
	`maxEntries` int NOT NULL,
	`currentEntries` int NOT NULL DEFAULT 0,
	`status` enum('pending','live','completed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `teamPlayers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`teamId` int NOT NULL,
	`playerId` varchar(255) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `teamPlayers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `userTeams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`matchId` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`captainId` varchar(255) NOT NULL,
	`viceCaptainId` varchar(255) NOT NULL,
	`totalCreditsUsed` decimal(10,2) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `userTeams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `openId` varchar(64);--> statement-breakpoint
ALTER TABLE `users` ADD `password` varchar(255);--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_email_unique` UNIQUE(`email`);