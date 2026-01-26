-- CreateTable
CREATE TABLE "Atleta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" DATETIME NOT NULL,
    "posicao" TEXT NOT NULL,
    "publico" BOOLEAN NOT NULL DEFAULT false,
    "foto" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Atleta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Clube" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "provinciaId" INTEGER NOT NULL,
    CONSTRAINT "Clube_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Clube_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "Provincia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Equipa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoria" TEXT NOT NULL,
    "escalao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Equipa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Movimentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "valor" DECIMAL NOT NULL,
    "obs" TEXT NOT NULL,
    "entrada" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Treino" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "duracaoMin" INTEGER NOT NULL,
    "local" TEXT NOT NULL,
    "equipaId" INTEGER NOT NULL,
    CONSTRAINT "Treino_equipaId_fkey" FOREIGN KEY ("equipaId") REFERENCES "Equipa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notificacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "titulo" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Notificacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Jogo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL,
    "adversario" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "equipaId" INTEGER NOT NULL,
    CONSTRAINT "Jogo_equipaId_fkey" FOREIGN KEY ("equipaId") REFERENCES "Equipa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HistoricoAtleta" (
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
    "atletaId" INTEGER NOT NULL,
    CONSTRAINT "HistoricoAtleta_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Destaque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "foto" TEXT,
    "atletaId" INTEGER NOT NULL,
    "aprovado" BOOLEAN NOT NULL,
    CONSTRAINT "Destaque_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Videos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "url" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "atletaId" INTEGER NOT NULL,
    "aprovado" BOOLEAN NOT NULL,
    CONSTRAINT "Videos_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "permissoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "permissao" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "permissoes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
