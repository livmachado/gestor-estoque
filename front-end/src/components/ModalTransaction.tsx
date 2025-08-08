//import { useState } from "react";
import { useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { toast } from "react-toastify";

interface modalType {
  isOpen: boolean;
  onClose: () => void;
  onTransactionCreated: () => void;
  defaultProductId?: number;
}

type Product = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  unitType: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export default function ModalTransaction({
  isOpen,
  onClose,
  onTransactionCreated,
  defaultProductId,
}: modalType) {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("IN");
  const [note, setNote] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (isOpen && defaultProductId) {
      setProductId(String(defaultProductId));
    }
  }, [isOpen, defaultProductId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: Number(productId),
          type,
          quantity: Number(quantity),
          note,
        }),
      });
      if (!res.ok) {
        throw new Error("Erro ao criar transação");
      }

      // Se tudo certo, recebe o produto criado
      const newProduct = await res.json();
      console.log("Transação criada:", newProduct);
      setProductId("");
      setType("IN");
      setQuantity("");
      setNote("");

      onTransactionCreated();

      onClose();
      toast.success("Sua transação foi Criado com sucesso!");
    } catch (error) {
      // Caso aconteça qualquer erro na requisição ou no servidor, cai aqui
      console.error("Erro ao enviar:", error);
      toast.error("Não foi possível realizar a transação. Tente novamente.");
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
          Produto
        </label>
        <select
          required
          value={defaultProductId}
          onChange={(e) => setProductId(e.target.value)}
          className="w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100 text-gray-500"
        >
          <option value="">Selecione...</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.id} - {product.name}
            </option>
          ))}
        </select>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium mb-1 text-blue-600" htmlFor="">
              Quatidade
            </label>
            <input
              type="number"
              placeholder="quantidade"
              value={quantity}
              required
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium mb-1 text-blue-600" htmlFor="">
              Tipo de Transação
            </label>
            <select
              required
              onChange={(e) => setType(e.target.value)}
              className={`w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 ${
                type === "IN" ? "text-blue-600" : "text-red-400"
              }`}
            >
              <option value="IN" className="text-blue-600">
                Entrada
              </option>
              <option value="OUT" className="text-red-400">
                Saída
              </option>
            </select>
          </div>
        </div>
        <label className="block font-medium mb-1 text-blue-600" htmlFor="">
          Nota
        </label>
        <textarea
          placeholder="Descrição do produto"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={200}
          className="w-full resize-none border h-24 border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100 custom-scroll"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}
