import React, { useEffect, useState, useMemo } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";

type Cliente = {
  id: number;
  nome: string;
  email: string;
};

export default function Clientes() {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"az" | "za">("az");

  const getClientes = async () => {
    try {
      const response = await AxiosInstance.get("/api/clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);

  const filteredClientes = useMemo(() => {
    const filtered = clientes.filter((cliente) =>
      cliente.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      const nameA = a.nome.toLowerCase();
      const nameB = b.nome.toLowerCase();
      return sortOrder === "az"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    return sorted;
  }, [clientes, searchTerm, sortOrder]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-zinc-100 pb-24">
        <nav className="w-full h-16 bg-blue-950 flex items-center shadow-md px-4 gap-4">
          <SidebarTrigger className="text-white text-4xl" />
          <h1 className="text-white text-lg font-semibold">Clientes</h1>
        </nav>

        <div className="px-4 py-4 space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-slate-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Buscar cliente por nome"
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
            {filteredClientes.length > 0 ? (
              filteredClientes.map((cliente) => (
                <div
                  key={cliente.id}
                  className="bg-white rounded-md shadow p-4 border border-slate-200"
                  onClick={() => navigate(`/clientes/${cliente.id}`)}
                >
                  <h2 className="text-blue-900 font-semibold text-base">
                    {cliente.nome}
                  </h2>
                  <p className="text-slate-600 text-sm">{cliente.email}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500 text-center pt-4">
                Nenhum cliente encontrado.
              </p>
            )}
          </div>
        </div>

        <div className="fixed bottom-4 right-4 left-4 px-4">
          <Button
            onClick={() => navigate("/clientes/novo")}
            className="w-full bg-blue-900 text-white py-3 rounded-md text-base font-semibold shadow-lg"
          >
            + Adicionar Cliente
          </Button>
        </div>
      </main>
    </SidebarProvider>
  );
}
