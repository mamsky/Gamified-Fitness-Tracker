/*
  Warnings:

  - You are about to drop the column `caloriesBurned` on the `Workout` table. All the data in the column will be lost.
  - You are about to drop the column `exerciseName` on the `Workout` table. All the data in the column will be lost.
  - Added the required column `calories_burned` to the `Workout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exercise_name` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "caloriesBurned",
DROP COLUMN "exerciseName",
ADD COLUMN     "calories_burned" INTEGER NOT NULL,
ADD COLUMN     "exercise_name" TEXT NOT NULL;
