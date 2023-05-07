import { useEffect, useState } from "react";
import Icons from "../../../components/Icons";
import { ICartProduct } from "../../../interfaces/ICart";
import useGetProduct from "../../../hooks/useGetProduct";

type shoppingCartItemProps = {
    product: ICartProduct
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>
}

export default function shoppingCartItem({product, setTotalPrice}: shoppingCartItemProps) {
    
    const [_product, card, hero] = useGetProduct(product.id_product);
    const [calc, setCalc] = useState(false);

    useEffect(()=>{
        if(_product && !calc){
            setTotalPrice((price)=>(price + (_product.price * product.quantity)));
            setCalc(true);
        }
    }, [_product]);

    const onRemove = ()=>{
        console.log(product.id_product);
    }

    const onAdd = ()=>{
        console.log(product.id_product);
    }

    const onDelete = ()=>{
        console.log(product.id_product);
    }
    

    return (
        <div className="container min-w-full border border-gray-400 rounded-md mb-3">
            <div className="flex w-[100%] bg-cardbackground mt-3 ml-1 rounded-md">
                <div className="max-w-[38%]">
                    <img src={`${import.meta.env.VITE_API_CARDS_URL}/images/${product.id_product}`} className="w-full h-full rounded"/>
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
                            <span>{_product?.discount}%</span>
                        </div>
                        <div className="mt-1 text-xs ">
                        <div className="flex items-center">
                            <button className= " border border-gray-400 rounded-l p-1">-</button>
                            <span className="border border-gray-400 p-1">{product.quantity}</span>
                            <button className=" border border-gray-400 rounded-r p-1">+</button>
                        </div>
                        </div>
                    </div>

                    {/* botones */}
                    <div className="relative">
                        <div className="">
                            <div className="absolute top-0 right-0 flex items-center mr-2">
                                <button 
                                    className="  hover:bg-yellow-400 py-1 px-2 rounded mr-2"
                                    ><Icons.x /></button>
                                <button className=" hover:bg-yellow-400 py-1 px- 2 rounded"><Icons.favorites/></button>
                            </div>
                            <div className="absolute bottom-6 right-6 flex items-center ">
                                <span className="block">Precio</span>
                            </div>
                            <div  className="absolute bottom-0 right-5 flex items-center mt-4">
                                <span className="">{_product ? _product.price * product.quantity : ''}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
