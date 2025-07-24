type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function PrimaryButton({
  onClick,
  children,
}: PrimaryButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className="cursor-pointer flex justify-end items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition duration-200"
      >
        {children}
      </button>
    </div>
  );
}
