import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "@/services/AxiosInstance";
export default function login() {
  const navigate = useNavigate();

  const [user, setUser] = useState(String);
  const [password, setPassword] = useState(String);

  const handleSubmit = async (username: string, password: string) => {
    try {
      if (username.trim() !== "" && password.trim() !== "") {
        const response = await AxiosInstance.post("/api/login", {
          email: username,
          senha: password,
        });

        const { token, user } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/home");
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="flex flex-col bg-blue-950 justify-center items-center min-h-screen">
      <div className="bg-white w-[22em] flex flex-col h-[26em] items-center px-6 justify-center  rounded">
        <form
          className="w-full flex flex-col"
          onSubmit={(e) => {
            [e.preventDefault(), handleSubmit(user, password)];
          }}
        >
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuário
            </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />
          </div>
          <div className="w-full mb-4 gap-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded text-slate-800 focus:ring-2 focus:ring-blue-300 bg-white appearance-none outline-none focus:outline-none"
              required
            />

            <span className="text-blue-500 cursor-pointer text-sm font-regular">
              Esqueci minha senha.
            </span>
          </div>

          <button
            type="submit"
            className="bg-blue-950 mt-6 mb-2 text-white rounded px-4 py-2 w-full cursor-pointer "
          >
            Entrar
          </button>

          <span
            onClick={() => navigate("/cadastro")}
            className="text-blue-500 text-sm text-center flex mx-auto "
          >
            Não tenho conta. Fazer cadastro!
          </span>
        </form>
      </div>
    </div>
  );
}
