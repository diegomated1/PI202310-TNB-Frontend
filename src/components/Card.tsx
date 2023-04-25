import { useEffect, useState } from "react";
import ICard from "../interfaces/ICard";
import IHeroe from "../interfaces/IHeroe";
import heroeApi from "../services/heroe.api";
import Icons from "./Icons";

type CardProps = {

    card:ICard;

    obtained?: string;
    price?: number;
    discount?: number;

    onClick1?: () => void;
    onClick2?: () => void;
    onClick3?: () => void;
}

export default function Card({card, price, discount, obtained, onClick1, onClick2, onClick3 }: CardProps) {

    const [image, setImage] = useState<File>();
    const [heroe, setHeroe] = useState<IHeroe>();

    const handlerGetHeroes = async (id: string) => {
        var data = await heroeApi.getById(id)
        console.log(data)
        setHeroe(data)
    }

    useEffect(() => {
        handlerGetHeroes(card.id_hero);
    }, []);

    return (
        <div className="justify-self-center h-full aspect-[4/5] bg-bg-card rounded-md border-solid border-red-500 border-2 hover:scale-[106%]">
            <figure className="relative h-[40%] w-full shadow-md">
                <img className="object-cover " src={(image) ? URL.createObjectURL(image!) : `${import.meta.env.VITE_API_CARDS_URL}/images/cards/${card._id}`} />
                <div className="absolute top-0 left-0">
                    {Icons[card.card_type!]({})}
                </div>
                <div className="absolute top-0 right-0">
                    {price && <div className="flex text-white"><h1>{price}</h1><Icons.currency/></div>}
                </div>
                <div className="absolute top-[80%] left-0">
                    {(heroe && heroe.name && heroe.name in Icons) ? Icons[heroe.name]({}) : ""}
                </div>
                <div className="absolute top-[80%] right-0">
                    {discount && <div className="flex text-white"><h1>{discount}</h1><Icons.discount/></div>}
                </div>
            </figure>
            <div className="h-[45%]  w-full pt-2 px-2">
                <div className="flex flex-col justify-evenly h-full bg-teal-900 px-2 rounded-md overflow-hidden border-2 border-red-500 shadow-xl text-lime-700">
                    <h1 className="font-bold text-xl border-b-2 border-red-500">{card.name}</h1>
                    <h1 className="text-sm font-semibold italic">{card.description}</h1>
                </div>
            </div>
            <div className="h-[15%] w-full flex justify-evenly items-center">
                {obtained && <div className="flex text-white"><Icons.wishlist/></div>}
            </div>
        </div>
    )
}   