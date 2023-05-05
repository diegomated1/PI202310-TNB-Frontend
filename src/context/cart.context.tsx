import React, { Children, createContext, useContext } from 'react';
import useCart from '../hooks/useCart';
import ICart, { ICartProduct } from '../interfaces/ICart';


export const cartContext = React.createContext<
  {cart: ICartProduct[], addToCart: (id_product: string, quantity: number) => Promise<void>}|null
>(null);

export default function CartProvider({children}: {children: React.ReactNode}) {

  const [cart, addToCart] = useCart();

  return (
    <cartContext.Provider value={{cart, addToCart}}>
      {children}
    </cartContext.Provider>
  )
}


