import React, { Children, createContext, useContext, useState } from 'react';
import useCart from '../hooks/useCart';
import ICart, { ICartProduct } from '../interfaces/ICart';


export const cartContext = React.createContext<
  {
    cart: ICartProduct[],
    addToCart: (id_product: string, quantity: number) => Promise<void>,
    isOpen: boolean,
    setIsOpen :React.Dispatch<React.SetStateAction<boolean>>
  }|null
>(null);

export default function CartProvider({children}: {children: React.ReactNode}) {

  const [cart, addToCart] = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <cartContext.Provider value={{cart, addToCart, isOpen, setIsOpen}}>
      {children}
    </cartContext.Provider>
  )
}


