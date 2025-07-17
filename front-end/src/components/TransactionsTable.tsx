
type Transaction= {
    id: number;
    product: string;
    productId: number;
    type: string;
    quantity: number;
    date: string;
    action: string;
};

type Props = {
    transactions: Transaction[];
};
const columns = [
    {header: "", accessor: "type"},
    {header: "ID do Produto", accessor: "productId"},
    {header: "Produto", accessor: "product"},
    {header: "Data", accessor: "date"},
    {header: "Quantidade", accessor: "quantity"},
    {header: "Ação", accessor: "action"}
]

export default function TransactionTable({ transactions } : Props) {
    return(
        <table className="w-full bg-white rounded-md overflow-hidden" >
            <thead className="border-b-3 border-r-2 border-blue-200 bg-blue-600 text-blue-300">
                <tr>
                    {columns.map((col) => (
                        <th  key= {col.accessor} className="p-3" >{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id} className="py-4 border-b border-gray-200 cursor-pointer">
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{transaction.type}</td>
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{transaction.productId}</td>
                        <td className="p-3 text-center text-sm text-gray-900 font-medium">{transaction.product}</td>
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{transaction.date}</td>
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{transaction.quantity}</td>
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{transaction.action}</td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
}