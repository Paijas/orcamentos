import React from "react";
import { useNavigate } from "react-router-dom";

function BotaoVoltar() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <nav className="w-full h-16 bg-blue-950 flex items-center shadow-md px-4 gap-4">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <button
        className="text-white gap-2 items-center flex"
        onClick={handleVoltar}
      >
        <span className="material-symbols-outlined">arrow_back</span>Voltar
      </button>
    </nav>
  );
}

export default BotaoVoltar;
