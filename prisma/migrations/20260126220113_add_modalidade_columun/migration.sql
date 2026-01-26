/*
  Warnings:

  - Added the required column `modalidade` to the `Clube` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clube" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "provinciaId" INTEGER NOT NULL,
    CONSTRAINT "Clube_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Clube_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "Provincia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Clube" ("ano", "createdAt", "email", "id", "name", "provinciaId", "telefone", "updatedAt", "userId") SELECT "ano", "createdAt", "email", "id", "name", "provinciaId", "telefone", "updatedAt", "userId" FROM "Clube";
DROP TABLE "Clube";
ALTER TABLE "new_Clube" RENAME TO "Clube";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
