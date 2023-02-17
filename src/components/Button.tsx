

export default function Button({text}:{text:string}){
    return(
        <button className="w-24 h-10 rounded-md border-2 border-gray-500 bg-gray-300 hover:bg-gray-50" >
            <strong>{text}</strong>
        </button>
    )
}

