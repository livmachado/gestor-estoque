import Breadcrumb from "../components/Breadcrumb";
import TransactionsTable from "../components/TransactionsTable";

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
      </div>
      <div className="ml-24 my-10 p-3 w-6xl bg-blue-100 rounded-md">
        {product.map((prod) => (
            <div className="w-full grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div className="">
                    <div className="grid grid-cols-2 gap-x-2">
                        <span>ID do Produto:</span>
                        <span>{prod.id}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2">
                        <span>Nome:</span>
                        <div>{prod.name}</div>

                    </div>
                    <div className="grid grid-cols-2 gap-x-2">
                        <span>Detalhe:</span>
                        <div>{prod.detail}</div>
                    </div>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 gap-x-2">
                        <span>Preço:</span>
                        <span>{prod.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2">
                        <span>Quantidade:</span>
                        <span>{prod.quantity}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2">
                        <span>Data de criação:</span>
                        <span>{prod.date}</span>
                    </div>
                </div>
            </div>

          ))}
        <span className="w-full text-xl text-blue-700">
          Transações do produto
        </span>
        <TransactionsTable transactions={transactionData} />
      </div>
    </div>
  );
}
