import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartSidebar = () => {
  const { cart, isOpen, setIsOpen, totalValue, clearCart } = useContext(CartContext);

  const handleFinishSale = () => {
    if (cart.length === 0) return;

    alert('Venda finalizada com sucesso!');
    clearCart();

    setIsOpen(false);
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`fixed right-0 top-0 h-full w-full max-w-[400px] bg-[#1a1c22] z-[70] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-white font-changa text-2xl uppercase">Seu Carrinho</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white font-bold text-xl">X</button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Carrinho vazio...</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-800 pb-4">
                <img src={item.image} className="w-20 h-20 object-cover rounded" alt={item.title} />
                <div className="flex-grow">
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-purple-400 text-sm">Qty: {item.quantity}</p>
                  <p className="text-white font-bold text-right">R$ {item.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gray-800 bg-[#16181d]">
          <div className="flex justify-between mb-4">
            <span className="text-gray-400">Total:</span>
            <span className="text-white text-xl font-bold">R$ {totalValue.toFixed(2).replace('.', ',')}</span>
          </div>
          <button
            onClick={handleFinishSale}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 transition-colors uppercase tracking-widest"
          >
            Finalizar Compra
          </button>
        </div>
      </aside>
    </>
  )
}