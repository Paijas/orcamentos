import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PWABadge from "./PWABadge";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Orcamentos from "./pages/orcamentos/orcamentos";
import Clientes from "./pages/clientes/clientes";
import NovoCliente from "./pages/clientes/novoCliente";
import VisualizarCliente from "./pages/clientes/selectCliente";
import EditarCliente from "./pages/clientes/editarCliente";
import Itens from "./pages/itens/itens";
import VisualizarItem from "./pages/itens/selectItem";
import NovoItem from "./pages/itens/novoItem";
import PrivateRoute from "./components/privateRouter";
import NovoOrcamento from "./pages/orcamentos/novoOrcamento";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/home"
            element={
              // <PrivateRoute>
              <Home />
              //</PrivateRoute>
            }
          />
          <Route
            path="/orcamentos"
            element={
              // <PrivateRoute>
              <Orcamentos />
              //</PrivateRoute>
            }
          />
          <Route
            path="/clientes"
            element={
              // <PrivateRoute>
              <Clientes />
              //</PrivateRoute>
            }
          />
          <Route
            path="/clientes/novo"
            element={
              // <PrivateRoute>
              <NovoCliente />
              //</PrivateRoute>
            }
          />
          <Route
            path="/clientes/:id"
            element={
              // <PrivateRoute>
              <VisualizarCliente />
              //</PrivateRoute>
            }
          />

          <Route
            path="/clientes/editar/:id"
            element={
              // <PrivateRoute>
              <EditarCliente />
              //</PrivateRoute>
            }
          />

          <Route
            path="/itens"
            element={
              // <PrivateRoute>
              <Itens />
              //</PrivateRoute>
            }
          />
          <Route
            path="/itens/novo"
            element={
              // <PrivateRoute>
              <NovoItem />
              //</PrivateRoute>
            }
          />
          <Route
            path="/itens/:id"
            element={
              // <PrivateRoute>
              <VisualizarItem />
              //</PrivateRoute>
            }
          />
          <Route
            path="/orcamentos/novo"
            element={
              // <PrivateRoute>
              <NovoOrcamento />
              //</PrivateRoute>
            }
          />
        </Routes>

        <PWABadge />
      </div>
    </Router>
  );
}

export default App;
