import React, { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";

export default function NovoItem() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    marca: "",
    preco_unitario: "",
    unidade_medida: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        ...form,
        preco_unitario: form.preco_unitario.toString(),
      };
      await AxiosInstance.post("/api/itens", payload);
      navigate("/itens");
    } catch (error) {
      console.error("Erro ao criar item:", error);
      alert("Erro ao criar item. Verifique os dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-zinc-100 pb-24">
        <nav className="w-full h-16 bg-blue-950 flex items-center shadow-md px-4 gap-4">
          <SidebarTrigger className="text-white text-4xl" />
          <h1 className="text-white text-lg font-semibold">Novo Item</h1>
        </nav>

        <div className="px-4 py-4 space-y-4">
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
            placeholder="Nome do item"
          />
          <input
            type="text"
            name="marca"
            value={form.marca}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
            placeholder="Marca"
          />
          <input
            type="number"
            name="preco_unitario"
            value={form.preco_unitario}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
            placeholder="Preço unitário"
            step="0.01"
          />
          <input
            type="text"
            name="unidade_medida"
            value={form.unidade_medida}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
            placeholder="Unidade de medida (ex: litros, kg)"
          />
        </div>

        <div className="fixed bottom-4 left-4 right-4 px-4">
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-900 text-white py-3 rounded-md text-base font-semibold shadow-lg"
          >
            {loading ? "Salvando..." : "Salvar Item"}
          </Button>
        </div>
      </main>
    </SidebarProvider>
  );
}
