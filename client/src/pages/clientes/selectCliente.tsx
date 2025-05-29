import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";
import Navbar from "../../components/navbar";
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
  const navigate = useNavigate();
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

  const handleDeletarCliente = async () => {
    try {
      const response = await AxiosInstance.delete(`/api/clientes/${id}`);
      alert("Cliente deletado com sucesso");
    } catch (error) {
      console.log("Erro ao tentar deletar cliente.");
    }
  };

  return (
    <main className="w-full min-h-screen bg-zinc-100 pb-24">
      <Navbar />

      <div className="px-4 py-4">
        {cliente ? (
          <div className="bg-white rounded-lg p-4 shadow border border-slate-200 space-y-1">
            <h2 className="text-blue-900 text-lg font-bold">{cliente.nome}</h2>
            <p className="text-sm text-slate-600">Email: {cliente.email}</p>
            <p className="text-sm text-slate-600">Celular: {cliente.celular}</p>
            <p className="text-sm text-slate-600">
              Tipo: {cliente.tipo_cliente}
            </p>
            <p className="text-sm text-slate-600">
              Documento: {cliente.documento}
            </p>
            <p className="text-sm text-slate-600">CEP: {cliente?.cep}</p>
            <p className="text-sm text-slate-600">
              Endereço: {cliente.endereco}
            </p>
          </div>
        ) : (
          <p className="text-slate-500">Carregando cliente...</p>
        )}
      </div>

      <div className="w-full flex flex-row gap-4 px-4">
        <button
          onClick={() => navigate(`/clientes/editar/${id}`)}
          className=" text-center  items-center text-blue-600 font-semibold flex-1 py-3 bg-white border border-slate rounded shadow"
        >
          Editar
        </button>
        <button
          onClick={() => handleDeletarCliente()}
          className=" text-center  items-center text-red-600 font-semibold flex-1 py-3 bg-white border border-slate rounded shadow"
        >
          Deletar
        </button>
      </div>

      <div className="px-4 py-2">
        <h3 className="text-base font-semibold text-slate-700 py-4">
          Orçamentos
        </h3>
        {orcamentos.length > 0 ? (
          <div className="space-y-3">
            {orcamentos.map((orc) => (
              <div
                key={orc.id}
                onClick={() => navigate(`/orcamentos/${orc.id}`)}
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
          <p className="text-sm text-slate-500">Nenhum orçamento encontrado.</p>
        )}
      </div>
    </main>
  );
}
