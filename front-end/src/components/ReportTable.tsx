import { FiAlertOctagon, FiAlertTriangle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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
};
const columns = [
  { header: "ID", accessor: "id" },
  { header: "Nome", accessor: "name" },
  { header: "Quantidade", accessor: "quantity" },
  { header: "Data", accessor: "createAt" },
  { header: "Preço", accessor: "price" },
];

export default function ReportTable({ products }: Props) {
  const navigate = useNavigate();
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
            onClick={() => handleRowClick(product.id)}
            className="py-4 border-b border-gray-200 cursor-pointer"
          >
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              {product.id}
            </td>
            <td className="p-3 text-start text-sm text-gray-900 font-medium ">
              {product.name}
            </td>
            <td
              className={`p-3 text-center text-sm font-semibold ${
                product.quantity === 0 ? "text-red-600" : "text-amber-500"
              }`}
            >
              <div className="flex gap-2 justify-center">
                {product.quantity}
                {product.quantity === 0 ? (
                  <FiAlertOctagon className="text-red-600" size={20} />
                ) : (
                  <FiAlertTriangle className="text-amber-300" size={20} />
                )}
              </div>
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
            <td className="p-3 text-center text-sm text-gray-500 font-normal">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
