import { useEffect, useState } from "react";

//Componentes
import PrimaryButton from "../components/PrimaryButton";
import Breadcrumb from "../components/Breadcrumb";
import ProductsTable from "../components/ProductsTable";
import ModalProduct from "../components/ModalProduct";
import SearchInput from "../components/SearchInput";
import PaginationTable from "../components/PaginationTable";
import { toast } from "react-toastify";

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

export default function ProductsPage() {
  const [isModalProductOpen, setIsModalProductOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      toast.error("Não foi possível encontrar produtos cadastrados.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //Fitro de produtos)
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
        <Breadcrumb
          items={[
            { label: "Estoque", href: "/" },
            ...(isModalProductOpen ? [{ label: "Novo Produto" }] : []),
          ]}
        />

        <PrimaryButton
          onClick={() => setIsModalProductOpen(!isModalProductOpen)}
          children="+ Criar Produto"
        />
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <SearchInput value={search} onChange={setSearch} />
      <div className="flex justify-center">
        <ProductsTable products={paginatedProducts} setProducts={setProducts} />
      </div>
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <ModalProduct
        isOpen={isModalProductOpen}
        onClose={() => setIsModalProductOpen(false)}
        onProductCreated={fetchProducts}
      />
    </div>
  );
}
