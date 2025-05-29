import React, { useEffect, useState } from "react";
import Option from "../components/option";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useAuth } from "@/services/AuthContext";
import AxiosInstance from "@/services/AxiosInstance";
import { useNavigate } from "react-router-dom";

import { LogOut } from "lucide-react";
export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orcamentos, setOrcamentos] = useState([]);

  const getInitials = (name: string | undefined): string => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    const first = parts[0]?.[0] || "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
    return `${first}${last}`.toUpperCase();
  };

  const orcamentosRecentes = async () => {
    try {
      const response = await AxiosInstance.get("/api/orcamentos/recentes");
      const OrcamentosRecentes = response.data;
      setOrcamentos(OrcamentosRecentes);
    } catch (error) {}
  };

  useEffect(() => {
    orcamentosRecentes();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  console.log(orcamentos);

  return (
    <main className="w-full min-h-screen bg-zinc-100">
      <nav className="w-full h-16 bg-blue-950 flex items-center justify-end px-6 shadow-md justify-between">
        <button
          onClick={handleLogout}
          className="text-white font-semibold flex flex-row gap-2 border rounded border-white px-2 py-1 float-end "
        >
          <LogOut />
          Sair
        </button>
      </nav>

      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="bg-blue-950 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {getInitials(user?.nome)}
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-blue-950">Bem-vindo</h1>
              <h2 className="text-slate-600 font-medium text-sm">
                {user?.nome ?? "Usuário"}
              </h2>
            </div>
          </div>

          <div className=" flex flex-row gap-4 mt-4">
            <Option page="/orcamentos" label="Orçamentos" />
            <Option page="/clientes" label="Clientes" />
            <Option page="/itens" label="Items" />
          </div>
        </div>

        <h1 className="text-blue-950 mt-8 font-bold text-xl border-b border-slate-300 pb-2">
          Últimos Orçamentos
        </h1>

        {orcamentos.length === 0 ? (
          <p className="text-sm text-slate-500 mt-4">
            Nenhum orçamento recente encontrado.
          </p>
        ) : (
          <div className="mt-4 flex flex-col gap-4">
            {orcamentos.map((orcamento: any) => (
              <div
                key={orcamento.id}
                onClick={() => navigate(`/orcamentos/${orcamento.id}`)}
                className="bg-white shadow-sm rounded-xl p-4 border border-slate-200 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-blue-950">
                      {orcamento.nome}
                    </h2>
                    <p className="text-sm text-slate-600">
                      Cliente: {orcamento.cliente?.nome || "Desconhecido"}
                    </p>
                    <p className="text-sm text-slate-600">
                      Status:{" "}
                      <span className="font-medium">{orcamento.status}</span>
                    </p>
                    <p className="text-sm text-slate-600">
                      Valor total: R$ {Number(orcamento.preco_total).toFixed(2)}
                    </p>
                    <p className="text-sm text-slate-600">
                      Validade:{" "}
                      {new Date(orcamento.data_validade).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
