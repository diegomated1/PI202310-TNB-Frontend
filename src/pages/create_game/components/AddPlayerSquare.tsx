import { useState } from "react"
import Buttons from "../../../components/Button";

interface IAddPlayersSquareProps{
    isUser?: boolean,
    setIas?: React.Dispatch<React.SetStateAction<number>>
}

export default function AddPlayerSquare({isUser = false, setIas}:IAddPlayersSquareProps){

    const [isIA, setIsIA] = useState(false);

    const handleSetIsIA = ()=>{
        if(setIas){
            setIas((Ias)=>((isIA)?Ias-1:Ias+1));
        }
        setIsIA(!isIA);
    }

    return(
        <div className="col-span-1 p-2">
            <div className="w-full h-full bg-blue-50">
                <div className="relative w-full h-full">
                    {(isIA) ? (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3IrwAE6VEDLdiafneqHmIgMhKe-eMEKcUKhXJGZeEFwcBk1OAHac-SdL0kbocCOcHmA&usqp=CAU" alt="" />
                    ): (
                        <img src="https://static.wikia.nocookie.net/6f42976a-5e1f-4249-b6c9-d8ba666685b9/scale-to-width/755" alt="" />
                    )}
                    { (!isUser) ? (
                        <div className="w-full flex justify-center">
                            <div className="absolute w-14 h-10 bottom-0">
                                <Buttons.buttonYellow onClick={handleSetIsIA}>
                                    {isIA ? 'IA' : 'User'}
                                </Buttons.buttonYellow>
                            </div>
                        </div>
                    ) : ''}
                </div>
            </div>
        </div>
    )
}


