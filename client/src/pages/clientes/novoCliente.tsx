import React, { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AxiosInstance from "@/services/AxiosInstance";
import Navbar from "../../components/navbar";

export default function NovoCliente() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    celular: "",
    tipo_cliente: "PF",
    documento: "",
    endereco: "",
    cep: "",
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
      await AxiosInstance.post("/api/clientes", form);
      navigate("/clientes");
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      alert("Erro ao criar cliente. Verifique os dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-zinc-100 pb-24">
      <Navbar />

      <div className="px-4 py-4 space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Nome completo
          </label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Celular</label>
          <input
            type="text"
            name="celular"
            value={form.celular}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Tipo de cliente
          </label>
          <select
            name="tipo_cliente"
            value={form.tipo_cliente}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm text-slate-600 bg-white"
          >
            <option value="PF">Pessoa Física</option>
            <option value="PJ">Pessoa Jurídica</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Documento</label>
          <input
            type="text"
            name="documento"
            value={form.documento}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">CEP</label>
          <input
            type="text"
            name="cep"
            value={form.cep}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg py-3 px-3 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Endereço</label>
          <input
            type="text"
            name="endereco"
            value={form.endereco}
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
          {loading ? "Salvando..." : "Salvar Cliente"}
        </Button>
      </div>
    </main>
  );
}
