/*
  Warnings:

  - You are about to drop the column `data` on the `HistoricoAtleta` table. All the data in the column will be lost.
  - You are about to drop the column `equipaId` on the `HistoricoAtleta` table. All the data in the column will be lost.
  - You are about to drop the column `observacao` on the `HistoricoAtleta` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `HistoricoAtleta` table. All the data in the column will be lost.
  - Added the required column `jogoId` to the `HistoricoAtleta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Jogo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_HistoricoAtleta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "minutos" INTEGER,
    "gols" INTEGER,
    "assistencias" INTEGER,
    "faltas" INTEGER,
    "avaliacaoStar" INTEGER,
    "jogoId" INTEGER NOT NULL,
    "atletaId" INTEGER NOT NULL,
    CONSTRAINT "HistoricoAtleta_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "Jogo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "HistoricoAtleta_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_HistoricoAtleta" ("assistencias", "atletaId", "avaliacaoStar", "createdAt", "faltas", "gols", "id", "minutos", "updatedAt") SELECT "assistencias", "atletaId", "avaliacaoStar", "createdAt", "faltas", "gols", "id", "minutos", "updatedAt" FROM "HistoricoAtleta";
DROP TABLE "HistoricoAtleta";
ALTER TABLE "new_HistoricoAtleta" RENAME TO "HistoricoAtleta";
CREATE TABLE "new_Jogo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL,
    "adversario" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "equipaId" INTEGER NOT NULL,
    CONSTRAINT "Jogo_equipaId_fkey" FOREIGN KEY ("equipaId") REFERENCES "Equipa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Jogo" ("adversario", "createdAt", "data", "equipaId", "id", "local", "tipo", "updatedAt") SELECT "adversario", "createdAt", "data", "equipaId", "id", "local", "tipo", "updatedAt" FROM "Jogo";
DROP TABLE "Jogo";
ALTER TABLE "new_Jogo" RENAME TO "Jogo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
