
interface ICardProps{
    id_card: string
}

export default function Card({id_card}:ICardProps){
    return(
        <div className="h-full aspect-square p-2 bg-blue-200">
            <div className="w-full h-full bg-green-200">
                {id_card}
            </div>
        </div>
    )
}

