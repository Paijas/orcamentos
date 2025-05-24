const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const createOrcamento = async (data) => {
  // Validações
  if (!data.nome || data.nome.trim() === "") {
    throw new Error("Nome do orçamento é obrigatório");
  }

  if (!data.cliente_id) {
    throw new Error("Cliente é obrigatório");
  }

  if (!data.data_validade || isNaN(new Date(data.data_validade).getTime())) {
    throw new Error("Data de validade inválida");
  }

  if (data.preco_total < 0) {
    throw new Error("Preço total não pode ser negativo");
  }

  // Verificar se cliente existe
  const cliente = await prisma.cliente.findUnique({
    where: { id: data.cliente_id },
  });
  if (!cliente) {
    throw new Error("Cliente não encontrado");
  }

  // Verificar se usuário existe
  const usuario = await prisma.usuario.findUnique({
    where: { id: data.usuario_id },
  });
  if (!usuario) {
    throw new Error("Usuário não encontrado");
  }

  // Validar itens
  const avisos = [];
  for (const item of data.itens) {
    if (!item.quantidade || item.quantidade <= 0) {
      throw new Error("Quantidade deve ser maior que zero");
    }
    if (!item.preco_unitario || item.preco_unitario <= 0) {
      throw new Error("Preço unitário deve ser maior que zero");
    }
    if (!item.item_id && !item.nome) {
      throw new Error("Nome é obrigatório para itens livres");
    }
    if (item.item_id) {
      const itemCadastrado = await prisma.item.findUnique({
        where: { id: item.item_id },
      });
      if (!itemCadastrado) {
        throw new Error(`Item com ID ${item.item_id} não encontrado`);
      }
      // Aviso sobre preço desatualizado
      if (item.preco_unitario !== itemCadastrado.preco_unitario) {
        avisos.push(
          `O preço do item "${itemCadastrado.nome}" foi alterado de R$${itemCadastrado.preco_unitario} para R$${item.preco_unitario} no orçamento`
        );
      }
    }
  }

  // Validar serviços
  for (const servico of data.servicos) {
    if (!servico.titulo || servico.titulo.trim() === "") {
      throw new Error("Título do serviço é obrigatório");
    }
    if (!servico.preco || servico.preco <= 0) {
      throw new Error("Preço do serviço deve ser maior que zero");
    }
  }

  // Criar orçamento
  const orcamento = await prisma.orcamento.create({
    data: {
      nome: data.nome,
      cliente_id: data.cliente_id,
      usuario_id: data.usuario_id,
      preco_total: data.preco_total,
      data_validade: new Date(data.data_validade),
      status: data.status || "Pendente",
      meios_pagamento: data.meios_pagamento,
      periodo_garantia: data.periodo_garantia,
      itens: {
        create: data.itens.map((item) => ({
          item_id: item.item_id,
          nome: item.nome,
          marca: item.marca,
          preco_unitario: item.preco_unitario,
          quantidade: item.quantidade,
          unidade_medida: item.unidade_medida,
        })),
      },
      servicos: {
        create: data.servicos.map((servico) => ({
          titulo: servico.titulo,
          preco: servico.preco,
        })),
      },
    },
    include: {
      itens: true,
      servicos: true,
      cliente: true,
      usuario: true,
    },
  });

  return { orcamento, avisos };
};

