import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "@/services/AxiosInstance";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");

    if (user.trim() === "" || password.trim() === "") {
      setLoginError("Usuário e senha são obrigatórios.");
      return;
    }

    try {
      const response = await AxiosInstance.post("/api/login", {
        email: user,
        senha: password,
      });

      const { token, user: userData } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/home");
      } else {
        setLoginError("Falha no login. Token não recebido.");
      }
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);
      if (error.response) {
        if (error.response.status === 401) {
          setLoginError("E-mail ou senha incorretos.");
        } else if (error.response.data && error.response.data.message) {
          setLoginError(error.response.data.message);
        } else {
          setLoginError(
            `Erro: ${error.response.status}. Tente novamente mais tarde.`
          );
        }
      } else if (error.request) {
        setLoginError(
          "Não foi possível conectar ao servidor. Verifique sua internet."
        );
      } else {
        setLoginError("Ocorreu um erro inesperado. Tente novamente.");
      }
    }
  };

  return (
    <div className="flex flex-col bg-blue-950 justify-center px-4 items-center min-h-screen">
      <div className="bg-white w-full flex flex-col h-auto sm:h-[28em] py-8 sm:py-0 items-center px-6 space-y-8 sm:space-y-10 justify-center rounded max-w-md">
        <h1 className="text-center text-blue-950 font-bold text-4xl">
          Budgify
        </h1>
        <form className="w-full flex flex-col" onSubmit={handleFormSubmit}>
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuário (E-mail)
            </label>
            <input
              type="text"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
                if (loginError) setLoginError("");
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (loginError) setLoginError("");
              }}
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>

          {loginError && (
            <p className="text-red-500 text-sm text-center mb-3">
              {loginError}
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-950 mt-2 mb-2 text-white rounded px-4 py-2 w-full cursor-pointer hover:bg-blue-800 transition-colors"
          >
            Entrar
          </button>

          <span
            onClick={() => navigate("/cadastro")}
            className="text-blue-500 text-sm text-center mt-4 cursor-pointer hover:underline"
          >
            Não tenho conta. Fazer cadastro!
          </span>
        </form>
      </div>
    </div>
  );
}
