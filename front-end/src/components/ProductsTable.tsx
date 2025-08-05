import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEllipsisVertical } from "react-icons/io5";
import Dropdown from "./Dropdown";

type Product = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  products: Product[];
};
const columns = [
  { header: "ID", accessor: "id" },
  { header: "Nome", accessor: "name" },
  { header: "Quantidade", accessor: "quantity" },
  { header: "Data", accessor: "createAt" },
  { header: "Preço", accessor: "price" },
  { header: "", accessor: "action" },
];

export default function ProductsTable({ products }: Props) {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleDropdown = (id: number) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const handleRowClick = (id: number) => {
    navigate(`/produtos/${id}`);
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
              {product.quantity}
            </td>
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              {product.createdAt}
            </td>
            <td className="p-3 text-start text-sm text-gray-500 font-normal">
              R${product.price}
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
                      onClick: () => console.log("Excluir"),
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
