import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";
import Navbar from "../../components/navbar";

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
    <main className="w-full min-h-screen bg-zinc-100 pb-24">
      <Navbar />

      <div className="px-4 py-4 space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block mb-1 text-sm font-medium text-zinc-700"
          >
            Nome do item
          </label>
          <input
            id="nome"
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="marca"
            className="block mb-1 text-sm font-medium text-zinc-700"
          >
            Marca
          </label>
          <input
            id="marca"
            type="text"
            name="marca"
            value={form.marca}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="preco_unitario"
            className="block mb-1 text-sm font-medium text-zinc-700"
          >
            Preço unitário
          </label>
          <input
            id="preco_unitario"
            type="number"
            name="preco_unitario"
            value={form.preco_unitario}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
            step="0.01"
          />
        </div>

        <div>
          <label
            htmlFor="unidade_medida"
            className="block mb-1 text-sm font-medium text-zinc-700"
          >
            Unidade de medida (ex: litros, kg)
          </label>
          <input
            id="unidade_medida"
            type="text"
            name="unidade_medida"
            value={form.unidade_medida}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>
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
  );
}
