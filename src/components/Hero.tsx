import { useEffect, useState } from "react";
import IHeroe from "../interfaces/IHeroe";
import heroeApi from "../services/heroe.api";
import Icons from "./Icons";
import IProduct from "../interfaces/IProduct";

type HeroProps = {

    heroe: IHeroe;
    product: IProduct;

    onClick1?: () => void;
    onClick2?: () => void;
    onClick3?: () => void;
}

export default function Card({ heroe, product, onClick1, onClick2, onClick3 }: HeroProps) {

    const [image, setImage] = useState<File>();

    return (
        <div className="justify-self-center h-full aspect-[4/5] bg-bg-card rounded-md border-solid border-red-500 border-2 hover:scale-[106%]">
            <figure className="relative h-[40%] w-full shadow-md">
                <img className="object-cover " src={(image) ? URL.createObjectURL(image!) : `${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${heroe._id}`} />
                <div className="absolute top-0 right-0">
                    {product.price && <div className="flex text-white"><h1>{product.price}</h1><Icons.currency /></div>}
                </div>
                <div className="absolute top-[80%] left-0">
                    {(heroe && heroe.name && heroe.name in Icons) ? Icons[heroe.name]({}) : ""}
                </div>
                <div className="absolute top-[80%] right-0">
                    {product.discount && <div className="flex text-white"><h1>{product.discount}</h1><Icons.discount /></div>}
                </div>
            </figure>
            <div className="h-[45%]  w-full pt-2 px-2">
                <div className="flex flex-col justify-evenly h-full bg-teal-900 px-2 rounded-md overflow-hidden border-2 border-red-500 shadow-xl text-lime-700">
                    <h1 className="font-bold text-xl border-b-2 border-red-500">{heroe.name}</h1>
                    <div className="flex justify-center">
                        <Icons.favoritesRed></Icons.favoritesRed>
                        <h1 className="font-bold text-xl">{heroe.health}</h1>
                    </div>
                    <div className="flex justify-evenly">
                        <div className="flex-col">
                            <div className="flex">
                                <Icons.shield></Icons.shield>
                                <h1 className="font-bold text-xl">{heroe.defense}</h1>
                            </div>
                            <div className="flex">
                                <Icons.basicAttack></Icons.basicAttack>
                                <h1 className="font-bold text-xl">{heroe.attack_basic}</h1>
                            </div>
                        </div>
                        <div className="flex-col">
                            <div className="flex">
                                <Icons.ramdomAttack></Icons.ramdomAttack>
                                <Icons.basicAttack></Icons.basicAttack>
                                <h1 className="font-bold text-xl">{heroe.attack_range}</h1>
                            </div>
                            <div className="flex">
                                <Icons.ramdomAttack></Icons.ramdomAttack>
                                <Icons.ramdomDamage></Icons.ramdomDamage>
                                <h1 className="font-bold text-xl">{heroe.damage_range}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[15%] w-full flex justify-evenly items-center">
                {product.availability && <div className="flex text-white"><Icons.wishlist /></div>}

            </div>
        </div>
    )
}
