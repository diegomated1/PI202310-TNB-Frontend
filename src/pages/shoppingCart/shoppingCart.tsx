import React, { useContext, useState } from "react"
import Card from "../../components/Card"
import AdminCardsNavBar from "../../components/NavBar"
import { ADDRCONFIG } from "dns"
import ShoppingCartItem from "./components/shoppingCartItem"
import { cartContext } from "../../context/cart.context"

export default function shoppingCart() {

    const [totalPrice, setTotalPrice] = useState(0);

    const cart = useContext(cartContext);

    return (
        <div className="w-screen h-screen">
            <AdminCardsNavBar />
            <div className="grid grid-cols-2 w-full gap-4 mt-2 ml-10 ">
                <div className="">
                {(cart) ? (
                        cart.cart.map((product, i)=>(
                            <li key={i}>
                                <ShoppingCartItem 
                                    product={product}
                                    setTotalPrice={setTotalPrice}
                                />
                            </li>
                        ))
                    ) : ''}
                </div>
                <div className="mt-2 justify-center mr-1 w-[80%] ml-4 fixed-">
                    <span className="ml-[40%] font-bold text-M" >Resumen del pedido</span>
                    <div className="">
                        <div className="min-w-full ml-2 mb-2 flex">
                            <div className="w-[80%] ">
                                <span>#productos</span>
                            </div>
                            <div className="flex-none">
                                <span>$10.000</span>
                            </div>
                        </div>
                        <div className="min-w-full ml-2 flex">
                            <div className="w-[80%]">
                                <span>Precio original</span>
                            </div>
                            <div className="flex-none">
                                <span>$10.000</span>
                            </div>
                        </div>
                        <div className="min-w-full ml-2 flex text-gray-500">
                            <div className="w-[80%] ">
                                <span>Descuentos</span>
                            </div>
                            <div className="flex-none">
                                <span>$10.000</span>
                            </div>
                        </div>
                        <div className="x-[5px]">
                            <hr className="border-x-black" />
                        </div>
                        <div className="min-w-full ml-2 flex ">
                            <div className="w-[80%] ">
                                <span>Total</span>
                            </div>
                            <div className="flex-none">
                                <span>$ {totalPrice}</span>
                            </div>
                        </div>
                        <div className="x-[5px]">
                            <hr className="border-x-black" />
                        </div>
                        <div className="text-center w-full">
                                Métodos de pago aceptados.
                            </div>
                        <div className="flex w-full">
                            
                            <br/>
                            <div className="flex-none w-[33,3%]">
                            </div>
                            <div className="flex-none w-[33,3%]">
                                
                            </div>
                            <div className="flex-none w-[33,3%]">
                            
                            </div>
                            <div className="flex-none w-[33,3%]">
                                
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )

}