import React, { useEffect, useState, useMemo } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";
import Navbar from "../../components/navbar";
type Orcamento = {
  id: number;
  nome: string;
  cliente: {
    id: number;
    nome: string;
    email: string;
  };
  preco_total: string;
  status: string;
  data_inicial: string;
  data_validade: string;
};

export default function Orcamentos() {
  const navigate = useNavigate();
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  const getOrcamentos = async () => {
    try {
      const response = await AxiosInstance.get("/api/orcamentos");
      setOrcamentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar orçamentos:", error);
    }
  };

  useEffect(() => {
    getOrcamentos();
  }, []);

  const filteredOrcamentos = useMemo(() => {
    const filtered = orcamentos.filter((orcamento) =>
      orcamento.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      const nameA = a.nome.toLowerCase();
      const nameB = b.nome.toLowerCase();
      return sortOrder === "az"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    return sorted;
  }, [orcamentos, searchTerm, sortOrder]);

  return (
    <main className="w-full min-h-screen bg-zinc-100 pb-24">
      <Navbar />

      <div className="px-4 py-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-slate-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Buscar orçamento por nome"
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "az" | "za")}
            className="w-full sm:w-1/3 border border-slate-300 rounded-lg py-2 px-3 text-sm text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="az">Ordenar A-Z</option>
            <option value="za">Ordenar Z-A</option>
          </select>
        </div>

        <div className="space-y-3">
          {filteredOrcamentos.length > 0 ? (
            filteredOrcamentos.map((orcamento) => (
              <div
                key={orcamento.id}
                className="bg-white rounded-md shadow p-4 border border-slate-200"
                onClick={() => navigate(`/orcamentos/${orcamento.id}`)}
              >
                <h2 className="text-blue-900 font-semibold text-base">
                  {orcamento.nome}
                </h2>
                <p className="text-slate-600 text-sm">
                  Cliente: {orcamento.cliente.nome}
                </p>
                <p className="text-slate-600 text-sm">
                  Valor total: R$ {parseFloat(orcamento.preco_total).toFixed(2)}
                </p>
                <p className="text-slate-500 text-sm">
                  Status: {orcamento.status}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500 text-center pt-4">
              Nenhum orçamento encontrado.
            </p>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 left-4 px-4">
        <Button
          onClick={() => navigate("/orcamentos/novo")}
          className="w-full bg-blue-900 text-white py-3 rounded-md text-base font-semibold shadow-lg"
        >
          + Adicionar Orçamento
        </Button>
      </div>
    </main>
  );
}
