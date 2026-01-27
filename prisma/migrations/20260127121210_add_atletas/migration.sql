/*
  Warnings:

  - Added the required column `equipaId` to the `Atleta` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Atleta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" DATETIME NOT NULL,
    "posicao" TEXT NOT NULL,
    "publico" BOOLEAN NOT NULL DEFAULT false,
    "foto" TEXT,
    "equipaId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Atleta_equipaId_fkey" FOREIGN KEY ("equipaId") REFERENCES "Equipa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Atleta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Atleta" ("createdAt", "foto", "id", "nascimento", "nome", "posicao", "publico", "updatedAt", "userId") SELECT "createdAt", "foto", "id", "nascimento", "nome", "posicao", "publico", "updatedAt", "userId" FROM "Atleta";
DROP TABLE "Atleta";
ALTER TABLE "new_Atleta" RENAME TO "Atleta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
