
type BtnProps = {
    text?: string;
    type?: 'navbar'|'buttonYellow'|'buttonPurple'|'buttonBlue'|'buttonRed'|'buttonGreen'|''; 

    onClick?: ()=>void;
}

export default function Button({ text, type, onClick } : BtnProps ) {

    switch (type) {
        case "navbar": return (
            <button onClick={onClick} className="text-white w-auto h-10 rounded-lg border-2 border-white justify-center items-center" >
                <strong className="text-current" >{text}</strong>
            </button>
        )
        case "buttonYellow": return (
            <button onClick={onClick} className="w-[80%] h-10 rounded-md bg-buttonYellow hover:bg-amber-500" >
                <strong>{text}</strong>
            </button>
        )
        case "buttonPurple": return (
            <button onClick={onClick} className="text-white w-full h-full rounded-md bg-buttonPurple hover:bg-purple-700" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        case "buttonBlue": return (
            <button onClick={onClick} className="text-white w-full h-full rounded-md bg-buttonBlue hover:bg-sky-900 p-2" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        case "buttonRed": return (
            <button onClick={onClick} className="text-white w-full h-full rounded-md bg-buttonRed hover:bg-red-800 p-2" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        case "buttonGreen": return (
            <button onClick={onClick} className="text-white w-full h-full rounded-md bg-buttonGreen hover:bg-lime-900" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        default: return (
            <button onClick={onClick} className="w-full h-full rounded-md border-2 border-gray-500 bg-gray-300 hover:bg-gray-50">
                <strong>{text}</strong>
            </button>
        )
    }
}

