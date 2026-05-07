import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { IProduct } from "../types/product";

interface CartItem extends IProduct {
  quantity: number;
}

interface CartContextData {
  cart: CartItem[];
  addToCart: (product: IProduct) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  totalValue: number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: IProduct) => {
    setCart((prev) => {
      const isItemInCart = prev.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const totalValue = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      isOpen, 
      setIsOpen, 
      totalValue,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}