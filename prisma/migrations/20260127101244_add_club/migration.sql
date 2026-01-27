/*
  Warnings:

  - You are about to drop the column `userId` on the `Equipa` table. All the data in the column will be lost.
  - Added the required column `clubeId` to the `Equipa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treinadorId` to the `Equipa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipaId` to the `HistoricoAtleta` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Equipa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoria" TEXT NOT NULL,
    "escalao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "treinadorId" INTEGER NOT NULL,
    "clubeId" INTEGER NOT NULL,
    CONSTRAINT "Equipa_treinadorId_fkey" FOREIGN KEY ("treinadorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Equipa_clubeId_fkey" FOREIGN KEY ("clubeId") REFERENCES "Clube" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Equipa" ("categoria", "createdAt", "escalao", "id", "nome", "updatedAt") SELECT "categoria", "createdAt", "escalao", "id", "nome", "updatedAt" FROM "Equipa";
DROP TABLE "Equipa";
ALTER TABLE "new_Equipa" RENAME TO "Equipa";
CREATE TABLE "new_HistoricoAtleta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "data" DATETIME NOT NULL,
    "tipo" TEXT NOT NULL,
    "observacao" TEXT,
    "minutos" INTEGER,
    "gols" INTEGER,
    "assistencias" INTEGER,
    "faltas" INTEGER,
    "avaliacaoStar" INTEGER,
    "equipaId" INTEGER NOT NULL,
    "atletaId" INTEGER NOT NULL,
    CONSTRAINT "HistoricoAtleta_equipaId_fkey" FOREIGN KEY ("equipaId") REFERENCES "Equipa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "HistoricoAtleta_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HistoricoAtleta" ("assistencias", "atletaId", "avaliacaoStar", "createdAt", "data", "faltas", "gols", "id", "minutos", "observacao", "tipo", "updatedAt") SELECT "assistencias", "atletaId", "avaliacaoStar", "createdAt", "data", "faltas", "gols", "id", "minutos", "observacao", "tipo", "updatedAt" FROM "HistoricoAtleta";
DROP TABLE "HistoricoAtleta";
ALTER TABLE "new_HistoricoAtleta" RENAME TO "HistoricoAtleta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
