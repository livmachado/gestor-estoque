type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageRange?: number;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  pageRange= 4,
}: Props) {


  const startPage= Math.max(1, currentPage - pageRange)
  const endPage= Math.min(totalPages, currentPage + pageRange)

  const pages= [];
  for (let i=startPage; i <=endPage; i++){
    pages.push(i)
  }
  return (
    <div className="flex justify-center items-center gap-1 mt-4  text-blue-500">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 disabled:opacity-40"
      >
        &lt;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
            page === currentPage
              ? "bg-blue-600 text-white"
              : "text-gray-800 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 disabled:opacity-40"
      >
        &gt;
      </button>
    </div>
  );
}
