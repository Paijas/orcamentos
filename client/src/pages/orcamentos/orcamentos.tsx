import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useNavigate } from "react-router-dom";
export default function orcamentos() {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,200&icon_names=arrow_back"
      />
      <AppSidebar />
      <main className="w-full min-h-screen bg-zinc-100">
        <SidebarTrigger className="absolute text-white text-4xl" />

        <nav className="w-full h-16 bg-blue-950 flex items-center px-6 shadow-md"></nav>

        <div className=" px-6"></div>
      </main>
    </SidebarProvider>
  );
}
