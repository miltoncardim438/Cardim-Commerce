import { Outlet } from "react-router-dom"
import Header from "./Header"
import { CartSidebar } from "./CartSidebar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header />

      <main className="flex-grow container mx-auto px-4">
        <Outlet />
        <CartSidebar />
      </main>
    </div>
  )
}

export default Layout;