import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEllipsisVertical } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { toast } from "react-toastify";

type Product = {
  id: number;
  name: string;
  description: string;
  unitType: string;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};
const columns = [
  { header: "ID", accessor: "id" },
  { header: "Nome", accessor: "name" },
  { header: "Quantidade", accessor: "quantity" },
  { header: "Data", accessor: "createAt" },
  { header: "Preço", accessor: "price" },
  { header: "", accessor: "action" },
];

const unitLabels: Record<string, string> = {
  UNI: "UN",
  KG: "KG",
  L: "L",
  CX: "CX",
  PCT: "PCT",
};

export default function ProductsTable({ products, setProducts }: Props) {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleDropdown = (id: number) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const handleRowClick = (id: number) => {
    navigate(`/produtos/${id}`);
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este produto?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Erro ao excluir produto.");
      }

      // Remove o produto do estado local
      setProducts((prev) => prev.filter((product) => product.id !== id));
      toast.success("Seu item foi excluído com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível excluir o produto.");
    }
  };

  return (
    <table className="w-7/8 bg-white rounded-md overflow-hidden">
      <thead className="border-b-3 border-r-2 border-blue-200 bg-blue-600 text-blue-300">
        <tr>
          {columns.map((col) => (
            <th key={col.accessor} className="p-3">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            className="py-4 border-b border-gray-200 cursor-pointer"
            onClick={() => handleRowClick(product.id)}
          >
            <td className="p-3 text-center text-sm text-gray-500 font-normal hover:underline">
              {product.id}
            </td>
            <td className="p-3 text-start text-sm text-gray-900 font-medium hover:underline">
              {product.name}
            </td>
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              {product.quantity}{" "}
              {unitLabels[product.unitType] || product.unitType}
            </td>
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              {new Date(product.createdAt).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td className="p-3 text-start text-sm text-gray-500 font-normal">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <button
              className="flex cursor-pointer p-3 items-center text-center hover:bg-gray-100 rounded"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(product.id);
              }}
            >
              <IoEllipsisVertical size={20} />
            </button>
            {openDropdownId === product.id && (
              <div className="absolute right-2 z-10 bg-white border border-gray-200 rounded-md shadow-lg w-40">
                <Dropdown
                  options={[
                    {
                      label: "Detalhes",
                      onClick: () => navigate(`/produtos/${product.id}`),
                    },
                    { label: "Editar", onClick: () => console.log("Editar") },
                    {
                      label: "Excluir",
                      onClick: (e) => {
                        e?.stopPropagation();
                        handleDelete(product.id);
                      },
                      colorRed: "y",
                    },
                  ]}
                />
              </div>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
