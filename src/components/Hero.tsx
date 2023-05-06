import { useEffect, useRef, useState } from "react";
import Icons from "./Icons";
import IProduct from "../interfaces/IProduct";
import IHero from "../interfaces/IHero";

type HeroProps = {

    hero?: IHero;
    product?: IProduct;

    onClick1?: () => void;
    onClick2?: () => void;
    onClick3?: () => void;
}

export default function Hero({ hero, product, onClick1, onClick2, onClick3 }: HeroProps) {
    
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(cardRef.current){
            cardRef.current.style.width = `${cardRef.current.offsetHeight*(4/5)}px`;
        }
    }, [cardRef])

    return (
        <div ref={cardRef} className="h-full justify-self-center bg-bg-card rounded-md border-solid border-red-500 border-2 hover:scale-[106%]">
            <figure className="relative h-[40%] w-full shadow-md">
                <img className="object-scale-down max-h-full" src={`${import.meta.env.VITE_API_CARDS_URL}/images/${hero?._id}`} />
                <div className="absolute top-0 right-0">
                    {product?.price && <div className="flex text-white"><h1>{product?.price}</h1><Icons.currency /></div>}
                </div>
                <div className="absolute top-[80%] left-0">
                    {(hero && hero?.name && hero?.name in Icons) ? Icons[hero?.name]({}) : ""}
                </div>
                <div className="absolute top-[80%] right-0">
                    {product?.discount && <div className="flex text-white"><h1>{product?.discount}</h1><Icons.discount /></div>}
                </div>
            </figure>
            <div className="h-[45%]  w-full pt-2 px-2">
                <div className="flex flex-col justify-evenly h-full bg-teal-900 px-2 rounded-md overflow-hidden border-2 border-red-500 shadow-xl text-lime-700">
                    <h1 className="font-bold text-xl border-b-2 border-red-500">{hero?.name}</h1>
                    <div className="flex justify-center">
                        <Icons.favoritesRed></Icons.favoritesRed>
                        <h1 className="font-bold text-base">{hero?.life}</h1>
                    </div>
                    <div className="flex justify-evenly">
                        <div className="flex-col">
                            <div className="flex">
                                <Icons.shield></Icons.shield>
                                <h1 className="font-bold text-xl">{hero?.def}</h1>
                            </div>
                            <div className="flex">
                                <Icons.basicAttack></Icons.basicAttack>
                                <h1 className="font-bold text-xl">{hero?.atq.base}</h1>
                            </div>
                        </div>
                        <div className="flex-col">
                            <div className="flex">
                                <Icons.ramdomAttack></Icons.ramdomAttack>
                                <Icons.basicAttack></Icons.basicAttack>
                                <h1 className="font-bold text-xl">{hero?.atq.base!+hero?.atq.range!}</h1>
                            </div>
                            <div className="flex">
                                <Icons.ramdomAttack></Icons.ramdomAttack>
                                <Icons.ramdomDamage></Icons.ramdomDamage>
                                <h1 className="font-bold text-xl">{hero?.dmg.base!+hero?.dmg.range!}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[15%] w-full flex justify-evenly items-center">
                {product?.availability && <div className="flex text-white"><Icons.wishlist /></div>}

            </div>
        </div>
    )
}
