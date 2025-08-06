import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Pages
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";
import TransactionsPage from "./pages/TransactionsPage";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <main className="bg-blue-50 p-2.5 px-10 w-full">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/produtos/:id" element={<DetailPage />} />
          <Route path="/transacoes" element={<TransactionsPage />} />
          <Route path="/relatorio" element={<ReportPage />} />
        </Routes>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
