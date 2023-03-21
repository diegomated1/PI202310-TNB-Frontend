import Icons from "../../../components/Icons";



export default function Hero(){
    return(
        <div className="w-56 h-72 border border-black rounded-lg flex flex-col">
            <div className="flex-[4] bg-red-200 rounded-t-lg">
                <div className="w-full h-full bg-blue-50 relative rounded-t-lg">
                    <img className="w-full h-full object-contain absolute top-0 left-0 rounded-t-lg" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3IrwAE6VEDLdiafneqHmIgMhKe-eMEKcUKhXJGZeEFwcBk1OAHac-SdL0kbocCOcHmA&usqp=CAU" 
                        alt=""
                    />
                    <div className="absolute w-8 h-8 rounded-full bg-red-200 top-1 right-1">

                    </div>
                    <div className="absolute w-full h-8 bottom-0 flex justify-center items-center">
                        <div className="w-[90%] h-6 bg-gray-300 opacity-90 border border-gray-500 rounded-xl">
                            <div className="w-1/2 h-full bg-yellow-300 rounded-xl flex justify-center items-center">
                                <span>40%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-[3] bg-red-300 flex flex-col">
                <div className="flex-1 flex justify-center">
                    <span className="text-2xl flex items-center">Hero name</span>
                    <div className="w-8 h-full flex items-center">
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="flex-1 flex justify-end">
                        <div className="h-[90%] aspect-square bg-yellow-200 flex justify-center items-center text-2xl">
                            <span>6</span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="h-[90%] aspect-square bg-blue-200 flex justify-center items-center text-2xl">
                            <span>4</span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-start">
                        <div className="h-[90%] aspect-square bg-red-200 flex flex-col justify-center items-center">
                            <span>3</span>
                            <span>2d6</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-red-400 rounded-b-lg flex justify-around">
                <span className="flex items-center">Power: 1</span>
                <span className="flex items-center">Daño efectivo: 6</span>
            </div>
        </div>
    )
}