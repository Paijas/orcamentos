import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("pf");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  //   const [cidade, setCidade] = useState("");
  //   const [especialidade, setEspecialidade] = useState("");
  //   const [aceiteTermos, setAceiteTermos] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !nome ||
      !sobrenome ||
      !email ||
      !cpfCnpj ||
      !telefone ||
      //   !especialidade ||
      //   !cidade ||
      !senha ||
      !confirmarSenha
    ) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // if (!aceiteTermos) {
    //   alert(
    //     "Você precisa aceitar os termos de uso e políticas de privacidade!"
    //   );
    //   return;
    // }

    console.log("Dados do cadastro:", {
      nome,
      sobrenome,
      email,
      tipoUsuario,
      cpfCnpj,
      telefone,
      //   especialidade,
      //   cidade,
      senha,
    });

    alert("Cadastro realizado com sucesso!");
    navigate("/");
  };

  return (
    <div className="flex w-full min-h-screen bg-blue-950 justify-center items-center py-10">
      <div className="bg-white w-[28em] flex flex-col h-auto items-center px-6 py-8 gap-4 rounded ">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Cadastro</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome *
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sobrenome *
            </label>
            <input
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Usuário *
            </label>
            <select
              value={tipoUsuario}
              onChange={(e) => setTipoUsuario(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white  outline-none focus:outline-none"
              required
            >
              <option value="pf">Pessoa Física (CPF)</option>
              <option value="pj">Pessoa Jurídica (CNPJ)</option>
            </select>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {tipoUsuario === "pf" ? "CPF *" : "CNPJ *"}
            </label>
            <input
              type="text"
              value={cpfCnpj}
              onChange={(e) => setCpfCnpj(e.target.value)}
              placeholder={
                tipoUsuario === "pf" ? "Digite seu CPF" : "Digite seu CNPJ"
              }
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone/Celular *
            </label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(xx) xxxxx-xxxx"
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          {/* <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Especialidade *
            </label>
            <input
              type="text"
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              placeholder="Ex.: Eletricista, Encanador, Marceneiro"
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cidade/Região de Atuação *
            </label>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Ex.: São Paulo - SP"
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div> */}

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha *
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar Senha *
            </label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          {/* <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              checked={aceiteTermos}
              onChange={(e) => setAceiteTermos(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-300 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700">
              Aceito os{" "}
              <a href="/termos" className="text-blue-600 underline">
                termos de uso
              </a>{" "}
              e{" "}
              <a href="/politica" className="text-blue-600 underline">
                políticas de privacidade
              </a>{" "}
              *
            </label>
          </div> */}

          <button
            type="submit"
            className="bg-blue-950 text-white rounded px-4 py-2 mt-2"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
