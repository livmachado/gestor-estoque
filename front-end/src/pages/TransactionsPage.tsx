import { useEffect, useState } from "react";

//Componentes
import TransactionTable from "../components/TransactionsTable";
import ModalTransaction from "../components/ModalTransaction";
import PrimaryButton from "../components/PrimaryButton";
import Breadcrumb from "../components/Breadcrumb";
import SearchInput from "../components/SearchInput";
import { toast } from "react-toastify";
import PaginationTable from "../components/PaginationTable";

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

export default function TransactionsPage() {
  const [isModalTransactionOpen, setIsModalTransactionOpen] =
    useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [transactions, setTransaction] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const fetchTransaction = async () => {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      const data = await response.json();
      setTransaction(data);
    } catch (error) {
      console.error("Erro ao buscar transações:", error);
      toast.error("Não foi possível movimentações dos produtos");
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    const s = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const name = transaction.product.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const id = transaction.productId.toString();

    return name.includes(s) || id.includes(s);
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  //Calcula o total de pags
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransaction = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        <TransactionTable transactions={paginatedTransaction} />
      </div>
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <ModalTransaction
        isOpen={isModalTransactionOpen}
        onClose={() => setIsModalTransactionOpen(false)}
        onTransactionCreated={fetchTransaction}
      />
    </div>
  );
}
