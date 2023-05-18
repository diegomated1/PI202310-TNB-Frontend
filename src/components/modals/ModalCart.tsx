import { useContext, useEffect, useState } from "react";
import cardApi from "../../services/card.api";
import Button from "../Button";
import Icons from "../Icons";
import Input from "../Input";
import ICart, { ICartProduct } from "../../interfaces/ICart";
import { cartContext } from "../../context/cart.context";
import IProduct from "../../interfaces/IProduct";
import useGetProduct from "../../hooks/useGetProduct";
import Buttons from "../Button";

interface ModalReports{
    /**
     * Function that is executed when accepted  
     */
    onAccept?: ()=>void,
    /**
     * Function that is executed when close modal  
     */
    onClose?: ()=>void,
}

export default function ModalCart({onClose}:ModalReports){

    const [totalPrice, setTotalPrice] = useState(0);

    const cart = useContext(cartContext);

    const handleClose = ()=>{
        cart?.setIsOpen(false);
        if(onClose) onClose();
    }

    return (
        <div className={`absolute top-20 right-3 w-[400px] h-[500px] bg-white rounded-lg shadow-lg p-4 flex flex-col ${cart?.isOpen ? '' : 'hidden'}`}>
            <button onClick={handleClose}
                className="absolute top-1 right-1 w-8 h-8 border border-gray-200 bg-gray-300 hover:bg-gray-200 flex justify-center items-center">
                <Icons.x/>
            </button>
            <div><span className="text-xl"><strong>Carrito de compras</strong></span></div>
            <div className="flex-1 p-2 overflow-y-auto">
                <ul>
                    {(cart) ? (
                        cart.cart.map((product, i)=>(
                            <li key={i}>
                                <ModalCartProduct 
                                    product={product}
                                    setTotalPrice={setTotalPrice}
                                    setQuantity={cart.addToCart}
                                />
                            </li>
                        ))
                    ) : ''}
                </ul>
            </div>
            <div className="h-20 bg-blue-100 flex">
                <span>Total: {totalPrice}</span>
            </div>        
        </div>
    );
}

interface IModalCartProduct{
    product: ICartProduct
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>
    setQuantity: (id_product: string, quantity: number) => Promise<void>
}

function ModalCartProduct({product, setTotalPrice, setQuantity}:IModalCartProduct){

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
        setQuantity(product.id_product, 1);
    }

    const onDelete = ()=>{
        setQuantity(product.id_product, -1);
    }

    return(
        <div className="flex h-24 mb-4 border border-black p-2 rounded-md">
            <div className="flex flex-1">
                <div className="h-full aspect-square flex justify-center items-center">
                    <img src={`${import.meta.env.VITE_API_CARDS_URL}/images/${product.id_product}`} alt="" />
                </div>
                <div className="flex-[2] flex flex-col">
                    <div className="flex-1 flex justify-center items-center">{card?card.name:hero?.name}</div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-10 h-10">
                            <Buttons.buttonYellow onClick={onDelete}>
                                -
                            </Buttons.buttonYellow>
                        </div>  
                        <span className="mx-2">{product.quantity}</span>
                        <div className="w-10 h-10">
                            <Buttons.buttonYellow onClick={onAdd}>
                                +
                            </Buttons.buttonYellow>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center flex-col">
                    <div className="w-20 h-8">
                        <Buttons.buttonRed>
                            <span className="text-sm">Eliminar</span>
                        </Buttons.buttonRed>
                    </div>
                    <div>
                        $ {(_product)?(_product?.price * product.quantity):''}
                    </div>
                </div>
            </div>
        </div>
    )
}

