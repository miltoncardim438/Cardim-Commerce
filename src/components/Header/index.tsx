import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { setIsOpen, cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const listItemStyles = "transition-colors duration-300 hover:text-gray-400"
  return (
    <header className="h-15 w-screen">
      <nav className="flex items-center justify-between h-full px-8 bg-gray-950 text-white">
        <div>
          <h1 className="font-[Changa_One] text-xl">Cardim<span className="text-[#895FB5]">Commerce</span></h1>
        </div>
        <div className="flex items-center gap-20">
          <ul className="flex gap-26">
            <li className={listItemStyles}><a href="/">Home</a></li>
            <li className={listItemStyles}><a href="#">Contact</a></li>
            <li className={listItemStyles}><a href="#">About</a></li>
          </ul>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <input className="py-1.5 pl-2 bg-white placeholder:text-gray-700 text-black rounded-md" type="text" placeholder="Procurar Produto..." />
              <button className="bg-[#895FB5] text-white py-1.5 px-4 rounded-md hover:bg-[#6a4a8c] cursor-pointer transition-colors duration-300">Buscar</button>
            </div>

            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-gray-400 hover:text-purple-500 transition-all cursor-pointer hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>

                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#1a1c22]">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header;