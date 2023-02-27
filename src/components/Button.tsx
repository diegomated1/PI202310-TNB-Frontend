
type BtnProps = {
    text?: string;
    type: string;

    onClick?: ()=>void;
}

export default function Button({ text, type, onClick } : BtnProps ) {
    switch (type) {
        case "navbar": return (
            <button onClick={onClick} className="text-white w-auto p-2 h-10 rounded-lg border-2 border-white justify-center items-center" >
                <strong className="text-current" >{text}</strong>
            </button>
        )
        case "buttonYellow": return (
            <button onClick={onClick} className="w-auto h-10 rounded-md bg-buttonYellow hover:bg-amber-500 p-2" >
                <strong>{text}</strong>
            </button>
        )
        case "buttonPurple": return (
            <button onClick={onClick} className="text-white w-auto h-10 rounded-md bg-buttonPurple hover:bg-purple-700 p-2" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        case "buttonBlue": return (
            <button onClick={onClick} className="text-white w-auto h-10 rounded-md bg-buttonBlue hover:bg-sky-900 p-2" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        case "buttonRed": return (
            <button onClick={onClick} className="text-white w-auto h-10 rounded-md bg-buttonRed hover:bg-red-800 p-2" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        case "buttonGreen": return (
            <button onClick={onClick} className="text-white w-auto h-10 rounded-md bg-buttonGreen hover:bg-lime-900 p-2" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        case "buttonlarge": return (
            <button onClick={onClick} className="text-white w-full h-10 rounded-md bg-gray-200 hover:bg-lime-900 p-2" >
                <strong className="text-current">{text}</strong>
            </button>
        )
        default: return (
            <button onClick={onClick} className="w-24 h-10 rounded-md border-2 border-gray-500 bg-gray-300 hover:bg-gray-50" >
                <strong>{text}</strong>
            </button>
        )
    }
}

