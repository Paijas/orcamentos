import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AxiosInstance from "@/services/AxiosInstance";

type Cliente = {
  id: number;
  nome: string;
  email: string;
  celular: string;
  tipo_cliente: string;
  documento: string;
  endereco: string;
  cep?: string | null;
};

type Usuario = {
  id: number;
  nome: string;
  email: string;
  celular: string;
};

type Item = {
  id: number;
  nome: string;
  marca: string;
  unidade_medida: string;
  quantidade: string;
  preco_unitario: string;
};

type Servico = {
  id: number;
  titulo: string;
  preco: string;
};

type Orcamento = {
  id: number;
  nome: string;
  status: string;
  data_inicial: string;
  data_validade: string;
  preco_total: string;
  meios_pagamento: string;
  periodo_garantia: string;
  cliente: Cliente;
  usuario: Usuario;
  itens: Item[];
  servicos: Servico[];
};

export default function VisualizarOrcamento() {
  const { id } = useParams<{ id: string }>();
  const [orcamento, setOrcamento] = useState<Orcamento | null>(null);
  const navigate = useNavigate();

  const fetchOrcamento = async () => {
    try {
      const response = await AxiosInstance.get(`/api/orcamentos/${id}`);
      setOrcamento(response.data.data);
    } catch (error) {
      console.error("Erro ao buscar orçamento:", error);
    }
  };

  useEffect(() => {
    fetchOrcamento();
  }, [id]);

  const deleteOrcamento = async () => {
    try {
      const response = await AxiosInstance.delete(`/api/orcamentos/${id}`);
      alert("Orçamento deletado com sucesso!");
      navigate("/orcamentos");
    } catch (error) {
      alert("Erro ao deletar orçamento");
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-white pb-24">
        <nav className="w-full h-16 bg-blue-950 flex items-center shadow-md px-4 gap-4">
          <SidebarTrigger className="text-white text-4xl" />
        </nav>

        <div className="p-4 space-y-6">
          <div className="rounded-xl p-4 shadow-inner border bg-white border-blue-200 space-y-1">
            <h2 className="text-blue-900 text-xl font-bold">
              {orcamento?.nome}
            </h2>
            <p className="text-[14px] mt-6 font-semibold text-blue-800">
              Total: R$ {orcamento?.preco_total}
            </p>
            <p className="text-[14px]  text-blue-900 font-semibold tracking-wider">
              Status: {orcamento?.status}
            </p>
          </div>

          <div className="w-full flex flex-row gap-4 ">
            <button
              onClick={() => ""}
              className=" text-center  items-center text-blue-600 font-semibold flex-1 py-2 bg-white border border-slate rounded shadow"
            >
              Compartilhar
            </button>
            <button
              onClick={() => deleteOrcamento()}
              className=" text-center  items-center text-red-600 font-semibold flex-1 py-2 bg-white border border-slate rounded shadow"
            >
              Deletar
            </button>
          </div>

          <section className="rounded-lg bg-white p-4 shadow border border-slate-200">
            <h3 className="text-blue-900 font-bold text-sm mb-3">
              Informações
            </h3>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>
                <strong>Data de Início:</strong>{" "}
                {orcamento &&
                  new Date(orcamento.data_inicial).toLocaleDateString()}
              </li>
              <li>
                <strong>Validade:</strong>{" "}
                {orcamento &&
                  new Date(orcamento.data_validade).toLocaleDateString()}
              </li>
              <li>
                <strong>Pagamento:</strong> {orcamento?.meios_pagamento}
              </li>
              <li>
                <strong>Garantia:</strong> {orcamento?.periodo_garantia}
              </li>
            </ul>
          </section>

          <section className="rounded-lg bg-white p-4 shadow border border-slate-200">
            <h3 className="text-blue-900 font-bold text-sm mb-3">Cliente</h3>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>
                <strong>Nome:</strong> {orcamento?.cliente.nome}
              </li>
              <li>
                <strong>Email:</strong> {orcamento?.cliente.email}
              </li>
              <li>
                <strong>Celular:</strong> {orcamento?.cliente.celular}
              </li>
              <li>
                <strong>Documento:</strong> {orcamento?.cliente.documento}
              </li>
              <li>
                <strong>Endereço:</strong> {orcamento?.cliente.endereco}
              </li>
            </ul>
          </section>

          <section className="rounded-lg bg-white p-4 shadow border border-slate-200">
            <h3 className="text-blue-900 font-bold text-sm mb-3">Itens</h3>
            {orcamento?.itens.length ? (
              <ul className="divide-y divide-slate-100 text-sm text-slate-700">
                {orcamento.itens.map((item) => (
                  <li key={item.id} className="py-2">
                    <span className="block font-medium">{item.nome}</span>
                    <span className="block text-xs text-slate-600">
                      {item.quantidade} {item.unidade_medida}
                    </span>
                    <span className="block text-xs text-blue-800">
                      R$ {item.preco_unitario}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">Nenhum item cadastrado.</p>
            )}
          </section>

          <section className="rounded-lg bg-white p-4 shadow border border-slate-200">
            <h3 className="text-blue-900 font-bold text-sm mb-3">Serviços</h3>
            {orcamento?.servicos.length ? (
              <ul className="divide-y divide-slate-100 text-sm text-slate-700">
                {orcamento.servicos.map((servico) => (
                  <li key={servico.id} className="py-2">
                    <span className="block font-medium">{servico.titulo}</span>
                    <span className="block font-bold mt-1 text-sm text-blue-800">
                      R$ {servico.preco}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">
                Nenhum serviço cadastrado.
              </p>
            )}
          </section>
        </div>
      </main>
    </SidebarProvider>
  );
}
