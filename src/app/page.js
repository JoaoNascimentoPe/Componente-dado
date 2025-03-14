"use client"
import { useState } from "react";
import Dado from './components/Dado'

export default function Home() {
  const [valor, setValor] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValor(novoValor);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <Dado valor={valor}/>
      <button
        onClick={rolarDado}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Rolar Dado
      </button>
    </div>
  );
}
