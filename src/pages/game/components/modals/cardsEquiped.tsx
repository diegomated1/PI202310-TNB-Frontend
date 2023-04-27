import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import Icons from "../../../../components/Icons";
import Input from "../../../../components/Input";
import cardApi from "../../../../services/card.api";
import ICard from "../../../../interfaces/ICard";

interface ModalCardsEquiped{
    modalInfo: {
        hero_name: string
        cards: string[]
    }
    /**
     * Variable for check if the modal is open or close
     */
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

export default function CardsEquiped({modalInfo, isOpen, setIsOpen, onClose}:ModalCardsEquiped){

    const handleClose = ()=>{
        setIsOpen(false);
        if(onClose) onClose();
    }

    return (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 ${isOpen ? '' : 'hidden'}`}
        >
            <div className="fixed w-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 flex flex-col">
                <button onClick={handleClose}
                    className="absolute top-1 right-1 w-8 h-8 border border-gray-200 bg-gray-300 hover:bg-gray-200 flex justify-center items-center">
                    <Icons.x/>
                </button>
                <div><span className="text-xl"><strong>Cartas equipas de "{modalInfo.hero_name}"</strong></span></div>
                <br />
                <ul>
                    {modalInfo.cards.map((card,i)=>(
                        <li key={i}>
                            <Card id_card={card}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

interface ICardCardsEquiped{
    id_card: string
}

function Card({id_card}:ICardCardsEquiped){
    
    const [card, setCard] = useState<ICard>();

    useEffect(()=>{
        const handleGetCard = async()=>{
            const card = await cardApi.getById(id_card);
            card.effects = JSON.parse(card.effects[0]);
            setCard(card);
        }
        handleGetCard();
    }, [id_card]);

    return(
        <div className="w-full bg-red-100">
            <div className="w-full h-10 bg-green-100">
                {card?card.name:id_card}
            </div>
            <div className="w-full bg-red-100">
                {card?(
                    card.effects.map((effect,i)=>(
                        <div key={i} className="pl-5 mb-2">
                            <div className="border-b border-black">
                                <span className="border">{effect}</span>
                            </div>
                        </div>
                    ))
                ):''}
            </div>
        </div>
    )
}
