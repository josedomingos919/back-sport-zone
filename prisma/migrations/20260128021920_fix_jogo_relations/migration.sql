/*
  Warnings:

  - You are about to drop the column `adversario` on the `Jogo` table. All the data in the column will be lost.
  - Added the required column `adversarioId` to the `Jogo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jogo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL,
    "adversarioId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "equipaId" INTEGER NOT NULL,
    CONSTRAINT "Jogo_adversarioId_fkey" FOREIGN KEY ("adversarioId") REFERENCES "Equipa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Jogo_equipaId_fkey" FOREIGN KEY ("equipaId") REFERENCES "Equipa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Jogo" ("createdAt", "data", "descricao", "equipaId", "id", "local", "tipo", "updatedAt") SELECT "createdAt", "data", "descricao", "equipaId", "id", "local", "tipo", "updatedAt" FROM "Jogo";
DROP TABLE "Jogo";
ALTER TABLE "new_Jogo" RENAME TO "Jogo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
