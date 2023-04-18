import { func } from "prop-types";
import { useEffect, useState } from "react";
import Icons from "../../../components/Icons";
import IHeroe from "../../../interfaces/IHeroe";
import heroeApi from "../../../services/heroe.api";


interface HeroProps{
    id_hero: string
}

export default function Hero({id_hero}:HeroProps){
    
    const [hero, setHero] = useState<IHeroe>();
    const [currentStats, setCurrentStats] = useState<IHeroe>();

    const [lifePer, setLifePer] = useState(100);
    const [atq, setAtq] = useState(0);
    const [def, setDef] = useState(0);
    const [dmg, setDmg] = useState(0);

    const handleGetHero = async ()=>{
        const _hero = await heroeApi.getById(id_hero);
        setHero(_hero);
        setCurrentStats(_hero);
    }

    useEffect(()=>{
        if(hero && currentStats){
            const _life = ((currentStats.health*100)/hero.health).toPrecision(4);
            setLifePer(parseFloat(_life));
        }
    }, [hero?.health, currentStats?.health]);

    useEffect(()=>{
        handleGetHero();
    }, [id_hero]);

    return(
        <div className="w-56 h-72 border border-black rounded-lg flex flex-col">
            <div className="flex-[4] bg-red-200 rounded-t-lg">
                <div className="w-full h-full bg-blue-50 relative rounded-t-lg">
                    <img className="w-full h-full object-cover absolute top-0 left-0 rounded-t-lg" 
                        src="https://genshin.global/wp-content/uploads/2022/05/yae-miko-electro-profile-genshin-impact-1.webp" 
                        alt=""
                    />
                    <div className="absolute w-8 h-8 rounded-full top-1 right-1 flex justify-center items-center">
                        <Icons.basicAttack/>
                    </div>
                    <div className="absolute w-full h-8 bottom-0 flex justify-center items-center">
                        <div className="w-[90%] h-6 bg-gray-300 opacity-90 border border-gray-500 rounded-xl">
                            <div 
                                style={{width: `${lifePer}%`}}
                                className="h-full bg-yellow-300 rounded-xl flex justify-center items-center">
                                <span>{lifePer}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-[3] bg-red-300 flex flex-col">
                <div className="flex-1 flex justify-evenly">
                    <span className="text-2xl flex items-center">{currentStats?.name}</span>
                    <div className="w-8 h-full flex items-center">
                        {(hero && hero.name && hero.name in Icons) ? Icons[hero.name]({}) : ""}
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="flex-1 flex justify-center text-2xl cursor-pointer">
                        <StatInfo before={
                            <div className="flex-1 flex flex-col justify-center items-center">
                                <span className="text-xl">{currentStats?.attack_basic}</span>
                                <span className="text-sm">1d{currentStats?.attack_range}</span>
                            </div>
                        } after="Atq"/>
                    </div>
                    <div className="flex-1 flex justify-center text-2xl cursor-pointer">
                        <StatInfo before={(hero)?hero.defense.toString():''} after="Def"/>
                    </div>
                    <div className="flex-1 flex justify-center text-xl cursor-pointer">
                        <StatInfo before={`1d${(hero)?hero.damage_range.toString():''}`} after="Dmg"/>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-gray-500 rounded-b-lg flex justify-around">
                <span className="flex items-center">Power: {currentStats?.power}</span>
                <span className="flex items-center">Daño efectivo: 0</span>
            </div>
        </div>
    )
}

function StatInfo({before, after}:{before:string|JSX.Element, after:string}){
    const [value, setValue] = useState(0);
    return(
        <div onMouseLeave={()=>{setValue(0)}} onMouseEnter={()=>{setValue(1)}} 
        className="h-[80%] aspect-[5/4] bg-yellow-500 flex justify-center items-center border border-black rounded-[4px] shadow-lg">
            <span>
                {value==0?before:after}
            </span>
        </div>
    )
}

