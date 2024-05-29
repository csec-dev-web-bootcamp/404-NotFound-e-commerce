/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CategoryEnum" AS ENUM ('electronics', 'home-kitchen', 'fashion-accessories', 'health-personal', 'sports-outdoors');

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" "CategoryEnum" NOT NULL DEFAULT 'electronics';

-- DropTable
DROP TABLE "Category";
