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
            setCart((cart)=>[
                ...cart, {id_product, quantity}
            ]);
        }
    }

    return [cart, addToCart]
}

