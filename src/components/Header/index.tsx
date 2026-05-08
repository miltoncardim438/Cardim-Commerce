import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(CartContext);
  const { setIsOpen, cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const listItemStyles = "transition-colors duration-300 hover:text-gray-400"
  return (
    <header className="h-15 w-full sticky top-0 z-50 bg-gray-950 text-white border-b border-gray-800">
      <nav className="flex items-center justify-between h-full px-4 md:px-8">

        <h1 className="font-[Changa_One] text-xl min-w-fit">
          Cardim<span className="text-[#895FB5]">Commerce</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider gap-26">
          <li className={listItemStyles}><a href="/">Home</a></li>
          <li className={listItemStyles}><a href="#">Contact</a></li>
          <li className={listItemStyles}><a href="#">About</a></li>
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center bg-white rounded-md overflow-hidden gap-4">
            <input
              className="py-1 px-3 bg-white placeholder:text-gray-700 text-black outline-none rounded-md w-32 lg:w-48" 
              type="text"
              placeholder="Procurar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-[#895FB5] px-3 py-2 cursor-pointer hover:bg-[#6a4a8c] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-gray-400 hover:text-purple-500 transition-all cursor-pointer hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>

              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#1a1c22]">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.2 flex flex-col gap-1">
                <span className={`block w-6 h-1 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-1 bg-white`}></span>
                <span className={`block w-6 h-1 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 p-4 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-4 items-center font-medium">
            <li><a href="/">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li className="w-full">
              <input className="w-full p-2 rounded bg-white text-black" type="text" placeholder="Buscar produto..." />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header;