import { useEffect, useState } from "react";
import Icons from "./Icons";

type CardProps = {
    _id?: string;
    name?: string;
    description?: string;
    id_hero?: string;
    card_type?: string;

    obtained?: string;
    price?: number;
    discount?: number;


    onClick1?: () => void;
    onClick2?: () => void;
    onClick3?: () => void;
}

export default function Card({ _id, name, description, id_hero, card_type, price, discount, obtained, onClick1, onClick2, onClick3 }: CardProps) {

    const [image, setImage] = useState<File>();

    let iconId_hero: string;

    //aca agregar una tabla de seleccion de tipo de heroe, despues hacer un get de ese tipo/nombre
    //busca el icono directamente con el nombre de la tabla :C

    switch (id_hero) {
        case ("a74lffy4cu5"): {
            iconId_hero = "armas"
            break
        }
        case ("a74lffy4zm8"): {
            iconId_hero = "tank"
            break
        }
        case ("a74lffy5xhm"): {
            iconId_hero = "fire"
            break
        }
        case ("a74lffy4cu5"): {
            iconId_hero = "frost"
            break
        }
        case ("a74lffy4zm8"): {
            iconId_hero = "veneno"
            break
        }
        case ("a74lffy5xhm"): {
            iconId_hero = "machete"
            break
        }
        default: {
            iconId_hero = "arma"
        }
    }

    return (
        <div className="justify-self-center h-full aspect-[4/5] bg-bg-card rounded-md overflow-hidden border-solid border-red-500 border-2">
            <figure className="relative h-[40%] w-full overflow-hidden shadow-md">
                <img className="object-cover " src={(image) ? URL.createObjectURL(image!) : `http://192.168.56.1:3000/images/cards/${_id}`} />
                <div className="absolute top-0 left-0">
                    {Icons[iconId_hero!]({})}
                </div>
                <div className="absolute top-0 right-0">
                    {/* aca deben poner las cosas que quieren que se carguen con el precio*/}
                    {price && <div className="flex text-white"><h1>{price}</h1><Icons.currency/>
                    </div>}
                </div>
                <div className="absolute top-[80%] left-0">
                    {Icons[card_type!]({})}
                </div>
                <div className="absolute top-[80%] right-0">
                    {/* aca deben poner las cosas que quieren que se carguen con el descuento*/}
                    {discount && <div className="flex text-white"><h1>{discount}</h1><Icons.discount/></div>}
                </div>
            </figure>
            <div className="h-[50%]  w-full pt-2 px-2">
                <div className="flex flex-col justify-evenly h-full bg-teal-900 px-2 rounded-md overflow-hidden border-2 border-red-500 shadow-xl text-lime-700">
                    <h1 className="font-bold text-xl border-b-2 border-red-500">{name}</h1>
                    <h1 className="text-sm font-semibold italic">{description}</h1>
                </div>
            </div>
            <div className="h-[10%] w-full flex justify-evenly items-center">
                {obtained && <div className="flex text-white"><Icons.wishlist/></div>}
                <Icons.armas/>
                <Icons.armas/>
                <Icons.armas/>
            </div>
        </div>
    )
}