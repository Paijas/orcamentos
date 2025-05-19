import React from "react";

interface OptionProps {
  label: string;
  icon: string;
}

export default function Option({ label, icon }: OptionProps) {
  return (
    <div className="w-full flex flex-row p-2 gap-6  items-center justify-center">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
        rel="stylesheet"
      ></link>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="bg-white shadow rounded w-14 h-14 items-center flex justify-center text-blue-600">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <p className="text-[12px] font-semibold">{label}</p>
      </div>
    </div>
  );
}
