import { useEffect, useState } from "react";
import ICard from "../interfaces/ICard";
import IHero from "../interfaces/IHero";
import heroApi from "../services/hero.api";
import Icons from "./Icons";
import IProduct from "../interfaces/IProduct";

type CardProps = {

    card?:ICard;
    product?: IProduct;  

    onClick1?: () => void;
    onClick2?: () => void;
    onClick3?: () => void;
}

export default function Card({card, product, onClick1, onClick2, onClick3 }: CardProps) {

    const [hero, setHero] = useState<IHero>();
    const [heroname, setHeroname] = useState('');

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

    return (
        <div className="justify-self-center h-full aspect-[4/5] bg-bg-card rounded-md border-solid border-red-500 border-2 hover:scale-[106%]">
            <figure className="relative h-[40%] w-full shadow-md">
                <img className="object-cover " src={`${import.meta.env.VITE_API_CARDS_URL}/images/${card?._id}`} />
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
                {product ? product.availability && <div className="flex text-white"><Icons.wishlist/></div> : ""}
            </div>
        </div>
    )
}   