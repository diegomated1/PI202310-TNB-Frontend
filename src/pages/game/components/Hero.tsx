import { useEffect, useState } from "react";
import Icons from "../../../components/Icons";
import IHero from "../interfaces/IHero";
import heroeApi from "../../../services/hero.api";


interface HeroProps{
    openModal: (id_player: string, id_hero: string) => void
    id_user?: string
    canSelect: boolean
    onSelect?: (id_hero:string)=>void
    hero:IHero
}

export default function Hero({id_user, hero, canSelect, onSelect, openModal}:HeroProps){
    
    const [baseStats, setBaseStats] = useState<IHero>();
    const [stats, setStats] = useState<IHero>(hero);

    const [lifePer, setLifePer] = useState(100);

    useEffect(()=>{
        const handleGetHero = async()=>{
            const _hero = await heroeApi.getById(hero.id_hero);
            //setBaseStats(_hero);
        }
        handleGetHero();
    }, []);

    useEffect(()=>{
        setStats(hero);
    }, [hero]);

    useEffect(()=>{
        if(baseStats){
            const _life = ((stats.life*100)/baseStats.life).toPrecision(4);
            console.log(stats);
            setLifePer(parseFloat(_life));
        }
    }, [baseStats, stats.life]);

    const handleOpenModal = ()=>{
        openModal(hero.id_user, hero._id);
    }

    return(
        <div onClick={()=>{if(canSelect&&onSelect)onSelect(hero._id)}} className="relative w-56 h-72 border-2 border-black rounded-lg flex flex-col cursor-pointer">
            {canSelect ? (
                <div className="absolute w-[110%] h-[110%] bg-green-400 -top-[5%] -left-[5%] -z-10 rounded-lg"/>
            ) : ''}
            <div className="flex-[4] bg-red-200 rounded-t-lg">
                <div className="w-full h-full bg-blue-50 relative rounded-t-lg">
                    <img className="w-full h-full object-cover absolute top-0 left-0 rounded-t-lg" 
                        src={`${(import.meta.env.VITE_API_CARDS_URL) ? `${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${hero.id_hero}` : ''}`} 
                        alt=""
                    />
                    <div className="absolute w-8 h-8 rounded-full top-1 left-1 flex justify-center items-center">
                        <Icons.edit onClick={handleOpenModal}/> 
                    </div>
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
                    <span className="text-2xl flex items-center">{stats.name}</span>
                    <div className="w-8 h-full flex items-center">
                        {(hero && hero.name && hero.name in Icons) ? Icons[hero.name]({}) : ""}
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="flex-1 flex justify-center text-xl cursor-pointer">
                        <StatInfo before={
                            `${stats.atq.base}-${stats.atq.base+stats.atq.range}`
                        } after="Atq"/>
                    </div>
                    <div className="flex-1 flex justify-center text-2xl cursor-pointer">
                        <StatInfo before={stats.def.toString()} after="Def"/>
                    </div>
                    <div className="flex-1 flex justify-center text-2xl cursor-pointer">
                        <StatInfo before={`${stats.dmg.base}-${stats.dmg.base+stats.dmg.range}`} after="Dmg"/>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-gray-500 rounded-b-lg flex justify-around">
                <span className="flex items-center">Power: {stats.power}</span>
                <span className="flex items-center">Daño efectivo: {stats.last_dmg}</span>
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

