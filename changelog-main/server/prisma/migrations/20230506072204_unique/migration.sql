/*
  Warnings:

  - A unique constraint covering the columns `[domainName]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Product_domainName_key" ON "Product"("domainName");
