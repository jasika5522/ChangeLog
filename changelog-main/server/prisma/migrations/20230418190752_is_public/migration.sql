/*
  Warnings:

  - You are about to drop the column `public` on the `Update` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Update" DROP COLUMN "public",
ADD COLUMN     "isPublic" BOOLEAN DEFAULT false;
