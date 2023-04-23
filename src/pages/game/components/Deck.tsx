import IPlayer from "../interfaces/IPlayer"

interface IDeckProps{
    cards_in_deck:number
}

export default function Deck({cards_in_deck}:IDeckProps){
    return(
        <div className="w-40 h-56 border border-black rounded-lg flex flex-col self-end items-center justify-center text-4xl">
            {cards_in_deck}
        </div>
    )
}


