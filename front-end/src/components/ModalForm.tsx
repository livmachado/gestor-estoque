import { GoX } from "react-icons/go";


interface modalType {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalForm({ isOpen, onClose } : modalType) {
    if(isOpen){
        return (
          <div className="fixed inset-0 p-10 left-0 rounded-2xl flex items-center justify-center z-50">
            <form className="bg-blue-200 rounded-2xl p-6 w-full max-w-md shadow-lg space-y-5" action="">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-blue-700 cursor-pointer">
                        <GoX size={24} />
                    </button>
                </div>
                <label className="block font-medium mb-1 text-blue-600" htmlFor="">Nome do produto</label>
                <input className="w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100" type="text" placeholder="Produto" />
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block font-medium mb-1 text-blue-600"  htmlFor="">Quatidade</label>
                        <input type="number" placeholder="quantidade" className="w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"/>
                    </div>
                    <div className="w-1/2">
                        <label  className="block font-medium mb-1 text-blue-600" htmlFor="">Preço</label>
                        <input 
                            type="number" 
                            placeholder="preço" 
                            className="w-full border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
                        />
                    </div>
                </div>
                <label className="block font-medium mb-1 text-blue-600" htmlFor="">Descrição</label>
                <textarea
                    placeholder="Descrição do produto"
                    maxLength={50}
                    className="w-full border border-blue-400 rounded-md px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-100"
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                            Cadastrar
                    </button>
                </div>
            </form>
          </div>
        );
    }
}
