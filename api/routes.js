const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

// ROTAS USUÁRIOS
router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.post("/login", userController.loginUser);
router.put("/usuarios/:id", userController.updateUsuario);

module.exports = router;
