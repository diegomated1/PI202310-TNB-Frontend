import { useEffect, useState } from "react"


export default function WaitingPlayer(){
    
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints((points) => (points === 3 ? 0 : points + 1));
        }, 600);
        return () => clearInterval(interval); // limpiar el intervalo cuando se desmonte el componente
    }, []);

    return(
        <div className="col-span-1 p-2">
            <div className="w-full h-full bg-blue-50 flex flex-col justify-center items-center">
                <span>
                    Waiting players {[...Array(points)].map(()=>('.'))}
                </span>
            </div>
        </div>
    )
}

