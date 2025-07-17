import { Route, Routes } from "react-router-dom"
import { SideBar } from "./components/SideBar"

//Pages
import ProductsPage from "./pages/ProductsPage"
import TransactionsPage from "./pages/TransactionsPage"
// import TransactionsPage from "./pages/TransactionsPage"

function App() {

  return (
    <div className="flex">
      <SideBar />
      <main className="bg-blue-50 p-10 w-full">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/transicoes" element={<TransactionsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App