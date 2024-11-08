/*
  Warnings:

  - Added the required column `category` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "category" "TransactionCategory" NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;
