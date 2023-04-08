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
            iconId_hero = "armas"
        }
    }

    return (
        <div className="justify-self-center h-full aspect-[4/5] bg-bg-card rounded-md overflow-hidden border-solid border-red-500 border-2">
            <figure className="relative h-[40%] w-full overflow-hidden shadow-md">
                <img className="object-cover " src={(image) ? URL.createObjectURL(image!) : `${import.meta.env.VITE_API_CARDS_URL}/images/cards/${_id}`} />
                <div className="absolute top-0 left-0">
                    {Icons[iconId_hero!]({})}
                </div>
                <div className="absolute top-0 right-0">
                    {/* aca deben poner las cosas que quieren que se carguen con el precio*/}
                    {price && <div className="flex text-white"><h1>{price}</h1><Icons.currency />
                    </div>}
                </div>
                <div className="absolute top-[80%] left-0">
                    {/*Icons[card_type!]({})*/}
                </div>
                <div className="absolute top-[80%] right-0">
                    {/* aca deben poner las cosas que quieren que se carguen con el descuento*/}
                    {discount && <div className="flex text-white"><h1>{discount}</h1><Icons.discount /></div>}
                </div>
            </figure>

            {/* datos carta */}
            <div className="h-[50%]  w-full pt-2 px-2">
                <div className="flex flex-col justify-evenly h-full bg-teal-900 px-2 rounded-md overflow-hidden border-2 border-red-500 shadow-xl text-lime-700">
                    <h1 className="font-bold text-sm border-b-2 text-center border-red-500">{name}</h1>
                    <h1 className="text-xs font-semibold italic">{description}</h1>
                </div>
            </div>
            <div className="h-[10%] w-full flex justify-evenly items-center">
                {obtained && <div className="flex text-white"><Icons.wishlist /></div>}

                <button onClick={onClick1}>
                    <Icons.favorites />
                </button>

                <Icons.discount />
                <Icons.armas />
                <button onClick={onClick2}>
                    <Icons.shoppingCart />
                </button>
            </div>
        </div>
    )
}

    // export default function Card({ _id, name, description, id_hero, card_type, onClick2, onClick3 }: CardProps) {
    //     const [image, setImage] = useState<File>();

    //     let iconId_hero: string;

    //     //aca agregar una tabla de seleccion de tipo de heroe, despues hacer un get de ese tipo/nombre
    //     //busca el icono directamente con el nombre de la tabla :C

    //     switch (id_hero) {
    //         case ("a74lffy4cu5"): {
    //             iconId_hero = "armas"
    //             break
    //         }
    //         case ("a74lffy4zm8"): {
    //             iconId_hero = "tank"
    //             break
    //         }
    //         case ("a74lffy5xhm"): {
    //             iconId_hero = "fire"
    //             break
    //         }
    //         case ("a74lffy4cu5"): {
    //             iconId_hero = "frost"
    //             break
    //         }
    //         case ("a74lffy4zm8"): {
    //             iconId_hero = "veneno"
    //             break
    //         }
    //         case ("a74lffy5xhm"): {
    //             iconId_hero = "machete"
    //             break
    //         }
    //         default: {
    //             iconId_hero = "armas"
    //         }
    //     }
//     return (
//         <div className="w-full h-full rounded bg-slate-400">
//             <div className="h-[35%]  w-full">
//                 {/* nombre dentro de la imagen */}
//                 <div className="relative ">
//                     {/* <img className="object-cover " src={(image) ? URL.createObjectURL(image!) : `${import.meta.env.VITE_API_CARDS_URL}/images/cards/${_id}`} /> */}
//                     <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MUq3awEA1KEnMlL9U-C_JwHaEK%26pid%3DApi&f=1&ipt=b64ce7b8fd13508ca19f449c37c528d0533744a65960b4d4ff6e0f20ca61e97e&ipo=images" className="w-full h-full rounded" alt="" />
//                     <div className="absolute inset-0 flex items-center justify-center mt-[39%]">
//                         <span className="text-white text-xs font-bold h-[5%]">{name}</span>
//                     </div>
//                 </div>

//                 <div className="w-[100%]  text-xs">
//                     <span className="flex-none w-[100%] max-h-[30%] ml-1">{description}</span>
//                 </div>
//                 <div className="text-xs  w-100 flex mt-2">
//                     <div className="w-[70%]">
//                         <a className=" ml-1 w-[50%] text-blue-700" href="#">ver más</a>
//                     </div>
//                     <div className="flex-none">
//                          {/* aca poner las cosas que quieren que se carguen con el precio*/}
//                         <a className="" id="precio">{price}</a>
//                     </div>

//                 </div>
//                 {/* botones */}
//                 <div className="flex mt-4">
//                     <div className="flex-none w-[25%] ml-1">
//                         <button className="py-1 px-2 rounded mr-2">
//                             <Icons.check/>
//                         </button>
//                     </div>
//                     <div className="flex-none w-[25%] ml-1">
//                         <button className="hover:bg-red-700 py-1 px-2 rounded mr-2">
//                             <Icons.discount/>
//                         </button>
//                     </div>

//                     <div className="flex-none w-[25%]">
//                         <button className="hover:bg-yellow-400 py-1 px-2 rounded mr-2">
//                             <Icons.favorites/>
//                         </button>
//                     </div>

//                     <div className="flex-none w-[25%]">
//                         <button id="buttoncarrito" className="hover:bg-yellow-400 py-1 px-2 rounded mr-2">
//                             <Icons.shoppingCart/>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }