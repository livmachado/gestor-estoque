import { useState } from "react";

//icons
import { IoMdSearch } from "react-icons/io";


interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-end w-full my-4 gap-2">
      <input
        className={`right-10 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border border-blue-400 rounded-md px-3 py-1 text-sm shadow
          ${isOpen ? "opacity-100 w-64" : "opacity-0 w-0 overflow-hidden"}
        `}
        type="text"
        placeholder="Buscar produto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={() => setIsOpen(!isOpen)}>
        <IoMdSearch
          size={24}
          className=" text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
        />
      </button>
    </div>
  );
}
