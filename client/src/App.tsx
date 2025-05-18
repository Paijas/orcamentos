import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PWABadge from "./PWABadge";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>

        <PWABadge />
      </div>
    </Router>
  );
}

export default App;
