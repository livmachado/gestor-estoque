import { useState } from "react";
import { useNavigate } from "react-router-dom";

//componentes
import Breadcrumb from "../components/Breadcrumb";
import PrimaryButton from "../components/PrimaryButton";
import TransactionsTable from "../components/TransactionsTable";
import Dropdown from "../components/Dropdown";
import ModalTransaction from "../components/ModalTransaction";

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
  const [openDropdownId, setOpenDropdownId] = useState<boolean>(false);
  const [isModalTransactionOpen, setIsModalTransactionOpen] =
    useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between gap-2.5">
        <Breadcrumb
          items={[
            { label: "Estoque", href: "/" },
            { label: "Produto" },
            ...(isModalTransactionOpen ? [{ label: "Nova Transação" }] : []),
          ]}
        />
        <PrimaryButton
          onClick={() => setIsModalTransactionOpen(!isModalTransactionOpen)}
          children="+ Nova Transação"
        />
      </div>
      <hr className="mt-4 border-t border-gray-300" />

      {/* tabela */}

      <div className="flex justify-center mt-6 px-4">
        <div className="w-5/6 bg-blue-100 rounded-xl p-6 space-y-8">
          {/* Cabeçalho */}
          <div className="flex justify-between items-center">
            <FaArrowLeft
              size={24}
              className="cursor-pointer text-blue-700 hover:text-blue-900 transition"
              onClick={() => navigate(-1)}
            />

            <div className="relative">
              <button
                className="cursor-pointer text-blue-700 hover:text-blue-900 transition"
                onClick={() => setOpenDropdownId(!openDropdownId)}
              >
                <IoEllipsisVertical size={24} />
              </button>

              {openDropdownId && (
                <div className="absolute right-0 mt-2 z-20 bg-white border border-gray-200 rounded-md shadow-lg w-40">
                  <Dropdown
                    options={[
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
            </div>
          </div>

          {/* Informações do Produto */}
          {product.map((prod) => (
            <div
              key={prod.id}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-blue-800 ml-17"
            >
              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">
                  ID DO PRODUTO
                </p>
                <p className="text-gray-800">{prod.id}</p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">NOME</p>
                <p className="text-gray-800">{prod.name}</p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">
                  DATA DE CRIAÇÃO
                </p>
                <p className="text-gray-800">{prod.date}</p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">QNT</p>
                <p className="text-gray-800">{prod.quantity} uni/kg</p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">
                  PREÇO
                </p>
                <p className="text-gray-800">R${prod.price}</p>
              </div>

              <div className="sm:col-span-2 md:col-span-3">
                <p className="font-semibold text-blue-700 text-xs mb-1">
                  OBSERVAÇÕES
                </p>
                <p className="text-gray-800">{prod.detail}</p>
              </div>
            </div>
          ))}

          {/* Tabela */}
          <div className="overflow-x-auto flex justify-center">
            <TransactionsTable transactions={transactionData} />
          </div>

          <ModalTransaction
            isOpen={isModalTransactionOpen}
            onClose={() => setIsModalTransactionOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
