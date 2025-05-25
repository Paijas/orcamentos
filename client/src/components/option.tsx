import React from "react";
import { UsersRound, ScrollText, ListTodo } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OptionProps {
  label: string;
  page: string;
}

export default function Option({ label, page }: OptionProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-row p-2 gap-6  items-center justify-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div
          onClick={() => navigate(page)}
          className="bg-white shadow rounded w-14 h-14 items-center flex justify-center text-blue-800"
        >
          {label === "Orçamentos" ? <ScrollText /> : <></>}
          {label === "Clientes" ? <UsersRound /> : <></>}
          {label === "Items" ? <ListTodo /> : <></>}
        </div>
        <p className="text-[12px] font-semibold">{label}</p>
      </div>
    </div>
  );
}
