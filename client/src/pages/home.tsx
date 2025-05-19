import React from "react";
import Option from "../components/option";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger className="absolute text-white text-4xl " />
        <div className="flex flex-col w-full min-h-screen bg-wihte bg-zinc-100">
          <nav className="w-full h-16 bg-blue-950 items-center  flex px-6 mb-4"></nav>

          <div className="w-full px-6">
            {/* CARD */}
            <div className="w-full rounded bg-white h-auto shadow">
              {/* PERFIL */}
              <div className="flex flex-row w-full py-2 gap-2 px-2">
                <div className="flex  items-center justify-center">
                  <img className=" bg-blue-950 p-7 rounded" src="" alt="" />
                  <p className="text-white font-bold absolute text-xl">JO</p>
                </div>
                <div className="flex flex-col justify-center  w-full">
                  <h1 className="font-bold text-blue-950 text-xl">Bem-vindo</h1>
                  <h2 className="text-slate-600 font-medium text-sm">
                    Jonson de Oliveira
                  </h2>
                </div>
              </div>

              <div className="flex w-full flex-row mt-4">
                {/* OPCAO 1 */}
                <Option label="Orçamentos" icon="receipt_long" />
                <Option label="Clientes" icon="contacts_product" />
                <Option label="Items" icon="category" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
