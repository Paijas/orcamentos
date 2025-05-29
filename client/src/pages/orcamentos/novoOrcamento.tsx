import React, { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";
import Navbar from "../../components/navbar";

export default function NovoOrcamento() {
  const navigate = useNavigate();

  const [clientes, setClientes] = useState([]);
  const [itensRecorrentes, setItensRecorrentes] = useState([]);

  const [orcamento, setOrcamento] = useState({
    nome: "",
    cliente_id: "",
    usuario_id: 1,
    data_validade: "",
    status: "Pendente",
    meios_pagamento: "",
    periodo_garantia: "",
    preco_total: "12",
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
    const [clientesRes, itensRes] = await Promise.all([
      AxiosInstance.get("/api/clientes"),
      AxiosInstance.get("/api/itens"),
    ]);
    setClientes(clientesRes.data);
    setItensRecorrentes(itensRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleSubmit = async () => {
    const totalServicos = orcamento.servicos.reduce(
      (acc, servico) => acc + parseFloat(servico.preco || 0),
      0
    );

    const payload = {
      ...orcamento,
      preco_total: totalServicos.toFixed(2),
    };

    await AxiosInstance.post("/api/orcamentos", payload);
    navigate("/orcamentos");
  };

  const removerItem = (index: any) => {
    setOrcamento((prev) => ({
      ...prev,
      itens: prev.itens.filter((_, i) => i !== index),
    }));
  };

  const removerServico = (index: any) => {
    setOrcamento((prev) => ({
      ...prev,
      servicos: prev.servicos.filter((_, i) => i !== index),
    }));
  };

  return (
    <main className="w-full min-h-screen bg-zinc-100 pb-24">
      <Navbar />

      <form className="px-4 py-6 space-y-8">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-zinc-700">
            Nome do orçamento
          </label>
          <input
            type="text"
            required
            value={orcamento.nome}
            onChange={(e) =>
              setOrcamento((prev) => ({ ...prev, nome: e.target.value }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
          <label className="block text-sm font-medium text-zinc-700">
            Cliente
          </label>
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
          <label className="block text-sm font-medium text-zinc-700">
            Data de validade
          </label>
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
          <label className="block text-sm font-medium text-zinc-700">
            Meios de pagamento
          </label>
          <input
            type="text"
            value={orcamento.meios_pagamento}
            onChange={(e) =>
              setOrcamento((prev) => ({
                ...prev,
                meios_pagamento: e.target.value,
              }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
          <label className="block text-sm font-medium text-zinc-700">
            Período de garantia
          </label>
          <input
            type="text"
            value={orcamento.periodo_garantia}
            onChange={(e) =>
              setOrcamento((prev) => ({
                ...prev,
                periodo_garantia: e.target.value,
              }))
            }
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Itens</h2>

          <label className="block text-sm font-medium text-zinc-700">
            Selecionar item recorrente
          </label>
          <select
            onChange={(e) => {
              const itemSelecionado = itensRecorrentes.find(
                (i) => i.id === Number(e.target.value)
              );
              if (itemSelecionado) {
                setNovoItem((prev) => ({
                  ...prev,
                  nome: itemSelecionado.nome,
                  marca: itemSelecionado.marca,
                  preco_unitario: itemSelecionado.preco_unitario,
                  unidade_medida: itemSelecionado.unidade_medida,
                }));
              }
            }}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          >
            <option value="">Selecionar item recorrente</option>
            {itensRecorrentes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nome} ({item.marca})
              </option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-zinc-700">
                Nome
              </label>
              <input
                type="text"
                value={novoItem.nome}
                required
                onChange={(e) =>
                  setNovoItem((prev) => ({ ...prev, nome: e.target.value }))
                }
                className="border border-slate-300 rounded-lg py-3 px-3 text-sm w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700">
                Marca
              </label>
              <input
                type="text"
                value={novoItem.marca}
                onChange={(e) =>
                  setNovoItem((prev) => ({ ...prev, marca: e.target.value }))
                }
                className="border border-slate-300 rounded-lg py-3 px-3 text-sm w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700">
                Preço Unitário
              </label>
              <input
                type="number"
                required
                value={novoItem.preco_unitario}
                onChange={(e) =>
                  setNovoItem((prev) => ({
                    ...prev,
                    preco_unitario: e.target.value,
                  }))
                }
                className="border border-slate-300 rounded-lg py-3 px-3 text-sm w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700">
                Quantidade
              </label>
              <input
                type="number"
                required
                value={novoItem.quantidade}
                onChange={(e) =>
                  setNovoItem((prev) => ({
                    ...prev,
                    quantidade: e.target.value,
                  }))
                }
                className="border border-slate-300 rounded-lg py-3 px-3 text-sm w-full"
              />
            </div>
          </div>

          <label className="block text-sm font-medium text-zinc-700">
            Unidade de Medida
          </label>
          <input
            type="text"
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
                  {item.nome} - {item.quantidade} unidade(s)
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
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Serviços</h2>

            <label className="block text-sm font-medium text-zinc-700">
              Título do serviço
            </label>
            <input
              type="text"
              value={novoServico.titulo}
              onChange={(e) =>
                setNovoServico((prev) => ({ ...prev, titulo: e.target.value }))
              }
              className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            {" "}
            <label className="block text-sm font-medium text-zinc-700">
              Preço
            </label>
            <input
              type="number"
              value={novoServico.preco}
              onChange={(e) =>
                setNovoServico((prev) => ({ ...prev, preco: e.target.value }))
              }
              className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
            />
          </div>

          <Button
            onClick={adicionarServico}
            className="bg-blue-800 text-white py-2 px-4 rounded-md text-sm"
          >
            Adicionar Serviço
          </Button>

          <div className="space-y-2">
            {orcamento.servicos.map((servico, index) => (
              <div
                key={index}
                className="text-sm font-semibold text-slate-600 px-2 py-3 bg-white border rounded-md shadow"
              >
                {servico.titulo}
                <p className="flex float-end"> R$ {servico.preco}</p>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full bg-blue-900 text-white py-5 rounded-md text-base font-semibold shadow-lg"
        >
          Salvar Orçamento
        </Button>
      </form>
    </main>
  );
}
