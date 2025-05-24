const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const createCliente = async (data) => {
  const { nome, tipo_cliente, documento, email } = data;

  if (!nome || !tipo_cliente || !documento) {
    throw new Error(
      "Campos obrigatórios faltando: nome, tipo_cliente e documento"
    );
  }

  if (!["PF", "PJ"].includes(tipo_cliente)) {
    throw new Error("Tipo de cliente inválido");
  }

  const existing = await prisma.cliente.findFirst({
    where: {
      OR: [{ email: email ?? "" }, { documento }],
    },
  });

  if (existing) {
    throw new Error("Email ou documento já cadastrado");
  }

  return await prisma.cliente.create({ data });
};

const getAllClientes = async () => {
  return await prisma.cliente.findMany();
};

const getClienteById = async (id) => {
  const cliente = await prisma.cliente.findUnique({
    where: { id: parseInt(id) },
  });
  if (!cliente) {
    throw new Error("Cliente não encontrado");
  }
  return cliente;
};

const updateCliente = async (id, data) => {
  const cliente = await prisma.cliente.findUnique({
    where: { id: parseInt(id) },
  });
  if (!cliente) {
    throw new Error("Cliente não encontrado para atualização");
  }

  return await prisma.cliente.update({
    where: { id: parseInt(id) },
    data,
  });
};

const deleteCliente = async (id) => {
  const cliente = await prisma.cliente.findUnique({
    where: { id: parseInt(id) },
  });
  if (!cliente) {
    throw new Error("Cliente não encontrado para exclusão");
  }

  return await prisma.cliente.delete({ where: { id: parseInt(id) } });
};

module.exports = {
  createCliente,
  getAllClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
};
