const clienteService = require("../services/clienteService");

module.exports = {
  async create(req, res) {
    try {
      const cliente = await clienteService.createCliente(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const clientes = await clienteService.getAllClientes();
      res.status(200).json(clientes);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao listar os clientes", details: error.message });
    }
  },

  async getById(req, res) {
    try {
      const cliente = await clienteService.getClienteById(req.params.id);
      res.status(200).json(cliente);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const cliente = await clienteService.updateCliente(
        req.params.id,
        req.body
      );
      res.status(200).json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await clienteService.deleteCliente(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
