import { useState } from "react";

//Componentes
import PrimaryButton from "../components/PrimaryButton";
import Breadcrumb from "../components/Breadcrumb";
import ProductsTable from "../components/ProductsTable";
import ModalProduct from "../components/ModalProduct";
import SearchInput from "../components/SearchInput";

const productData = [
  {
    id: 1,
    name: "Mate Caseiro",
    quantity: 10,
    date: "20/01/2015",
    price: "10.00",
    action: "Ação",
  },
  {
    id: 3,
    name: "Água Mineral",
    quantity: 10,
    date: "20/01/2015",
    price: "5.00",
    action: "Ação",
  },
];

export default function ProductsPage() {
  const [isModalProductOpen, setIsModalProductOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const filteredProducts = productData.filter((product) => {
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
        <ProductsTable products={filteredProducts} />
      </div>
      <ModalProduct
        isOpen={isModalProductOpen}
        onClose={() => setIsModalProductOpen(false)}
      />
    </div>
  );
}
