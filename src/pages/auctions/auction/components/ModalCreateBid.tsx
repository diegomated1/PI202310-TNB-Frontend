import { useState } from "react";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import Input from "../../../../components/Input";
import cardApi from "../../../../services/card.api";
import IBids from "../../../../interfaces/IBids";

interface ModalReports{
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
    onAccept?: (id_auction: string, coins: number, cards: string[])=>void,
    /**
     * Function that is executed when close modal  
     */
    onClose?: ()=>void,
    id_auction?: string,
    minBit: number
}

export default function ModalCreateBid({isOpen, setIsOpen, onAccept, onClose, minBit, id_auction}:ModalReports){

    const [coins, setCoins] = useState<number>(minBit+1);
    const [cards, setCards] = useState<string[]>([]);

    const handleClose = ()=>{
        setIsOpen(false);
        if(onClose) onClose();
    }

    const handleAccept = async ()=>{
        setIsOpen(false);
        //await cardApi.addReport(post, description);
        if(onAccept && id_auction){
            onAccept(id_auction, coins, cards)
            setCoins(minBit);
        };
    }

    return (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 ${isOpen ? '' : 'hidden'}`}
        >
            <div className="fixed w-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 flex flex-col">
                <button
                    onClick={handleClose}
                    className="absolute top-1 right-1 w-8 h-8 border border-gray-200 bg-gray-300 hover:bg-gray-200 flex justify-center items-center">
                    <Icons.x/>
                </button>
                <div><span className="text-xl"><strong>Añadir puja</strong></span></div>
                <div>
                    <span className="text-gray-500 text-sm" >
                        {`${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`}
                    </span>
                </div>
                <div>
                    <br />
                    <p className="leading-5 text-lg">
                        <strong>PUJA MINIMA:</strong> {minBit+1}
                    </p>
                </div><br />
                <label className="w-20 h-10">
                    Coins: <br />
                    <Input placeholder={(minBit+1).toString()} type="number" onChange={(e)=>{setCoins(parseInt(e.target.value))}} />
                </label><br /><br />
                <label className="w-full h-20">
                    Cartas: <br />
                    <textarea
                        className="border rounded-md border-gray-100 w-full h-full max-w-full max-h-full min-w-full min-h-full shadow-xl relative p-2"
                    />
                </label><br /><br />
                <div className="w-full h-16 flex justify-center items-center">
                    <div className="w-1/2 h-2/3 text-lg">
                        <Button.buttonYellow onClick={handleAccept}>Pujar</Button.buttonYellow>
                    </div>
                </div>
            </div>
        </div>
    );
}


