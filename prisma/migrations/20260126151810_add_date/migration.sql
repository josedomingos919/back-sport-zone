/*
  Warnings:

  - Added the required column `data` to the `Movimentos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movimentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "valor" DECIMAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "entrada" BOOLEAN NOT NULL,
    "data" DATETIME NOT NULL
);
INSERT INTO "new_Movimentos" ("createdAt", "descricao", "entrada", "id", "updatedAt", "valor") SELECT "createdAt", "descricao", "entrada", "id", "updatedAt", "valor" FROM "Movimentos";
DROP TABLE "Movimentos";
ALTER TABLE "new_Movimentos" RENAME TO "Movimentos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
