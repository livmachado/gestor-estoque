import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

type Transaction = {
  id: number;
  product: string;
  productId: number;
  type: string;
  quantity: number;
  date: string;
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
];

export default function TransactionTable({ transactions }: Props) {
  return (
    <table className="w-full bg-white rounded-md overflow-hidden">
      <thead className="border-b-3 border-r-2 border-blue-200 bg-blue-600 text-blue-300 ">
        <tr>
          {columns.map((col) => (
            <th key={col.accessor} className="p-3 text-center">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          const isOut = transaction.type === "out";
          const color = isOut ? "text-red-500" : "text-blue-600";
          const icon = isOut ? (
            <FiArrowDownLeft size={16} className="text-red-500" />
          ) : (
            <FiArrowUpRight size={16} className="text-blue-500" />
          );

          return (
            <tr key={transaction.id} className="border-b border-gray-200 odd:bg-white even:bg-blue-200">
              <td
                className={`p-3 text-start text-sm font-medium ${color} flex items-center justify-center gap-1`}
              >
                {icon}
              </td>
              <td className="p-3 text-sm text-gray-500 text-center cursor-pointer">
                {transaction.productId}
              </td>
              <td className={`p-3 text-center text-sm font-medium ${color}`}>
                {transaction.product}
              </td>
              <td className="p-3 text-center text-sm text-gray-400">
                {transaction.date}
              </td>
              <td className={`p-3 text-end text-sm font-semibold ${color}`}>
                {transaction.quantity}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
