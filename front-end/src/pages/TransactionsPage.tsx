import { useState } from "react";

//Componentes
import TransactionTable from "../components/TransactionsTable";
import ModalTransaction from "../components/ModalTransaction";
import PrimaryButton from "../components/PrimaryButton";
import Breadcrumb from "../components/Breadcrumb";
import SearchInput from "../components/SearchInput";

const transactionsData = [
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
  const [isModalTransactionOpen, setIsModalTransactionOpen] =
    useState<boolean>(false);
    const [search, setSearch] = useState<string>("");
    
      const filteredTransactions = transactionsData.filter((transaction) => {
        const s = search
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        const name = transaction.product
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        const id = transaction.productId.toString();
    
        return name.includes(s) || id.includes(s);
      });

  return (
    <div className="">
      <div className="flex justify-between gap-2.5">
        <Breadcrumb
          items={[
            { label: "Transações", href: "/" },
            ...(isModalTransactionOpen ? [{ label: "Nova Transação" }] : []),
          ]}
        />
        <PrimaryButton
          onClick={() => setIsModalTransactionOpen(!isModalTransactionOpen)}
          children="+ Nova Transação"
        />
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <SearchInput value={search} onChange={setSearch} />
      <div className="flex justify-center">
        <TransactionTable transactions={filteredTransactions} />
      </div>
      <ModalTransaction
        isOpen={isModalTransactionOpen}
        onClose={() => setIsModalTransactionOpen(false)}
      />
    </div>
  );
}
