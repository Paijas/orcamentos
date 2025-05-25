import React from "react";
import Option from "../components/option";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useAuth } from "@/services/AuthContext";

export default function Home() {
  const { user } = useAuth();

  const getInitials = (name: string | undefined): string => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    const first = parts[0]?.[0] || "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
    return `${first}${last}`.toUpperCase();
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen bg-zinc-100">
        <SidebarTrigger className="absolute text-white text-4xl" />

        <nav className="w-full h-16 bg-blue-950 flex items-center px-6 shadow-md"></nav>

        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <div className="bg-blue-950 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {getInitials(user?.nome)}
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-blue-950">Bem-vindo</h1>
                <h2 className="text-slate-600 font-medium text-sm">
                  {user?.nome ?? "Usuário"}
                </h2>
              </div>
            </div>

            <div className=" flex flex-row gap-4 mt-4">
              <Option page="/orcamentos" label="Orçamentos" />
              <Option page="/clientes" label="Clientes" />
              <Option page="/itens" label="Items" />
            </div>
          </div>

          <h1 className="text-blue-950 mt-8 font-bold text-xl border-b border-slate-300 pb-2">
            Últimos Orçamentos
          </h1>
        </div>
      </main>
    </SidebarProvider>
  );
}
