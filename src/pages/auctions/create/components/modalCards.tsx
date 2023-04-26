import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import Input from "../../../../components/Input";
import cardApi from "../../../../services/card.api";
import IInventory from "../../../../interfaces/IInventory";
import inventoryApi from "../../../../services/inventory.api";

interface ModalCards{
    id_user?: string
    /**
     * Variable for check if the modal is open or close
     */
    isOpen: boolean,
    /**
     * Function for change to close or open
     */
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    /**
     * Function that is executed when accepted  
     */
    onAccept?: ()=>void,
    /**
     * Function that is executed when close modal  
     */
    onClose?: ()=>void,
}

export default function ModalCards({id_user, isOpen, setIsOpen, onAccept, onClose}:ModalCards){

    const [inventory, setInventory] = useState<IInventory>();

    const handleClose = ()=>{
        setIsOpen(false);
        if(onClose) onClose();
    }

    const handleAccept = async ()=>{
        setIsOpen(false);
        //await cardApi.addReport(post, description);
        if(onAccept) onAccept();
    }

    useEffect(()=>{
        if(id_user){
            const handleGetInventory = async ()=>{
                const inventory = await inventoryApi.getByUserId(id_user);
                setInventory(inventory);
            }
            handleGetInventory();
        }
    }, [id_user]);

    useEffect(()=>{
        console.log(inventory);
    }, [inventory]);

    return (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 ${isOpen ? '' : 'hidden'}`}
        >
            <div className="w-[700px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 flex flex-col">
                <button
                    onClick={handleClose}
                    className="absolute top-1 right-1 w-8 h-8 border border-gray-200 bg-gray-300 hover:bg-gray-200 flex justify-center items-center">
                    <Icons.x/>
                </button>
                <div><span className="text-xl"><strong>Seleccione la carta que quiere subastar</strong></span></div>
                <div>
                    <span className="text-gray-500 text-sm" >
                        {`${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`}
                    </span>
                </div>
                <div className="w-full max-h-[500px] overflow-y-auto">
                    {(inventory) ? (
                        inventory.product.map((product, i)=>(
                            <Product key={i} id_product={product.id_product} />
                        ))
                    ) : ''}
                </div>
                <div className="w-full h-16 flex justify-center items-center">
                    <div className="w-1/2 h-1/2">
                        <Button.buttonYellow onClick={handleAccept}>Completar</Button.buttonYellow>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface IProductProps{
    id_product: string
}

function Product({id_product}:IProductProps){
    return(
        <div className="w-full h-36 bg-red-100 p-2">
            <div className="w-full h-full bg-green-200 flex">
                <div className="w-36 h-full relative">
                    <img className="w-full h-full object-contain" src={`${import.meta.env.VITE_API_CARDS_URL}/images/cards/${id_product}`} />
                </div>
                {id_product}
            </div>
        </div>
    )
}

