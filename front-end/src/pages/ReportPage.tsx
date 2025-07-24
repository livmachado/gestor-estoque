//Componentes
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ModalTransaction from "../components/ModalTransaction";
import PrimaryButton from "../components/PrimaryButton";
import ReportTable from "../components/reportTable";

const productData = [
  {
    id: 1,
    name: "Mate Caseiro",
    quantity: 0,
    date: "20/01/2015",
    price: "10.00",
    action: "Ação",
  },
  {
    id: 1,
    name: "Mate Caseiro",
    quantity: 3,
    date: "20/01/2015",
    price: "10.00",
    action: "Ação",
  },
];

export default function ReportPage() {
  const [isModalTransactionOpen, setIsModalTransactionOpen] =
    useState<boolean>(false);
  return (
    <div>
      <div className="flex justify-between gap-2.5">
        <Breadcrumb items={[{ label: "Baixo Estoque"}]} />
        <PrimaryButton
          onClick={() => setIsModalTransactionOpen(!isModalTransactionOpen)}
          children="+ Nova Transação"
        />
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="flex justify-center">
        <ReportTable products={productData} />
      </div>
      <ModalTransaction
        isOpen={isModalTransactionOpen}
        onClose={() => setIsModalTransactionOpen(false)}
      />
    </div>
  );
}
