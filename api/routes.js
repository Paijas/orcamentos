const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const itemController = require("./controllers/itemController");
const clienteController = require("./controllers/clienteController");
const orcamentoController = require("./controllers/orcamentosController");

// ROTAS USUÁRIOS

router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.post("/login", userController.loginUser);
router.put("/usuarios/:id", userController.updateUsuario);

//ROTAS ITEMS

router.post("/itens", itemController.create);
router.get("/itens", itemController.getAll);
router.get("/itens/:id", itemController.getById);
router.put("/itens/:id", itemController.update);
router.delete("/itens/:id", itemController.delete);

//ROTAS CLIENTES

router.post("/clientes", clienteController.create);
router.get("/clientes", clienteController.getAll);
router.get("/clientes/:id", clienteController.getById);
router.put("/clientes/:id", clienteController.update);
router.delete("/clientes/:id", clienteController.delete);

//ROTAS ORÇAMENTOS

router.post("/orcamentos", orcamentoController.createOrcamento);
router.put("/orcamentos/:id", orcamentoController.updateOrcamento);
router.delete("/orcamentos/:id", orcamentoController.deleteOrcamento);
router.get("/orcamentos/:id", orcamentoController.getOrcamentoById);
router.get(
  "/orcamentos/cliente/:clienteId",
  orcamentoController.getOrcamentosByClienteId
);

module.exports = router;
