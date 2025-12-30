ALTER TABLE `contests` ADD `contestType` varchar(100) DEFAULT 'educational' NOT NULL;--> statement-breakpoint
ALTER TABLE `contests` DROP COLUMN `entryFee`;--> statement-breakpoint
ALTER TABLE `contests` DROP COLUMN `prizePool`;