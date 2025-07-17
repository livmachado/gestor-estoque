import ProductsTable from "../components/ProductsTable";
import ModalForm from "../components/ModalForm";

//icons
import { CiHome } from "react-icons/ci";
import { PiGreaterThanLight } from "react-icons/pi";
import { useState } from "react";

const productData= [
    {
        id: 1, 
        name: "Mate Caseiro",
        quantity: 10,
        date: "20/01/2015",
        price: "10.00",
        action: "Ação",
    }
]

export default function ProductsPage() {
    const [isModalFormOpen, setIsModalFormOpen] = useState<boolean>(false)
    return(
            <div>
                <div className="flex justify-between gap-2.5">
                    <div className="flex items-center justify-start gap-2.5">
                        <CiHome size={20} className=" text-gray-500" />
                        <PiGreaterThanLight size={16} className="text-gray-500" />
                        <span className=" text-gray-500 text-base font-medium ">Produtos</span>
                        <PiGreaterThanLight size={16} className="text-gray-500"/>
                    </div>
                    <button onClick={() => setIsModalFormOpen(!isModalFormOpen)} className="cursor-pointer flex justify-end items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition duration-200">
                        + Criar Produto 
                    </button>
                </div>
                <hr className="my-4 border-t border-gray-300" />
                <ProductsTable products={productData} />
                <ModalForm isOpen={isModalFormOpen} onClose={()=> setIsModalFormOpen(false)}/>
            </div>
    )
}