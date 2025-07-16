export function Table() {
    return(
        <table className="w-full bg-white rounded-md overflow-hidden" >
            <thead className="border-b-3 border-r-2 border-blue-200 bg-blue-600 text-blue-300">
                <tr>
                    <th className="p-3" >Id</th>
                    <th className="p-3">Nome</th>
                    <th className="p-3">Quantidade</th>
                    <th className="p-3">Data</th>
                    <th className="p-3">Preço</th>
                    <th className="p-3"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="py-4 border-b border-gray-200 cursor-pointer">
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">
                        <a href="">1</a>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-900 font-medium">Mate Caseiro</td>
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">10</td>
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">20/01/2015</td>
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">R$10.00</td>
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">Ação</td>
                </tr>
                <tr className="py-4 border-b border-gray-200">
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">
                        <a href="">1</a>
                    </td>
                    <td className="p-3 text-center text-sm text-gray-900 font-medium">Mate Caseiro</td>
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">10</td>
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">20/01/2015</td>
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">R$10.00</td>
                    <td className="p-3 text-center text-sm text-gray-500 font-normal">Ação</td>
                </tr>
            </tbody>
        </table>
    )
}