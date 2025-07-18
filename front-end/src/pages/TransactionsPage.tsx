import { useState } from "react";

//Icon
import { PiGreaterThanLight } from "react-icons/pi";
import { CiHome } from "react-icons/ci";

//Componentes
import TransactionTable from "../components/TransactionsTable";
import ModalTransaction from "../components/ModalTransaction";


const transactionData = [
  {
    id: 1,
    product: "Mate Caseiro",
    productId: 1,
    type: "in",
    quantity: 2,
    date: "07/07/24 08:06:52",
  },
    {
    id: 1,
    product: "Muzzarella",
    productId: 12,
    type: "out",
    quantity: 1000,
    date: "07/07/24 08:06:52",
  },
  {
    id: 2,
    product: "Croissant",
    productId: 7,
    type: "out",
    quantity: 9000,
    date: "06/07/24 18:51:29",
  },
];

export default function TransactionsPage() {
    const [isModalTransactionOpen, setIsModalTransactionOpen] = useState<boolean>(false)
    
    return (
    <div>
      <div className="flex justify-between gap-2.5">
        <div className="flex items-center justify-start gap-2.5">
          <CiHome size={20} className=" text-gray-500" />
          <PiGreaterThanLight size={16} className="text-gray-500" />
          <span className=" text-gray-500 text-base font-medium ">
            Transações
          </span>
          <PiGreaterThanLight size={16} className="text-gray-500" />
        </div>
        <button
          onClick={() => setIsModalTransactionOpen(!isModalTransactionOpen)}
          className="cursor-pointer flex justify-end items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition duration-200"
        >
          + Nova Movimentação
        </button>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <TransactionTable transactions={transactionData} />
      <ModalTransaction isOpen={isModalTransactionOpen} onClose={()=> setIsModalTransactionOpen(false)} />
    </div>
  );
}