const updateOrcamento = async (id, data) => {
  // Validações
  if (!data.nome || data.nome.trim() === "") {
    throw new Error("Nome do orçamento é obrigatório");
  }
  if (!data.cliente_id) {
    throw new Error("Cliente é obrigatório");
  }
  if (!data.data_validade || isNaN(new Date(data.data_validade).getTime())) {
    throw new Error("Data de validade inválida");
  }
  if (data.preco_total < 0) {
    throw new Error("Preço total não pode ser negativo");
  }
  const cliente = await prisma.cliente.findUnique({
    where: { id: data.cliente_id },
  });
  if (!cliente) {
    throw new Error("Cliente não encontrado");
  }
  const usuario = await prisma.usuario.findUnique({
    where: { id: data.usuario_id },
  });
  if (!usuario) {
    throw new Error("Usuário não encontrado");
  }
  const avisos = [];
  for (const item of data.itens) {
    if (!item.quantidade || item.quantidade <= 0) {
      throw new Error("Quantidade deve ser maior que zero");
    }
    if (!item.preco_unitario || item.preco_unitario <= 0) {
      throw new Error("Preço unitário deve ser maior que zero");
    }
    if (!item.item_id && !item.nome) {
      throw new Error("Nome é obrigatório para itens livres");
    }
    if (item.item_id) {
      const itemCadastrado = await prisma.item.findUnique({
        where: { id: item.item_id },
      });
      if (!itemCadastrado) {
        throw new Error(`Item com ID ${item.item_id} não encontrado`);
      }
      if (item.preco_unitario !== itemCadastrado.preco_unitario) {
        avisos.push(
          `O preço do item "${itemCadastrado.nome}" foi alterado de R$${itemCadastrado.preco_unitario} para R$${item.preco_unitario} no orçamento`
        );
      }
    }
  }
  for (const servico of data.servicos) {
    if (!servico.titulo || servico.titulo.trim() === "") {
      throw new Error("Título do serviço é obrigatório");
    }
    if (!servico.preco || servico.preco <= 0) {
      throw new Error("Preço do serviço deve ser maior que zero");
    }
  }

  // Verificar se o orçamento existe
  const orcamentoExistente = await prisma.orcamento.findUnique({
    where: { id },
  });
  if (!orcamentoExistente) {
    throw new Error("Orçamento não encontrado");
  }

  // Atualizar orçamento em uma transação
  const orcamento = await prisma.$transaction(async (tx) => {
    // Deletar itens e serviços antigos
    await tx.orcamentoItem.deleteMany({ where: { orcamento_id: id } });
    await tx.servico.deleteMany({ where: { orcamento_id: id } });

    // Atualizar orçamento e criar novos itens e serviços
    return tx.orcamento.update({
      where: { id },
      data: {
        nome: data.nome,
        cliente_id: data.cliente_id,
        usuario_id: data.usuario_id,
        preco_total: data.preco_total,
        data_validade: new Date(data.data_validade),
        status: data.status || "Pendente",
        meios_pagamento: data.meios_pagamento,

        periodo_garantia: data.periodo_garantia,
        itens: {
          create: data.itens.map((item) => ({
            item: item.item_id ? { connect: { id: item.item_id } } : undefined, // Corrige a relação
            nome: item.nome,
            marca: item.marca,
            preco_unitario: item.preco_unitario,
            quantidade: item.quantidade,
            unidade_medida: item.unidade_medida,
          })),
        },
        servicos: {
          create: data.servicos.map((servico) => ({
            titulo: servico.titulo,
            preco: servico.preco,
          })),
        },
      },
      include: {
        itens: true,
        servicos: true,
        cliente: true,
        usuario: true,
      },
    });
  });

  return { orcamento, avisos };
};

const deleteOrcamento = async (id) => {
  const orcamentoExistente = await prisma.orcamento.findUnique({
    where: { id },
  });
  if (!orcamentoExistente) {
    throw new Error("Orçamento não encontrado");
  }

  await prisma.orcamento.delete({
    where: { id },
  });
};

const getOrcamentoById = async (id) => {
  const orcamento = await prisma.orcamento.findUnique({
    where: { id },
    include: {
      itens: true,
      servicos: true,
      cliente: true,
      usuario: true,
    },
  });

  if (!orcamento) {
    throw new Error("Orçamento não encontrado");
  }

  return orcamento;
};

const getOrcamentosByClienteId = async (clienteId) => {
  // Verificar se o cliente existe
  const cliente = await prisma.cliente.findUnique({
    where: { id: clienteId },
  });
  if (!cliente) {
    throw new Error("Cliente não encontrado");
  }

  // Buscar orçamentos do cliente
  const orcamentos = await prisma.orcamento.findMany({
    where: { cliente_id: clienteId },
    include: {
      itens: true,
      servicos: true,
      cliente: true,
      usuario: true,
    },
  });

  return orcamentos;
};

module.exports = {
  createOrcamento,
  updateOrcamento,
  deleteOrcamento,
  getOrcamentoById,
  getOrcamentosByClienteId,
};
