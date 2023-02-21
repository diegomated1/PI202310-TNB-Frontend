
type BtnProps = {
    text?: string;
    type?: string;
    onClick?: ()=>void;
  }
  
export default function Button({ text, type, onClick } : BtnProps ) {
    switch (type) {
        case "navbar": return (
            <button onClick={onClick} className="w-auto p-2 h-10 rounded-lg border-2 border-white justify-center items-center" >
                <strong>{text}</strong>
            </button>
        )
        case "afirmative": return (
            <button className="w-24 h-10 rounded-md border-2 border-gray-500 bg-gray-300 hover:bg-gray-50" >
                <strong>{text}</strong>
            </button>
        )
        case "negative": return (
            <button className="w-24 h-10 rounded-md border-2 border-gray-500 bg-gray-300 hover:bg-gray-50" >
                <strong>{text}</strong>
            </button>
        )
        default: return (
            <button className="w-24 h-10 rounded-md border-2 border-gray-500 bg-gray-300 hover:bg-gray-50" >
                <strong>{text}</strong>
            </button>
        )
    }
}

