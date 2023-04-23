import { useEffect, useState } from "react"
import ICard from "../../../interfaces/ICard";
import cardApi from "../../../services/card.api";


interface ICardProps{
    id_hero?:string
    id_card:string
    canChange?:boolean
    onChange:(id_card:string)=>void
    canUse:boolean
    onUse:(id_card:string)=>void
}

export default function Card({id_card, id_hero, canChange, onChange, canUse, onUse}:ICardProps){

    const [card, setCard] = useState<ICard>();

    useEffect(()=>{
        const handleGetCard = async()=>{
            const card = await cardApi.getById(id_card);
            card.effects = JSON.parse(card.effects[0]);
            setCard(card);
        }
        handleGetCard();
    }, [id_card]);

    const handleChange = ()=>{
        console.log(`cambiando ${id_card}`);
        onChange(id_card);
    }

    const handleUse = ()=>{
        console.log(`usando ${id_card}`);
        onUse(id_card);
    }

    return(
        <div 
            className={`w-40 h-56 border border-black rounded-lg flex flex-col self-end`}
            onClick={canChange?handleChange:canUse?handleUse:undefined}
        >
            <div className="flex-1 bg-red-200">

            </div>
            <div className="flex-1">
                <div className="w-full h-1/4 flex justify-center items-center">
                    <span>{(card)?card.name:''}</span>
                </div>
                <div className="w-full h-3/4 flex">
                    <ul className="flex-1">
                        {card ? (
                            card.effects.map((effect,i)=>(
                                <li key={i} className="p-1">
                                    <span className="leading-5 line-clamp-2 bg-green-100 border border-gray-200 rounded-md">
                                        {effect}
                                    </span>
                                </li>
                            ))
                        ) : ''}
                    </ul>
                </div>
            </div>
        </div>
    )
}


