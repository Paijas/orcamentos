const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erro interno do servidor" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} `);
});
