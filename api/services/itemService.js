const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const createItem = async (data) => {
  const { nome, preco_unitario, unidade_medida } = data;

  if (!nome || !preco_unitario || !unidade_medida) {
    throw new Error(
      "Campos obrigatórios faltando: nome, preco_unitario e unidade_medida"
    );
  }

  return await prisma.item.create({ data });
};

const getAllItems = async () => {
  return await prisma.item.findMany();
};

const getItemById = async (id) => {
  const item = await prisma.item.findUnique({ where: { id: parseInt(id) } });
  if (!item) {
    throw new Error("Item não encontrado");
  }
  return item;
};

const updateItem = async (id, data) => {
  const existingItem = await prisma.item.findUnique({
    where: { id: parseInt(id) },
  });
  if (!existingItem) {
    throw new Error("Item não encontrado para atualização");
  }

  return await prisma.item.update({
    where: { id: parseInt(id) },
    data,
  });
};

const deleteItem = async (id) => {
  const existingItem = await prisma.item.findUnique({
    where: { id: parseInt(id) },
  });
  if (!existingItem) {
    throw new Error("Item não encontrado para exclusão");
  }

  return await prisma.item.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
