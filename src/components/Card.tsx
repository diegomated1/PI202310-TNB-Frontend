import { useEffect, useState } from "react";
import Icons from "./Icons";

type CardProps = {
    _id?: string;
    name?: string;
    description?: string;
    id_hero?: string;
    card_type?: number;

    obtained?: string;
    price?: number;
    discount?: number;

    details?:() => void;
    favorites?: () => void;
    shopingCart?: () => void;
    pick?: () => void;
    offert?: () => void;
    auction?: () => void;
}

export default function Card({ _id, name, description, id_hero, card_type, price, discount, obtained}: CardProps) {

    //aca se llama la api para cargar la imagen

    /*const [imageUrl, setImageUrl] = useState<string>('');

    const url = `http://192.168.1.8:3000/images/cards/${_id}`

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => setImageUrl(data.url))
          .catch(error => console.error(error));
      }, []);*/
      
      const [image, setImage] = useState<File>();
      

    //aca se cambia el card_type, por un string para cargar un icono

    let iconCard_type: string;

    switch(card_type){
        case(1):{
            iconCard_type = "arma"
        }
        case(2):{
            iconCard_type = "armadura"
        }
        case(3):{
            iconCard_type = "epica"
        }
        case(4):{
            iconCard_type = "item"
        }
        default:{
            iconCard_type = "arma"
        }
    }

    //aca se cambia el id_hero, por un string para cargar un icono

    let iconId_hero: string;

    switch(id_hero){
        case("A"):{
            iconId_hero = "armas"
        }
        case("B"):{
            iconId_hero = "tank"
        }
        case("C"):{
            iconId_hero = "fire"
        }
        case("D"):{
            iconId_hero = "frost"
        }
        case("E"):{
            iconId_hero = "veneno"
        }
        case("F"):{
            iconId_hero = "machete"
        }
        default:{
            iconId_hero = "arma"
        }
    }


    return (
        <div className="justify-self-center h-full aspect-[4/5] bg-bg-card rounded-md overflow-hidden border-solid border-red-500 border-2">
            <figure className="relative h-[40%] w-full overflow-hidden shadow-md">
                <img className="object-cover " src={(image) ? URL.createObjectURL(image!) : `http://localhost:3000/images/cards/${_id}`} alt="aqui va una imagen" />
                <div className="absolute top-0 left-0">
                    <Icons icon={iconCard_type}></Icons>
                </div>
                <div className="absolute top-0 right-0">
                    {price && <Icons icon={iconId_hero} />}
                </div>
                <div className="absolute top-[80%] left-0">
                    <Icons icon="armas"></Icons>
                </div>
                <div className="absolute top-[80%] right-0">
                    <Icons icon="armas"></Icons>
                </div>
            </figure>
            <div className="h-[50%]  w-full pt-2 px-2">
                <div className="flex flex-col justify-evenly h-full bg-teal-900 px-2 rounded-md overflow-hidden border-2 border-red-500 shadow-xl text-lime-700">
                    <h1 className="font-bold text-xl border-b-2 border-red-500">{name}</h1>
                    <h1 className="text-sm font-semibold italic">{description}</h1>
                    <h1 className="text-base font-extrabold">Si el ataque del oponente es menor que la defensa del guerrero. El oponente recibe +1 de daño</h1>
                </div>
            </div>
            <div className="h-[10%] w-full flex justify-evenly items-center">
                {price && <Icons icon={"precio"} />}
                <Icons icon="armas"></Icons>
                <Icons icon="armas"></Icons>
                <Icons icon="armas"></Icons>
            </div>
        </div>
    )
}