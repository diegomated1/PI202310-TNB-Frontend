type CardProps = {
    _id?:string;
    name?:string;
    description?:string;
    id_hero?:string;
    card_type?:number;
    obtenida?:string;

    precio?:number;
    descuento?:number;

    onClick2?: ()=>void;
    onClick3?: ()=>void;
}

export default function Card({ _id, name, description, id_hero, card_type, onClick2, onClick3 } : CardProps ) {
    return(
        <div className="w-full h-full">
            <div className="h-[35%] bg-red-800 w-full">
                <img src="" alt="" />
                <div>icono1</div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="h-[55%] bg-amber-600 w-full">
                a
            </div>
            <div className="h-[10%] bg-green-600 w-full">
                a
            </div>
        </div>
    )
}