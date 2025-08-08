//Componentes
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ModalTransaction from "../components/ModalTransaction";
import PrimaryButton from "../components/PrimaryButton";
import ReportTable from "../components/ReportTable";
import { toast } from "react-toastify";
import SearchInput from "../components/SearchInput";
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


export default function ReportPage() {
  const [isModalTransactionOpen, setIsModalTransactionOpen] =
    useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const fetchReport = async () => {
    try {
      const response = await fetch("http://localhost:3000/report");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      toast.error("Não foi possível encontrar produtos com estoque baixo.");
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  //Fitro de produtos
  const filteredProducts = products.filter((product) => {
    const s = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const name = product.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const id = product.id.toString();

    return name.includes(s) || id.includes(s);
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  //Calcula o total de pags
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="flex justify-between gap-2.5">
        <Breadcrumb items={[{ label: "Baixo Estoque" }]} />
        <PrimaryButton
          onClick={() => setIsModalTransactionOpen(!isModalTransactionOpen)}
          children="+ Nova Transação"
        />
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <SearchInput value={search} onChange={setSearch} />
      <div className="flex justify-center">
        <ReportTable products={paginatedProducts} />
      </div>
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <ModalTransaction
        isOpen={isModalTransactionOpen}
        onClose={() => setIsModalTransactionOpen(false)}
      />
    </div>
  );
}
