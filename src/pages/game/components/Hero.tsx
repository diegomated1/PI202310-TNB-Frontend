import { func } from "prop-types";
import { useState } from "react";
import Icons from "../../../components/Icons";



export default function Hero(){

    const [atq, setAtq] = useState(0);
    const [def, setDef] = useState(0);
    const [dmg, setDmg] = useState(0);

    return(
        <div className="w-56 h-72 border border-black rounded-lg flex flex-col">
            <div className="flex-[4] bg-red-200 rounded-t-lg">
                <div className="w-full h-full bg-blue-50 relative rounded-t-lg">
                    <img className="w-full h-full object-cover absolute top-0 left-0 rounded-t-lg" 
                        src="" 
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
                <div className="flex-1 flex justify-evenly">
                    <span className="text-2xl flex items-center">Hero name</span>
                    <div className="w-8 h-full flex items-center">
                        <Icons.sword/>
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="flex-1 flex justify-end text-2xl cursor-pointer">
                        <StatInfo before="6" after="Atq"/>
                    </div>
                    <div className="flex-1 flex justify-center text-2xl cursor-pointer">
                        <StatInfo before="4" after="Def"/>
                    </div>
                    <div className="flex-1 flex justify-start text-xl cursor-pointer">
                        <StatInfo 
                            before={
                                <div className="flex-1 flex flex-col justify-center items-center">
                                    <span className="text-2xl">3</span>
                                    <span className="text-sm">2d6</span>
                                </div>
                            }
                            after="Dmg"
                        />
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

function StatInfo({before, after}:{before:string|JSX.Element, after:string}){
    const [value, setValue] = useState(0);
    return(
        <div onMouseLeave={()=>{setValue(0)}} onMouseEnter={()=>{setValue(1)}} className="h-[90%] aspect-square bg-yellow-200 flex justify-center items-center">
            <span>
                {value==0?before:after}
            </span>
        </div>
    )
}

