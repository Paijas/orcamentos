const OrcamentoServices = require("../services/orcamentoService");

const createOrcamento = async (req, res) => {
  try {
    const { usuario_id } = req.body;
    if (!usuario_id) {
      return res.status(400).json({ error: "ID do usuário é obrigatório" });
    }

    const orcamentoData = req.body;
    const orcamento = await OrcamentoServices.createOrcamento(orcamentoData);

    return res.status(201).json({
      message: "Orçamento criado com sucesso",
      data: orcamento,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateOrcamento = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario_id } = req.body;
    if (!usuario_id) {
      return res.status(400).json({ error: "ID do usuário é obrigatório" });
    }

    const orcamentoData = req.body;
    const orcamento = await OrcamentoServices.updateOrcamento(
      Number(id),
      orcamentoData
    );

    return res.status(200).json({
      message: "Orçamento atualizado com sucesso",
      data: orcamento,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteOrcamento = async (req, res) => {
  try {
    const { id } = req.params;
    await OrcamentoServices.deleteOrcamento(Number(id));

    return res.status(200).json({
      message: "Orçamento deletado com sucesso",
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getOrcamentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const orcamento = await OrcamentoServices.getOrcamentoById(Number(id));

    return res.status(200).json({
      message: "Orçamento encontrado",
      data: orcamento,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getOrcamentosByClienteId = async (req, res) => {
  try {
    const { clienteId } = req.params;
    const orcamentos = await OrcamentoServices.getOrcamentosByClienteId(
      Number(clienteId)
    );

    return res.status(200).json({
      message: "Orçamentos encontrados",
      data: orcamentos,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrcamento,
  updateOrcamento,
  deleteOrcamento,
  getOrcamentoById,
  getOrcamentosByClienteId,
};
