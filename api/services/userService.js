const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createUser = async (data) => {
  const { nome, email, celular, senha, tipo_usuario, documento } = data;

  if (!nome || !email || !senha || !tipo_usuario || !documento) {
    throw new Error("Campos obrigatórios faltando");
  }
  if (!["PF", "PJ"].includes(tipo_usuario)) {
    throw new Error("Tipo de usuário inválido");
  }

  const existingUser = await prisma.usuario.findFirst({
    where: { OR: [{ email }, { documento }] },
  });
  if (existingUser) {
    throw new Error("Email ou documento já cadastrado");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(senha, saltRounds);

  return await prisma.usuario.create({
    data: {
      nome,
      email,
      celular,
      senha: hashedPassword,
      tipo_usuario,
      documento,
    },
  });
};

const getAllUsers = async () => {
  return await prisma.usuario.findMany();
};

const getUserById = async (id) => {
  const user = await prisma.usuario.findUnique({ where: { id: parseInt(id) } });
  if (!user) {
    throw new Error("Usuário não encontrado");
  }
  return user;
};

const loginUser = async (email, senha) => {
  const user = await prisma.usuario.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  const passwordValid = await bcrypt.compare(senha, user.senha);

  if (!passwordValid) {
    throw new Error("Email ou senha incorretos!");
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET_ORCAMENTOS,
    { expiresIn: "24h" }
  );

  return { token, user: { id: user.id, email: user.email, nome: user.nome } };
};

const updateUsuario = async (id, data) => {
  return prisma.usuario.update({
    where: { id: parseInt(id) },
    data,
  });
};

module.exports = { updateUsuario };

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  loginUser,
  updateUsuario,
};
