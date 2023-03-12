import { useState } from "react"


export default function AddPlayerSquare(){

    const [isIA, setIsIA] = useState(false);

    return(
        <div className="col-span-1 bg-red-200 p-2">
            <div className="w-full h-full bg-blue-50">
                <div className="relative w-full h-full">
                    {(isIA) ? (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3IrwAE6VEDLdiafneqHmIgMhKe-eMEKcUKhXJGZeEFwcBk1OAHac-SdL0kbocCOcHmA&usqp=CAU" alt="" />
                    ): (
                        <img src="https://static.wikia.nocookie.net/6f42976a-5e1f-4249-b6c9-d8ba666685b9/scale-to-width/755" alt="" />
                    )}
                    {(isIA) ? (
                        <button onClick={()=>{setIsIA(!isIA)}} className="absolute w-12 h-12 bg-slate-400 bottom-0 right-0 flex justify-center items-center">
                            X
                        </button>
                    ) : (
                        <button onClick={()=>{setIsIA(!isIA)}} className="absolute w-12 h-12 bg-slate-400 bottom-0 left-0 flex justify-center items-center">
                            IA
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}


