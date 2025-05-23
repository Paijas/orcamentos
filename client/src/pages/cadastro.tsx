import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "@/services/AxiosInstance";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("PF");
  const [cpfCnpj, setCpfCnpj] = useState(""); // Alterado para string
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  // Função para validar CPF
  const isValidCPF = (cpf: string): boolean => {
    cpf = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf[i - 1]) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[9])) return false;

    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf[i - 1]) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[10])) return false;

    return true;
  };

  // Função para validar CNPJ
  const isValidCNPJ = (cnpj: string): boolean => {
    cnpj = cnpj.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj[i]) * weights1[i];
    }
    let remainder = sum % 11;
    if (remainder < 2) {
      if (parseInt(cnpj[12]) !== 0) return false;
    } else {
      if (parseInt(cnpj[12]) !== 11 - remainder) return false;
    }

    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj[i]) * weights2[i];
    }
    remainder = sum % 11;
    if (remainder < 2) {
      if (parseInt(cnpj[13]) !== 0) return false;
    } else {
      if (parseInt(cnpj[13]) !== 11 - remainder) return false;
    }

    return true;
  };

  // Função combinada para validar CPF ou CNPJ
  const isValidCPFOrCNPJ = (doc: string): boolean => {
    doc = doc.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    if (tipoUsuario === "PF") {
      return isValidCPF(doc);
    } else {
      return isValidCNPJ(doc);
    }
  };

  const isValidPhone = (phone: string): boolean => {
    phone = phone.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    return /^[0-9]{10,11}$/.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const documentoStr = cpfCnpj.replace(/[^\d]/g, "");
    const telefoneStr = telefone.replace(/[^\d]/g, "");

    if (
      !nome ||
      !sobrenome ||
      !email ||
      !tipoUsuario ||
      !documentoStr ||
      !telefoneStr ||
      !senha ||
      !confirmarSenha
    ) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    if (!isValidCPFOrCNPJ(documentoStr)) {
      alert(
        tipoUsuario === "PF"
          ? "CPF inválido! Verifique os dígitos."
          : "CNPJ inválido! Verifique os dígitos."
      );
      return;
    }

    if (!isValidPhone(telefoneStr)) {
      alert("Número de celular inválido! Deve conter 10 ou 11 dígitos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await AxiosInstance.post("/api/users", {
        nome: `${nome} ${sobrenome}`,
        email,
        celular: telefoneStr,
        senha,
        tipo_usuario: tipoUsuario,
        documento: documentoStr,
      });

      console.log("Dados do cadastro:", {
        nome,
        sobrenome,
        email,
        tipoUsuario,
        cpfCnpj: documentoStr,
        telefone: telefoneStr,
        senha,
      });

      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao realizar o cadastro. Tente novamente.");
    }
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center px-6 py-8 gap-4 rounded">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,200&icon_names=arrow_back"
      />
      <button
        onClick={() => navigate("/")}
        className="flex flex-row gap-2 bg-transparent py-1 rounded absolute top-2 left-4 text-blue-950 font-semibold text-lg items-center"
      >
        <span className="material-symbols-outlined">arrow_back</span> Voltar
      </button>

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
            className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white outline-none focus:outline-none"
            required
          >
            <option value="PF">Pessoa Física (CPF)</option>
            <option value="pj">Pessoa Jurídica (CNPJ)</option>
          </select>
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {tipoUsuario === "PF" ? "CPF *" : "CNPJ *"}
          </label>
          <input
            type="text"
            value={cpfCnpj}
            onChange={(e) => setCpfCnpj(e.target.value)}
            placeholder={
              tipoUsuario === "PF" ? "Digite seu CPF" : "Digite seu CNPJ"
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

        <button
          type="submit"
          className="bg-blue-950 text-white rounded px-4 py-2 mt-2"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
