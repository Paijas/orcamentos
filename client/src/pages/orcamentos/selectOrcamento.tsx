import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import OrcamentoPDF from "../../components/OrcamentoPDF";
import AxiosInstance from "@/services/AxiosInstance";
import Navbar from "../../components/navbar";
import { Button } from "@/components/ui/button";
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

const statusClasses = {
  Aprovado: "text-green-500",
  Negado: "text-red-500",
  Vencido: "text-red-500",
  Pendente: "text-yellow-500",
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
  updated_at: string;
};

export default function VisualizarOrcamento() {
  const { id } = useParams<{ id: string }>();
  const [orcamento, setOrcamento] = useState<Orcamento | null>(null);
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true);
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
    <main className="w-full min-h-screen bg-white pb-24">
      <Navbar />
      <div className="p-4 space-y-6">
        <div className="rounded-xl p-4 shadow-inner border bg-white border-blue-200 space-y-1">
          <h2 className="text-blue-900 text-xl font-bold">{orcamento?.nome}</h2>
          <p className="text-[14px] mt-6 font-semibold text-blue-800">
            Total: R$ {orcamento?.preco_total}
          </p>
          <p
            className={`text-[14px] flex flex-row gap-2  text-blue-900 font-semibold tracking-wider`}
          >
            Status:
            <span
              className={`${
                orcamento?.status === "Aprovado" ? "text-green-500" : ""
              } ${orcamento?.status === "Negado" ? "text-red-500" : ""} ${
                orcamento?.status === "Pendente" ? "text-yellow-500" : ""
              }`}
            >
              {orcamento?.status}
            </span>
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 ">
          <div className="flex flex-row gap-4 w-full">
            {" "}
            <button
              onClick={() => navigate(`/orcamentos/editar/${id}`)}
              className=" text-center  items-center text-blue-600 font-semibold flex-1 py-2 bg-white border border-slate rounded shadow"
            >
              Editar
            </button>
            <button
              onClick={() => deleteOrcamento()}
              className=" text-center  items-center text-red-600 font-semibold flex-1 py-2 bg-white border border-slate rounded shadow"
            >
              Deletar
            </button>
          </div>
          {isClient && orcamento ? (
            <PDFDownloadLink
              document={<OrcamentoPDF orcamento={orcamento} />}
              fileName={`Orcamento_${orcamento.id}_${orcamento.nome.replace(
                /\s+/g,
                "_"
              )}.pdf`}
            >
              {({ loading }) => (
                <Button
                  className="text-center  items-center  font-semibold flex-1 py-5 text-white border border-slate rounded shadow w-full flex bg-blue-800 hover:bg-blue-800"
                  disabled={loading}
                >
                  Gerar Documento
                </Button>
              )}
            </PDFDownloadLink>
          ) : (
            <Button
              className="text-center  items-center  font-semibold flex-1 py-5 text-white border border-slate rounded shadow w-full flex bg-blue-800 hover:bg-blue-800"
              disabled
            >
              Gerar Documento
            </Button>
          )}
        </div>

        <section className="rounded-lg bg-white p-4 shadow border border-slate-200">
          <h3 className="text-blue-900 font-bold text-sm mb-3">Informações</h3>
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
                <li
                  key={item.id}
                  className="py-2 flex flex-row justify-between items-center"
                >
                  <div className="flex flex-col">
                    <span className="block font-medium">{item.nome}</span>
                    <span className="block text-xs text-slate-600">
                      {item.quantidade} unidade(s)
                    </span>
                  </div>
                  <span className="block text-md font-semibold text-blue-800">
                    R${" "}
                    {parseFloat(item.preco_unitario) *
                      parseInt(item.quantidade)}
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
            <p className="text-sm text-slate-500">Nenhum serviço cadastrado.</p>
          )}
        </section>
      </div>
    </main>
  );
}
