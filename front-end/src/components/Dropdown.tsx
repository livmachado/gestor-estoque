type DropdownProps = {
  options: {
    label: string;
    onClick?: (e?: React.MouseEvent) => void;
    colorRed?: "y" | "n";
  }[];
};

export default function Dropdown({ options }: DropdownProps) {
  return (
    <div className="flex flex-col">
      {options.map((option, index) => (
        <button
          key={index}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${
            option.colorRed === "y" ? "text-red-600" : "text-gray-700"
          }`}
          onClick={(e) => option.onClick && option.onClick(e)}
          >
        
          {option.label}
        </button>
      ))}
    </div>
  );
}
