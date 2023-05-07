import { useEffect, useState } from "react";
import ICart, { ICartProduct } from "../interfaces/ICart";
import IShoppingCart from "../interfaces/ICart";
import useAuth from "./useAuth";
import cartApi from "../services/cart.api";


export default function useCart():[ICartProduct[], (id_product: string, quantity: number) => Promise<void>]{

    const [cart, setCart] = useState<ICartProduct[]>([]);
    const user = useAuth();

    useEffect(()=>{
        if(user){
            const handleGetCart = async ()=>{
                const cart = await cartApi.getCart(user.id_user);
                setCart(cart);
            }
            handleGetCart();
        }
    }, [user]);

    const addToCart = async (id_product:string, quantity:number) =>{
        if(user){
            await cartApi.setQuantityShoppingCart(user.id_user, id_product, quantity);
            setCart((cart)=>{
                const idx = cart.findIndex(p=>p.id_product==id_product);
                if(idx==-1){
                    return [...cart, {id_product, quantity}]
                }else{
                    cart[idx].quantity += quantity
                    return [...cart]
                }
            });
        }
    }

    return [cart, addToCart]
}

