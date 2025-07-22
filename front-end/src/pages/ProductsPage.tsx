import { useState } from "react";

//Componentes
import PrimaryButton from "../components/PrimaryButton";
import Breadcrumb from "../components/Breadcrumb";
import ProductsTable from "../components/ProductsTable";
import ModalProduct from "../components/ModalProduct";

const productData = [
  {
    id: 1,
    name: "Mate Caseiro",
    quantity: 10,
    date: "20/01/2015",
    price: "10.00",
    action: "Ação",
  },
];

export default function ProductsPage() {
  const [isModalProductOpen, setIsModalProductOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex justify-between gap-2.5">
        <Breadcrumb value="Estoque Atual " />
        <PrimaryButton
          onClick={() => setIsModalProductOpen(!isModalProductOpen)}
          children="+ Criar Produto"
        />
      </div>
      <ProductsTable products={productData} />
      <ModalProduct
        isOpen={isModalProductOpen}
        onClose={() => setIsModalProductOpen(false)}
      />
    </div>
  );
}
