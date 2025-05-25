import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Item = {
  id: number;
  nome: string;
  marca: string;
  preco_unitario: number;
  unidade_medida: string;
  created_at: string;
  updated_at: string;
};

export default function SelectItem() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<Item | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    marca: "",
    preco_unitario: "",
    unidade_medida: "",
  });

  const fetchItem = async () => {
    const response = await AxiosInstance.get(`/api/itens/${id}`);
    setItem(response.data);
    setForm({
      nome: response.data.nome,
      marca: response.data.marca,
      preco_unitario: response.data.preco_unitario.toString(),
      unidade_medida: response.data.unidade_medida,
      descricao: response.data.descricao || "",
    });
  };

  const handleDeletarItem = async () => {
    await AxiosInstance.delete(`/api/itens/${id}`);
    alert("Item deletado com sucesso");
    navigate("/itens");
  };

  const handleAtualizarItem = async () => {
    await AxiosInstance.put(`/api/itens/${id}`, {
      nome: form.nome,
      marca: form.marca,
      preco_unitario: parseFloat(form.preco_unitario),
      unidade_medida: form.unidade_medida,
    });
    setEditOpen(false);
    fetchItem();
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-zinc-100 pb-24">
        <nav className="w-full h-16 bg-blue-950 flex items-center justify-between shadow-md px-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-white text-4xl" />
            <h1 className="text-white text-lg font-semibold">Item</h1>
          </div>
        </nav>

        <div className="px-4 py-4">
          {item ? (
            <div className="bg-white rounded-lg p-4 shadow border border-slate-200 space-y-1">
              <h2 className="text-blue-900 text-lg font-bold">{item.nome}</h2>
              <p className="text-sm text-slate-600">Marca: {item.marca}</p>
              <p className="text-sm text-slate-600">
                Preço: R${" "}
                {parseFloat(item.preco_unitario.toString()).toFixed(2)}
              </p>
              <p className="text-sm text-slate-600">
                Unidade: {item.unidade_medida}
              </p>

              <p className="text-sm text-slate-500">
                Atualizado: {new Date(item.updated_at).toLocaleString()}
              </p>
            </div>
          ) : (
            <p className="text-slate-500">Carregando item...</p>
          )}
        </div>

        <div className="w-full flex flex-row gap-4 px-4">
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger asChild>
              <button className="text-center items-center text-blue-600 font-semibold flex-1 py-3 bg-white border border-slate rounded shadow">
                Editar
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-2">
                <input
                  type="text"
                  placeholder="Nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full border px-3 py-2 rounded py-3"
                />
                <input
                  type="text"
                  placeholder="Marca"
                  value={form.marca}
                  onChange={(e) => setForm({ ...form, marca: e.target.value })}
                  className="w-full border px-3 py-2 rounded py-3"
                />
                <input
                  type="number"
                  placeholder="Preço Unitário"
                  value={form.preco_unitario}
                  onChange={(e) =>
                    setForm({ ...form, preco_unitario: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded py-3"
                />
                <input
                  type="text"
                  placeholder="Unidade de Medida"
                  value={form.unidade_medida}
                  onChange={(e) =>
                    setForm({ ...form, unidade_medida: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded py-3"
                />

                <Button
                  className="w-full bg-blue-900 text-white mt-2 py-6 mt-10"
                  onClick={handleAtualizarItem}
                >
                  Salvar
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <button
            onClick={handleDeletarItem}
            className="text-center items-center text-red-600 font-semibold flex-1 py-3 bg-white border border-slate rounded shadow"
          >
            Deletar
          </button>
        </div>
      </main>
    </SidebarProvider>
  );
}
