import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

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

type Transaction = {
  id: number;
  product: Product;
  productId: number;
  type: "IN" | "OUT";
  quantity: number;
  note: string;
  createdAt: string;
};

type Props = {
  transactions: Transaction[];
};
const columns = [
  { header: "", accessor: "type" },
  { header: "ID do Produto", accessor: "productId" },
  { header: "Produto", accessor: "product" },
  { header: "Data", accessor: "date" },
  { header: "Quantidade", accessor: "quantity" },
  { header: "Nota", accessor: "note" },
];

export default function TransactionTable({ transactions }: Props) {
  const navigate = useNavigate();
  const handleRowClick = (id: number) => {
    navigate(`/produtos/${id}`);
  };
  return (
    <table className="w-7/8 bg-white rounded-md overflow-hidden">
      <thead className="border-b-3 border-r-2 border-blue-200 bg-blue-600 text-blue-300 ">
        <tr>
          {columns.map((col) => (
            <th key={col.accessor} className="p-3 text-start">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          const isOut = transaction.type === "OUT";
          const color = isOut ? "text-red-500" : "text-blue-600";
          const icon = isOut ? (
            <FiArrowDownLeft size={16} className="text-red-500" />
          ) : (
            <FiArrowUpRight size={16} className="text-blue-500" />
          );

          return (
            <tr
              key={transaction.id}
              onClick={() => handleRowClick(transaction.product.id)}
              className="border-b border-gray-200"
            >
              <td
                className={`p-3 text-sm font-medium ${color} flex items-center justify-center gap-1`}
              >
                {icon}
              </td>
              <td className="p-3 text-sm text-gray-500 cursor-pointer">
                {transaction.productId}
              </td>
              <td className={`p-3 text-sm font-medium ${color}`}>
                {transaction.product.name}
              </td>
              <td className="p-3 text-sm text-gray-400">
                {new Date(transaction.createdAt).toLocaleString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className={`p-3 text-sm font-semibold ${color}`}>
                {transaction.quantity} {transaction.product.unitType}
              </td>
              <td className="p-3 text-sm text-gray-400">
                {transaction.note === null
                  ? "Transação concluída"
                  : transaction.note}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
