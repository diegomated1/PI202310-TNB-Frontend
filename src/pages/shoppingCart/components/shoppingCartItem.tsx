import { useEffect, useState } from "react";
import Icons from "../../../components/Icons";
import ICard from "../../../interfaces/ICard";
import IProduct from "../../../interfaces/IProduct";
import cardApi from "../../../services/card.api";
import productsApi from "../../../services/products.api";

type shoppingCartItemProps = {
     _id: string;
     name?: string;
     description?: string;
     precio?: number;
     descuento?: number;
     onClick2?: () => void;
     onClick3?: () => void;
     onClick4?: () => void;
     onClick5?: () => void;
     
 }

export default function shoppingCartItem({ _id}: shoppingCartItemProps) {
    
    //const [image, setImage] = useState<File>();
    const [card, setCard] = useState<ICard>();
    const [product, setProduct] = useState<IProduct>();

    const handleGetCard = async ()=>{
        const _card = await cardApi.getById(_id);
        setCard(_card);
    };

    const eliminar = () => {
        console.log("Eliminando Prodcutos")
    }

    const handleGetProduct = async ()=>{
        const _product = await productsApi.getProductById(_id);
        setProduct(_product);
    }

    useEffect(()=>{
        handleGetCard();
        handleGetProduct();
    }, []);

    const [currentQuantity, setCurrentQuantity] = useState(1);
    

    return (
        <div className="container min-w-full border border-gray-400 rounded-md mb-3">
            <div className="flex w-[100%] bg-cardbackground mt-3 ml-1 rounded-md">
                <div className="max-w-[38%]">
                    <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"/*{(image ) ? URL.createObjectURL(image!) : `${import.meta.env.VITE_API_CARDS_URL}/images/cards/${_id}`} className="w-full h-full rounded" */alt="" />
                </div>
                <div className="grid grid-cols-2 w-full">
                    <div className="ml-2 ">
                        <div className="">
                            <h5 className="font-bold text-s">{card ? card.name: ''}</h5>
                            <h5 className="font-bold text-s">Nombre Carta</h5>
                        </div>
                        <div className="mt-1 font-bold text-s">
                            <span className="">Descripción</span>
                        </div>
                        <div className="mt-1 text-xs max-h-[45%]">
                            <a className="text-blue-700" href="#">ver más</a>
                        </div>
                        <div className="mt-1 text-xs">
                            <span>{card ? card.description : ''}</span>
                        </div>
                        <div className="mt-1 text-xs">
                            <span>{product ? product.descuento: ''}%</span>
                        </div>
                        <div className="mt-1 text-xs ">
                        <div className="flex items-center">
                            <button disabled={currentQuantity == 1} onClick={() => setCurrentQuantity(currentQuantity=>currentQuantity - 1)} className= " border border-gray-400 rounded-l p-1">-</button>
                            <span className="border border-gray-400 p-1">{currentQuantity}</span>
                            <button onClick={() => setCurrentQuantity(currentQuantity=>currentQuantity + 1)} className=" border border-gray-400 rounded-r p-1">+</button>
                        </div>
                        </div>
                    </div>

                    {/* botones */}
                    <div className="relative">
                        <div className="">
                            <div className="absolute top-0 right-0 flex items-center mr-2">
                                <button 
                                    className="  hover:bg-yellow-400 py-1 px-2 rounded mr-2"
                                    onClick={() => {eliminar()}}

                                    ><Icons.x /></button>
                                <button className=" hover:bg-yellow-400 py-1 px- 2 rounded"><Icons.favorites/></button>
                            </div>
                            <div className="absolute bottom-6 right-6 flex items-center ">
                                <span className="block">Precio</span>
                            </div>
                            <div  className="absolute bottom-0 right-5 flex items-center mt-4">
                                <span className="">{product ? product.precio : ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
