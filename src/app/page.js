"use client"
import { useState } from "react";

const imagens = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png",
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png",
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png",
];

const Dado = ({ valor }) => {

  return (
    <div>
      <img src={imagens[valor]} alt={`Dado ${valor}`} width={100} />
    </div>
  );
};

export default function Home() {
  const [valor, setValor] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6);
    setValor(novoValor);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <Dado valor={valor} />
      <button
        onClick={rolarDado}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Rolar Dado
      </button>
    </div>
  );
}
