import React, { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";

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
    descricao: "",
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
      descricao: "",
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
    await AxiosInstance.post("/api/orcamentos", orcamento);
    navigate("/orcamentos");
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-zinc-100 pb-24">
        <nav className="w-full h-16 bg-blue-950 flex items-center shadow-md px-4 gap-4">
          <SidebarTrigger className="text-white text-4xl" />
          <h1 className="text-white text-lg font-semibold">Novo Orçamento</h1>
        </nav>

        <div className="px-4 py-6 space-y-8">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Nome do orçamento"
              value={orcamento.nome}
              onChange={(e) =>
                setOrcamento((prev) => ({ ...prev, nome: e.target.value }))
              }
              className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
            />
            <select
              value={orcamento.cliente_id}
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
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Itens</h2>

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
              className="w-full border border-slate-300 rounded-lg py-2 px-3 text-sm"
            >
              <option value="">Selecionar item recorrente</option>
              {itensRecorrentes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome} ({item.marca})
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
                className="border border-slate-300 rounded-lg py-2 px-3 text-sm"
              />
              <input
                type="text"
                placeholder="Marca"
                value={novoItem.marca}
                onChange={(e) =>
                  setNovoItem((prev) => ({ ...prev, marca: e.target.value }))
                }
                className="border border-slate-300 rounded-lg py-2 px-3 text-sm"
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
                className="border border-slate-300 rounded-lg py-2 px-3 text-sm"
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
                className="border border-slate-300 rounded-lg py-2 px-3 text-sm"
              />
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
                className="border border-slate-300 rounded-lg py-2 px-3 text-sm"
              />
              <input
                type="text"
                placeholder="Descrição"
                value={novoItem.descricao}
                onChange={(e) =>
                  setNovoItem((prev) => ({
                    ...prev,
                    descricao: e.target.value,
                  }))
                }
                className="col-span-2 border border-slate-300 rounded-lg py-2 px-3 text-sm"
              />
            </div>

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
                  className="text-sm p-2 bg-white border rounded-md"
                >
                  {item.nome} - {item.marca} ({item.quantidade}{" "}
                  {item.unidade_medida})
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
              className="w-full border border-slate-300 rounded-lg py-2 px-3 text-sm"
            />
            <input
              type="number"
              placeholder="Preço"
              value={novoServico.preco}
              onChange={(e) =>
                setNovoServico((prev) => ({ ...prev, preco: e.target.value }))
              }
              className="w-full border border-slate-300 rounded-lg py-2 px-3 text-sm"
            />

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
                  className="text-sm p-2 bg-white border rounded-md"
                >
                  {servico.titulo} - R$ {servico.preco}
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white py-3 rounded-md text-base font-semibold shadow-lg"
          >
            Salvar Orçamento
          </Button>
        </div>
      </main>
    </SidebarProvider>
  );
}
