// src/pages/Itens.tsx

import React, { useEffect, useState, useMemo } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";
import Navbar from "../../components/navbar";
type Item = {
  id: number;
  nome: string;
  marca: string;
  preco_unitario: string;
  unidade_medida: string;
};

export default function Itens() {
  const navigate = useNavigate();
  const [itens, setItens] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  const getItens = async () => {
    try {
      const response = await AxiosInstance.get("/api/itens");
      setItens(response.data);
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
    }
  };

  useEffect(() => {
    getItens();
  }, []);

  const filteredItens = useMemo(() => {
    const filtered = itens.filter((item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      const nameA = a.nome.toLowerCase();
      const nameB = b.nome.toLowerCase();
      return sortOrder === "az"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    return sorted;
  }, [itens, searchTerm, sortOrder]);

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
            placeholder="Buscar item por nome"
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
          {filteredItens.length > 0 ? (
            filteredItens.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md shadow p-4 border border-slate-200"
                onClick={() => navigate(`/itens/${item.id}`)}
              >
                <h2 className="text-blue-900 font-semibold text-base">
                  {item.nome}
                </h2>
                <p className="text-slate-600 text-sm">
                  Marca: {item.marca} • {item.unidade_medida}
                </p>
                <p className="text-slate-600 text-sm">
                  Preço: R$ {parseFloat(item.preco_unitario).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500 text-center pt-4">
              Nenhum item encontrado.
            </p>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 left-4 px-4">
        <Button
          onClick={() => navigate("/itens/novo")}
          className="w-full bg-blue-900 text-white py-3 rounded-md text-base font-semibold shadow-lg"
        >
          + Adicionar Item
        </Button>
      </div>
    </main>
  );
}
