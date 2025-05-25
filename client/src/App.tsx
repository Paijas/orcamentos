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
import PrivateRoute from "./components/privateRouter";

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
        </Routes>

        <PWABadge />
      </div>
    </Router>
  );
}

export default App;
