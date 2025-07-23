import Breadcrumb from "../components/Breadcrumb";
import PrimaryButton from "../components/PrimaryButton";
import TransactionsTable from "../components/TransactionsTable";

//icons
import { FaArrowLeft } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

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
    product: "Mate Caseiro",
    productId: 1,
    type: "in",
    quantity: 2,
    date: "07/07/24 08:06:52",
  },
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
    product: "Mate Caseiro",
    productId: 1,
    type: "in",
    quantity: 2,
    date: "07/07/24 08:06:52",
  },
];

const product = [
  {
    id: 1,
    name: "Mate Caseiro",
    quantity: 10,
    date: "20/01/2015",
    price: "10.00",
    detail: "Mate da casa preparado com limão",
  },
];


export default function DetailPage() {
  return (
    <div className="items-center">
      <div className="flex justify-between gap-2.5">
        <Breadcrumb value="Detalhe do Produto " />
        <PrimaryButton onClick={()=> console.log("Hello")} children="+ Nova Transação" />
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="ml-24 my-10 p-3 w-6xl bg-blue-100 rounded-md ">
        <div className="flex justify-between p-0.5 items-center">
          <FaArrowLeft size= {20} className="text-blue-500" />
          <IoEllipsisVertical size={20} />

        </div>
        {product.map((prod) => (
            <div className="w-full mx-10 mb-4 grid grid-cols-3 gap-3 text-sm text-blue-600 gap-y-2 ">
                <div className="">
                    <div className="grid grid-rows-2 gap-y-1 mb-2">
                        <span className="font-medium">ID DO PRODUTO</span>
                        <span className="font-semibold text-gray-600">{prod.id}</span>
                    </div>
                    <div className="grid grid-row-2 gap-y-1 mb-2">
                        <span className="font-medium">QNT</span>
                        <span className="font-semibold  text-gray-600">{prod.quantity} uni/kg</span>
                        

                    </div>
                </div>
                <div className="">
                    <div className="grid grid-row-2 gap-y-1 mb-2">
                        <span className="font-medium">NOME</span>
                        <span className="font-semibold  text-gray-600">{prod.name}</span>
                    </div>
                    <div className="grid grid-row-2 gap-y-1 mb-2">
                        <span className="font-medium">PREÇO</span>
                        <span className="font-semibold  text-gray-600">R${prod.price}</span>

                    </div>
                </div>
                <div>
                    <div className="grid grid-row-2 gap-x-2">
                        <span className="font-medium">DATA DE CRIAÇÃO</span>
                        <span className="font-semibold  text-gray-600">{prod.date}</span>
                    </div>
                </div>
                    <div className="grid grid-row-2 gap-x-2">
                        <span className="font-medium">OBSERVAÇÕES</span>
                        <span className="font-semibold  text-gray-600">{prod.detail}</span>
                    </div>
            </div>

          ))}
        <span className="w-full font-semibold text-md text-blue-600 ml-10 ">
          TRANSAÇÕES DO PRODUTO
        </span>
        <div className="mx-10 my-6">
          <TransactionsTable transactions={transactionData} />  
        </div>
      </div>
    </div>
  );
}
