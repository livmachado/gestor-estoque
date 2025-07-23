import { Route, Routes } from "react-router-dom"
import { SideBar } from "./components/SideBar"

//Pages
import ProductsPage from "./pages/ProductsPage"
//import TransactionsPage from "./pages/TransactionsPage"
import DetailPage from "./pages/DetailPage"
// import TransactionsPage from "./pages/TransactionsPage"

function App() {

  return (
    <div className="flex">
      <SideBar />
      <main className="bg-blue-50 p-5 px-10 w-full">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/transacoes" element={<DetailPage />} />
          {/* <Route path="/transacoes" element={<TransactionsPage />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App