import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";

type Product = {
  id: number;
  name: string;
  quantity: number;
  price: string;
  date: string;
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

  const toggleDropdown = (id: number) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };


  return (
    <table className="w-full bg-white rounded-md overflow-visible">
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
          >
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              {product.id}
            </td>
            <td className="p-3 text-center text-sm text-gray-900 font-medium">
              {product.name}
            </td>
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              {product.quantity}
            </td>
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              {product.date}
            </td>
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              R${product.price}
            </td>
            <button className="cursor-pointer" onClick={() => toggleDropdown(product.id)}>
                <td className="relative p-3 text-center text-sm text-gray-500 font-normal">
                    <IoEllipsisVertical size={20} />
                {openDropdownId === product.id && (
                    <div className="absolute right-0  mb-2 w-36 z-50">
                    <div className="bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        Detalhes
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        Editar
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-blue-50">
                        Excluir
                        </button>
                    </div>
                    </div>
                )}
                </td>
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
