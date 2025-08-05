import { useState } from "react";
import { GoX } from "react-icons/go";

interface modalType {
  isOpen: boolean;
  onClose: () => void;
  onProductCreated: () => void;
}

export default function ModalProduct({ isOpen, onClose, onProductCreated }: modalType) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          quantity: Number(quantity),
          price: Number(price),
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar produto");
      }

      // Se tudo certo, recebe o produto criado
      const newProduct = await response.json();
      console.log("Produto criado:", newProduct);
      setName("");
      setQuantity("");
      setPrice("");
      setDescription("");

      onProductCreated();

      onClose();
    } catch (error) {
      // Caso aconteça qualquer erro na requisição ou no servidor, cai aqui
      console.error("Erro ao enviar:", error);
      alert("Não foi possível cadastrar o produto. Tente novamente.");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 p-10 left-0 rounded-2xl flex items-center justify-center z-50">
      <form
        className="bg-blue-200 rounded-2xl p-6 w-full max-w-md shadow-lg space-y-5"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-blue-700 cursor-pointer">
            <GoX size={24} />
          </button>
        </div>
        <label className="block font-medium mb-1 text-blue-600" htmlFor="">
          Nome do produto
        </label>
        <input
          className="w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
          type="text"
          placeholder="Nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium mb-1 text-blue-600" htmlFor="">
              Quatidade
            </label>
            <input
              type="number"
              placeholder="quantidade"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              className="w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
              />
          </div>
          <div className="w-1/2">
            <label className="block font-medium mb-1 text-blue-600" htmlFor="">
              Preço
            </label>
            <input
              type="number"
              placeholder="preço"
              value={price}
              step="0.01"
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
              />
          </div>
        </div>
        <label className="block font-medium mb-1 text-blue-600" htmlFor="">
          Descrição
        </label>
        <textarea
          placeholder="Descrição do produto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          maxLength={50}
          className="w-full border border-blue-400 rounded-md px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
          />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
