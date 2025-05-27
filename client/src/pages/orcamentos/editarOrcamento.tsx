import React, { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";
import Navbar from "../../components/navbar";
export default function EditarOrcamento() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [clientes, setClientes] = useState([]);
  const [itensRecorrentes, setItensRecorrentes] = useState([]);

  const [orcamento, setOrcamento] = useState({
    nome: "",
    cliente_id: "",
    usuario_id: 1,
    data_validade: "",
    updated_date: "",
    status: "Pendente",
    meios_pagamento: "",
    periodo_garantia: "",
    preco_total: "0",
    itens: [],
    servicos: [],
  });

  const [novoItem, setNovoItem] = useState({
    nome: "",
    marca: "",
    preco_unitario: "",
    quantidade: "",
    unidade_medida: "",
  });

  const [novoServico, setNovoServico] = useState({
    titulo: "",
    preco: "",
  });

  const fetchData = async () => {
    try {
      const [clientesRes, itensRes, orcamentoRes] = await Promise.all([
        AxiosInstance.get("/api/clientes"),
        AxiosInstance.get("/api/itens"),
        AxiosInstance.get(`/api/orcamentos/${id}`),
      ]);

      setClientes(clientesRes.data);
      setItensRecorrentes(itensRes.data);

      const data = orcamentoRes.data.data;

      setOrcamento({
        nome: data.nome || "",
        cliente_id: data.cliente_id || "",
        usuario_id: data.usuario_id || 1,
        data_validade: data.data_validade?.slice(0, 10) || "",
        status: data.status || "Pendente",
        meios_pagamento: data.meios_pagamento || "",
        periodo_garantia: data.periodo_garantia || "",
        preco_total: data.preco_total || "0",
        updated_date: data.updated_at || "",
        itens: Array.isArray(data.itens)
          ? data.itens.map((item) => ({
              nome: item.nome || "",
              marca: item.marca || "",
              preco_unitario: item.preco_unitario?.toString() || "0",
              quantidade: item.quantidade?.toString() || "0",
              unidade_medida: item.unidade_medida || "",
            }))
          : [],
        servicos: Array.isArray(data.servicos)
          ? data.servicos.map((servico) => ({
              titulo: servico.titulo || "",
              preco: servico.preco?.toString() || "0",
            }))
          : [],
      });
    } catch (error) {
      alert("Erro ao carregar orçamento.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const adicionarItem = () => {
    setOrcamento((prev) => ({
      ...prev,
      itens: [...prev.itens, novoItem],
    }));
    setNovoItem({
      nome: "",
      marca: "",
      preco_unitario: "",
      quantidade: "",
      unidade_medida: "",
    });
  };

  const adicionarServico = () => {
    setOrcamento((prev) => ({
      ...prev,
      servicos: [...prev.servicos, novoServico],
    }));
    setNovoServico({
      titulo: "",
      preco: "",
    });
  };

  const removerItem = (index: number) => {
    setOrcamento((prev) => ({
      ...prev,
      itens: prev.itens.filter((_, i) => i !== index),
    }));
  };

  const removerServico = (index: number) => {
    setOrcamento((prev) => ({
      ...prev,
      servicos: prev.servicos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const totalServicos = orcamento.servicos.reduce(
        (acc, servico) => acc + parseFloat(servico.preco || 0),
        0
      );

      const payload = {
        ...orcamento,
        preco_total: totalServicos.toFixed(2),
        updated_at: new Date().toISOString(),
      };

      await AxiosInstance.put(`/api/orcamentos/${id}`, payload);
      navigate("/orcamentos");
    } catch (error) {
      alert("Erro ao atualizar o orçamento.");
      console.error(error);
    }
  };

  return (
    <main className="w-full min-h-screen bg-zinc-100 pb-24">
      <Navbar />

      <form onSubmit={handleSubmit} className="px-4 py-6 space-y-8">
        <div className="space-y-3">
          <input
            type="text"
            required
            placeholder="Nome do orçamento"
            value={orcamento.nome}
            onChange={(e) =>
              setOrcamento((prev) => ({ ...prev, nome: e.target.value }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
          <select
            value={orcamento.cliente_id}
            required
            onChange={(e) =>
              setOrcamento((prev) => ({
                ...prev,
                cliente_id: Number(e.target.value),
              }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          >
            <option value="">Selecione um cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>

          <input
            type="date"
            required
            value={orcamento.data_validade}
            onChange={(e) =>
              setOrcamento((prev) => ({
                ...prev,
                data_validade: e.target.value,
              }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
          <input
            type="text"
            placeholder="Meios de pagamento"
            value={orcamento.meios_pagamento}
            onChange={(e) =>
              setOrcamento((prev) => ({
                ...prev,
                meios_pagamento: e.target.value,
              }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
          <input
            type="text"
            placeholder="Período de garantia"
            value={orcamento.periodo_garantia}
            onChange={(e) =>
              setOrcamento((prev) => ({
                ...prev,
                periodo_garantia: e.target.value,
              }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
          <select
            value={orcamento.status || "Pendente"}
            onChange={(e) =>
              setOrcamento((prev) => ({ ...prev, status: e.target.value }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          >
            <option value="Pendente">Pendente</option>
            <option value="Aprovado">Aprovado</option>
            <option value="Negado">Negado</option>
          </select>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Itens</h2>

          <select
            onChange={(e) => {
              const itemSelecionado = itensRecorrentes.find(
                (i) => i.id === Number(e.target.value)
              );
              if (itemSelecionado) {
                setNovoItem({
                  nome: itemSelecionado.nome,
                  marca: itemSelecionado.marca,
                  preco_unitario: itemSelecionado.preco_unitario,
                  unidade_medida: itemSelecionado.unidade_medida,
                  quantidade: "",
                });
              }
            }}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          >
            <option value="">Selecionar item recorrente</option>
            {itensRecorrentes.map((item) => (
              <option key={item?.id} value={item?.id}>
                {item?.nome} ({item?.marca})
              </option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Nome"
              value={novoItem.nome}
              onChange={(e) =>
                setNovoItem((prev) => ({ ...prev, nome: e.target.value }))
              }
              className="border border-slate-300 rounded-lg py-3 px-3 text-sm"
            />
            <input
              type="text"
              placeholder="Marca"
              value={novoItem.marca}
              onChange={(e) =>
                setNovoItem((prev) => ({ ...prev, marca: e.target.value }))
              }
              className="border border-slate-300 rounded-lg py-3 px-3 text-sm"
            />
            <input
              type="number"
              placeholder="Preço Unitário"
              value={novoItem.preco_unitario}
              onChange={(e) =>
                setNovoItem((prev) => ({
                  ...prev,
                  preco_unitario: e.target.value,
                }))
              }
              className="border border-slate-300 rounded-lg py-3 px-3 text-sm"
            />
            <input
              type="number"
              placeholder="Quantidade"
              value={novoItem.quantidade}
              onChange={(e) =>
                setNovoItem((prev) => ({
                  ...prev,
                  quantidade: e.target.value,
                }))
              }
              className="border border-slate-300 rounded-lg py-3 px-3 text-sm"
            />
          </div>
          <input
            type="text"
            placeholder="Unidade de Medida"
            value={novoItem.unidade_medida}
            onChange={(e) =>
              setNovoItem((prev) => ({
                ...prev,
                unidade_medida: e.target.value,
              }))
            }
            className="border border-slate-300 rounded-lg py-3 px-3 text-sm w-full"
          />

          <Button
            type="button"
            onClick={adicionarItem}
            className="bg-blue-800 text-white py-2 px-4 rounded-md text-sm"
          >
            Adicionar Item
          </Button>

          <div className="space-y-2">
            {orcamento.itens.map((item, index) => (
              <div
                key={index}
                className="text-sm font-semibold text-slate-600 px-2 py-3 bg-white border rounded-md shadow flex justify-between items-center"
              >
                <span>
                  {item?.nome} - {item?.quantidade} unidade(s)
                </span>
                <button
                  type="button"
                  onClick={() => removerItem(index)}
                  className="text-red-600 text-xs"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Serviços</h2>

          <input
            type="text"
            placeholder="Título do serviço"
            value={novoServico.titulo}
            onChange={(e) =>
              setNovoServico((prev) => ({ ...prev, titulo: e.target.value }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
          <input
            type="number"
            placeholder="Preço"
            value={novoServico.preco}
            onChange={(e) =>
              setNovoServico((prev) => ({ ...prev, preco: e.target.value }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />

          <Button
            type="button"
            onClick={adicionarServico}
            className="bg-blue-800 text-white py-2 px-4 rounded-md text-sm"
          >
            Adicionar Serviço
          </Button>

          <div className="space-y-2">
            {orcamento.servicos.map((servico, index) => (
              <div
                key={index}
                className="text-sm font-semibold text-slate-600 px-2 py-3 bg-white border rounded-md shadow flex justify-between items-center"
              >
                <span>{servico?.titulo}</span>
                <div className="flex items-center gap-2">
                  <span>R$ {servico?.preco}</span>
                  <button
                    type="button"
                    onClick={() => removerServico(index)}
                    className="text-red-600 text-xs"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-900 text-white py-5 rounded-md text-base font-semibold shadow-lg"
        >
          Salvar Alterações
        </Button>
      </form>
    </main>
  );
}
