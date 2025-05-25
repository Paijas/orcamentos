import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AxiosInstance from "@/services/AxiosInstance";

export default function EditarCliente() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [clienteData, setClienteData] = useState({
    nome: "",
    email: "",
    celular: "",
    tipo_cliente: "PF",
    documento: "",
    endereco: "",
    cep: "",
  });

  const fetchCliente = async () => {
    try {
      const response = await AxiosInstance.get(`/api/clientes/${id}`);
      const data = response.data;
      setClienteData({
        nome: data.nome || "",
        email: data.email || "",
        celular: data.celular || "",
        tipo_cliente: data.tipo_cliente || "PF",
        documento: data.documento || "",
        endereco: data.endereco || "",
        cep: data.cep || "",
      });
    } catch (error) {
      console.error("Erro ao buscar cliente:", error);
    }
  };

  const handleAtualizarCliente = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await AxiosInstance.put(`/api/clientes/${id}`, clienteData);
      alert("Cliente atualizado com sucesso!");
      navigate(`/clientes/${id}`); // Volta para a página do cliente
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      alert(error.response?.data?.error || "Erro ao tentar atualizar cliente.");
    }
  };

  useEffect(() => {
    fetchCliente();
  }, [id]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-zinc-100 pb-24">
        <nav className="w-full h-16 bg-blue-950 flex items-center justify-between shadow-md px-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-white text-4xl" />
            <h1 className="text-white text-lg font-semibold">Editar Cliente</h1>
          </div>
        </nav>

        <form
          onSubmit={handleAtualizarCliente}
          className=" m-4 p-4 rounded   space-y-4"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="nome">Nome</Label>
            <Input
              className="py-6"
              id="nome"
              value={clienteData.nome}
              onChange={(e) =>
                setClienteData({ ...clienteData, nome: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="py-6"
              id="email"
              value={clienteData.email}
              onChange={(e) =>
                setClienteData({ ...clienteData, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="celular">Celular</Label>
            <Input
              className="py-6"
              id="celular"
              value={clienteData.celular}
              onChange={(e) =>
                setClienteData({ ...clienteData, celular: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="tipo_cliente">Tipo</Label>
            <select
              id="tipo_cliente"
              className="border rounded px-2 py-2"
              value={clienteData.tipo_cliente}
              onChange={(e) =>
                setClienteData({ ...clienteData, tipo_cliente: e.target.value })
              }
            >
              <option value="PF">Pessoa Física</option>
              <option value="PJ">Pessoa Jurídica</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="documento">Documento</Label>
            <Input
              className="py-6"
              id="documento"
              value={clienteData.documento}
              onChange={(e) =>
                setClienteData({ ...clienteData, documento: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="endereco">Endereço</Label>
            <Input
              className="py-6"
              id="endereco"
              value={clienteData.endereco}
              onChange={(e) =>
                setClienteData({ ...clienteData, endereco: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cep">CEP</Label>
            <Input
              className="py-6"
              id="cep"
              value={clienteData.cep}
              onChange={(e) =>
                setClienteData({ ...clienteData, cep: e.target.value })
              }
            />
          </div>

          <Button type="submit" className="w-full bg-blue-900 py-6">
            Salvar Alterações
          </Button>
        </form>
      </main>
    </SidebarProvider>
  );
}
