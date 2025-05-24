/*
  Warnings:

  - You are about to drop the column `descricao` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrcamentoItem" DROP CONSTRAINT "OrcamentoItem_orcamento_id_fkey";

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "cep" TEXT;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "descricao";

-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "condicoes_pagamento" TEXT,
ADD COLUMN     "meios_pagamento" TEXT,
ADD COLUMN     "periodo_garantia" TEXT;

-- AlterTable
ALTER TABLE "OrcamentoItem" ADD COLUMN     "marca" TEXT,
ADD COLUMN     "nome" TEXT,
ADD COLUMN     "unidade_medida" TEXT,
ALTER COLUMN "item_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "cep" TEXT,
ADD COLUMN     "nome_empresa" TEXT;

-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "orcamento_id" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrcamentoItem" ADD CONSTRAINT "OrcamentoItem_orcamento_id_fkey" FOREIGN KEY ("orcamento_id") REFERENCES "Orcamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_orcamento_id_fkey" FOREIGN KEY ("orcamento_id") REFERENCES "Orcamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
