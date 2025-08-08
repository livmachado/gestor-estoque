import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//componentes
import Breadcrumb from "../components/Breadcrumb";
import PrimaryButton from "../components/PrimaryButton";
import TransactionsTable from "../components/TransactionsTable";
import Dropdown from "../components/Dropdown";
import ModalTransaction from "../components/ModalTransaction";

//icons
import { FaArrowLeft } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
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

export default function DetailPage() {
  const { id } = useParams();
  const [openDropdownId, setOpenDropdownId] = useState<boolean>(false);
  const [isModalTransactionOpen, setIsModalTransactionOpen] =
    useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      toast.error("Não foi possível encontrar produtos cadastrados.");
    }
  };

  useEffect(() => {
    fetchProduct();
  });
  useEffect(() => {
    fetchTransactionsProduct();
  });

  const fetchTransactionsProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/transactions/${id}`);
      const data = await res.json();
      setTransactions(data);
    } catch (error) {
      console.error("Erro ao buscar transações:", error);
      toast.error("Não foi possível encontrar transações.");
    }
  };

  //Calcula o total de pags
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!product) return <p>Produto não encontrado</p>;

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
          {product && (
            <div
              key={product.id}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-blue-800 ml-17"
            >
              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">
                  ID DO PRODUTO
                </p>
                <p className="text-gray-800">{product.id}</p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">NOME</p>
                <p className="text-gray-800">{product.name}</p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">
                  DATA DE CRIAÇÃO
                </p>
                <p className="text-gray-800">
                  {new Date(product.createdAt).toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">QNT</p>
                <p className="text-gray-800">
                  {product.quantity} {product.unitType}
                </p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 text-xs mb-1">
                  PREÇO
                </p>
                <p className="text-gray-800">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="sm:col-span-2 md:col-span-3">
                <p className="font-semibold text-blue-700 text-xs mb-1">
                  OBSERVAÇÕES
                </p>
                <p className="text-gray-800">{product.description}</p>
              </div>
            </div>
          )}

          {/* Tabela */}
          <div className="overflow-x-auto flex justify-center">
            <TransactionsTable transactions={paginatedTransactions} />
          </div>
          <PaginationTable
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />

          <ModalTransaction
            isOpen={isModalTransactionOpen}
            onClose={() => setIsModalTransactionOpen(false)}
            onTransactionCreated={fetchTransactionsProduct}
            defaultProductId={product.id}
          />
        </div>
      </div>
    </div>
  );
}
