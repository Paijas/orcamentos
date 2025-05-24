const itemService = require("../services/itemService");

module.exports = {
  async create(req, res) {
    try {
      const item = await itemService.createItem(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const items = await itemService.getAllItems();
      res.status(200).json(items);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao listar os itens", details: error.message });
    }
  },

  async getById(req, res) {
    try {
      const item = await itemService.getItemById(req.params.id);
      res.status(200).json(item);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const item = await itemService.updateItem(req.params.id, req.body);
      res.status(200).json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await itemService.deleteItem(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
