import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import Input from "../../../../components/Input";
import cardApi from "../../../../services/card.api";
import IInventory from "../../../../interfaces/IInventory";
import inventoryApi from "../../../../services/inventory.api";
import productsApi from "../../../../services/products.api";
import ICard from "../../../../interfaces/ICard";
import IHero from "../../../game/interfaces/IHero";
import heroeApi from "../../../../services/hero.api";
import IHeroe from "../../../../interfaces/IHero";
import Buttons from "../../../../components/Button";
import IProduct from "../../../../interfaces/IProduct";

interface ModalCards{
    id_user?: string
    /**
     * Variable for check if the modal is open or close
     */
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    isOpen: boolean,
    /**
     * Function for change to close or open
     */
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    /**
     * Function that is executed when close modal  
     */
    onClose?: ()=>void,
}

export default function ModalProducts({id_user, setProducts, isOpen, setIsOpen, onClose}:ModalCards){

    const [_products, _setProducts] = useState<IProduct[]>([]);

    const handleClose = ()=>{
        setIsOpen(false);
        if(onClose) onClose();
    }

    useEffect(()=>{
        if(id_user){
            const handleGetProducts = async ()=>{
                const products = await productsApi.getProducts();
                _setProducts(products);
            }
            handleGetProducts();
        }
    }, [id_user]);

    return (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 ${isOpen ? '' : 'hidden'}`}
        >
            <div className="w-[700px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 flex flex-col">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 w-8 h-8 border border-gray-200 bg-gray-300 hover:bg-gray-200 flex justify-center items-center">
                    <Icons.x/>
                </button>
                <div><span className="text-xl"><strong>Seleccione la carta que quiere subastar</strong></span></div>
                <div>
                    <span className="text-gray-500 text-sm" >
                        {`${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`}
                    </span>
                </div>
                <div className="w-full max-h-[500px] overflow-y-auto">
                    {_products.map((product, i)=>(
                        <Product 
                            key={i}
                            product={product}
                            setProducts={setProducts}
                            setIsOpen={setIsOpen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface IProductProps{
    product: IProduct
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Product({product, setProducts, setIsOpen}:IProductProps){

    const [card, setCard] = useState<ICard>();
    const [hero, setHero] = useState<IHeroe>();

    useEffect(()=>{
        const handleGetProduct = async()=>{
            if(product.type=='card'){
                const card = await cardApi.getById(product.id_product!);
                setCard(card);
            }else{
                const hero = await heroeApi.getById(product.id_product!);
                setHero(hero);
            }
        }
        handleGetProduct();
    }, []);

    const handleAddProduct = ()=>{
        setProducts(products=>[...products, product]);
        setIsOpen(false);
    }

    return(
        <div className="w-full h-36 bg-red-100 p-2">
            <div className="w-full h-full bg-green-200 flex">
                <div className="w-36 h-full relative">
                    {(card) ? (
                        <img className="w-full h-full object-contain" src={`${import.meta.env.VITE_API_CARDS_URL}/images/cards/${product.id_product}`} />
                    ) : (
                        (hero) ? (
                            <img className="w-full h-full object-contain" src={`${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${product.id_product}`} />
                        ) : ''
                    )}
                </div>
                <div className="flex-1 flex">
                    <div className="flex-[2] flex flex-col">
                        <div className="flex-1 flex justify-center items-center">
                            <span className="text-xl font-bold">
                                {card ? card.name : hero ? hero.name : ''}
                            </span>
                        </div> 
                        <div className="flex-1 flex justify-center items-center">
                            <span className="">
                                {card ? card.description : hero ? hero.description : ''}
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-24 h-10">
                            <Buttons.buttonYellow onClick={handleAddProduct}>
                                añadir
                            </Buttons.buttonYellow>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
