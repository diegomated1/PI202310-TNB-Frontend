import { useContext, useEffect, useRef, useState } from "react";
import ICard from "../interfaces/ICard";
import IHero from "../interfaces/IHero";
import heroApi from "../services/hero.api";
import Icons from "./Icons";
import IProduct from "../interfaces/IProduct";
import { useNavigate } from "react-router-dom";
import inventoryApi from "../services/inventory.api";
import cartApi from "../services/cart.api";
import useAuth from "../hooks/useAuth";
import { cartContext } from "../context/cart.context";

type CardProps = {

    card?:ICard;
    product?: IProduct;  
}

export default function Card({card, product}: CardProps) {

    const user = useAuth();
    const navigate = useNavigate();
    const cardRef = useRef<HTMLDivElement>(null);
    const [hero, setHero] = useState<IHero>();
    const [heroname, setHeroname] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const cart = useContext(cartContext);

    useEffect(()=>{
        if(user){
            const handleGetIsFavorite = async () => {
                const m = await cartApi.checkWishListProduct(user.id_user, card?._id!);
                setIsFavorite(m);   
            }
            handleGetIsFavorite();
        }
        
    }, [user]);

    useEffect(()=>{
        if(cardRef.current){
            cardRef.current.style.width = `${cardRef.current.offsetHeight*(4/5)}px`;
        }
    }, [cardRef])

    useEffect(() => {
        if(card){
            const handleGetHero = async (id: string) => {
                var hero = await heroApi.getById(id)
                setHeroname(hero.name.toLocaleLowerCase().replace(' ', ''));
                setHero(hero)
            }
            handleGetHero(card.id_hero);
        }
    }, [card]);

    const handleAddWish = async ()=>{
        if(user){
            await cartApi.setProductWishlist(user.id_user, card?._id!);
            setIsFavorite(f=>!f);
        }
    }

    const handleAddToCart = async ()=>{
        if(user && cart){
            await cartApi.setQuantityShoppingCart(user.id_user, card?._id!, 1);
            cart.addToCart(card?._id!, 1);
            alert(`+1 ${card?.name} añadido al carrito`);
        }
    }

    return (
        <div ref={cardRef} className="h-full justify-self-center bg-bg-card rounded-md border-solid border-red-500 border-2 hover:scale-[106%]">
            <figure onClick={()=>{navigate(`/card/${card?._id}`)}}  className="relative h-[40%] w-full shadow-md">
                <img className="object-cover " src={`${(card) ? `${import.meta.env.VITE_API_CARDS_URL}/images/${card?._id}`:''}`} />
                <div className="absolute top-0 left-0">
                    { (card && card.card_type in Icons) ? Icons[card.card_type]({}) : ''}
                </div>
                <div className="absolute top-0 right-0">
                    {product ? product.price && <div className="flex text-white"><h1>{product?.price - ((product?.price * product?.discount)/ 100)}</h1><Icons.currency/></div> : ""}
                </div>
                <div className="absolute top-[80%] left-0">
                    {(heroname in Icons) ? Icons[heroname]({}) : ""}
                </div>
                <div className="absolute top-[80%] right-0">
                    {product ? product.discount && <div className="flex text-white"><h1>{product.discount}</h1><Icons.discount/></div> : ""}
                </div>
            </figure>
            <div className="h-[45%]  w-full pt-2 px-2">
                <div className="flex flex-col justify-evenly h-full bg-teal-900 px-2 rounded-md overflow-hidden border-2 border-red-500 shadow-xl text-lime-700">
                    <h1 className="font-bold text-xl border-b-2 border-red-500">{card?.name}</h1>
                    <h1 className="text-sm font-semibold italic">{card?.description}</h1>
                </div>
            </div>
            <div className="h-[15%] w-full flex justify-evenly items-center">
                {<div className="flex-1 flex text-white justify-evenly items-center">
                    {isFavorite ? 
                    <Icons.favorites onClick={handleAddWish} /> : 
                    <Icons.favoritesRed onClick={handleAddWish} /> 
                    }
                    <Icons.shoppingCart onClick={handleAddToCart}/>
                </div>}
            </div>
        </div>
    )
}   