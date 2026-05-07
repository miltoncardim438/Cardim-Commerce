import { useContext } from "react"
import type { IProduct } from "../../../types/product"
import { CartContext } from "../../../context/CartContext"

export const BaseCard = ({ product }: { product: IProduct }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <section className="group bg-[#1a1c22] rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-gray-800">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <div className="p-4">
        <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-white font-semibold text-lg mt-1 truncate">
          {product.title}
        </h3>
        <p className="text-gray-400 text-sm mt-2 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </span>
          <button
            className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg transition-colors duration-300"
            onClick={() => addToCart(product)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>

        </div>
      </div>
    </section>
  )
}