
type Product = {
    id: number;
    name: string;
    quantity: number;
    price: string;
    action: string;
    date: string;
};

type Props = {
    products: Product[];
};
const columns = [
    {header: "ID", accessor: "id"},
    {header: "Nome", accessor: "name"},
    {header: "Quantidade", accessor: "quantity"},
    {header: "Data", accessor: "createAt"},
    {header: "Preço", accessor: "price"},
    {header:"", accessor: "action"}
]

export default function ProductsTable({ products } : Props) {
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
                {products.map((product) => (
                    <tr key={product.id} className="py-4 border-b border-gray-200 cursor-pointer">
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{product.id}</td>
                        <td className="p-3 text-center text-sm text-gray-900 font-medium">{product.name}</td>
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{product.quantity}</td>
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{product.date}</td>
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">R${product.price}</td>
                        <td className="p-3 text-center text-sm text-gray-500 font-normal">{product.action}</td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
}