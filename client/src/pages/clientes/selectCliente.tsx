import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";

type Cliente = {
  id: number;
  nome: string;
  email: string;
  celular: string;
  tipo_cliente: string;
  documento: string;
  endereco: string;
};

type Orcamento = {
  id: number;
  nome: string;
  status: string;
  data_inicial: string;
  data_validade: string;
};

export default function SelectCliente() {
  const { id } = useParams<{ id: string }>();
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);

  const fetchCliente = async () => {
    try {
      const response = await AxiosInstance.get(`/api/clientes/${id}`);
      setCliente(response.data);
    } catch (error) {
      console.error("Erro ao buscar cliente:", error);
    }
  };

  const fetchOrcamentos = async () => {
    try {
      const response = await AxiosInstance.get(`/api/orcamentos/cliente/${id}`);
      setOrcamentos(response.data.data);
    } catch (error) {
      console.error("Erro ao buscar orçamentos:", error);
    }
  };

  useEffect(() => {
    fetchCliente();
    fetchOrcamentos();
  }, [id]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-zinc-100 pb-24">
        {/* TopBar */}
        <nav className="w-full h-16 bg-blue-950 flex items-center justify-between shadow-md px-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-white text-4xl" />
            <h1 className="text-white text-lg font-semibold">Cliente</h1>
          </div>
        </nav>

        {/* Dados do cliente */}
        <div className="px-4 py-4">
          {cliente ? (
            <div className="bg-white rounded-lg p-4 shadow border border-slate-200 space-y-1">
              <h2 className="text-blue-900 text-lg font-bold">
                {cliente.nome}
              </h2>
              <p className="text-sm text-slate-600">Email: {cliente.email}</p>
              <p className="text-sm text-slate-600">
                Celular: {cliente.celular}
              </p>
              <p className="text-sm text-slate-600">
                Tipo: {cliente.tipo_cliente}
              </p>
              <p className="text-sm text-slate-600">
                Documento: {cliente.documento}
              </p>
              <p className="text-sm text-slate-600">
                Endereço: {cliente.endereco}
              </p>
            </div>
          ) : (
            <p className="text-slate-500">Carregando cliente...</p>
          )}
        </div>

        {/* Lista de Orçamentos */}
        <div className="px-4 py-2">
          <h3 className="text-base font-semibold text-slate-700 mb-2">
            Orçamentos
          </h3>
          {orcamentos.length > 0 ? (
            <div className="space-y-3">
              {orcamentos.map((orc) => (
                <div
                  key={orc.id}
                  className="bg-white rounded-md shadow p-4 border border-slate-200"
                >
                  <h4 className="text-blue-800 font-semibold text-base">
                    {orc.nome}
                  </h4>
                  <p className="text-sm text-slate-600">
                    Criado: {new Date(orc.data_inicial).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-slate-600">
                    Validade: {new Date(orc.data_validade).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-slate-600">Status: {orc.status}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">
              Nenhum orçamento encontrado.
            </p>
          )}
        </div>
      </main>
    </SidebarProvider>
  );
}
