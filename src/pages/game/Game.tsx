import { useEffect, useState } from "react";
import Card from "./components/Card";
import Deck from "./components/Deck";
import Hero from "./components/Hero";
import History from "./components/History";
import Options from "./components/Options";
import useGame from "./hooks/useGame";


export default function Game(){

    const [tab, setTab] = useState(0);
    const game = useGame();

    useEffect(()=>{
        console.log(game.users);
    }, [game.users]);

    return(
        <div className="w-screen h-screen flex">
            <div className="flex-1 h-full bg-red-100 flex flex-col">
                <div className="w-full h-1/3 bg-red-200 flex flex-col">
                    <div className="flex-1 flex justify-center items-center text-4xl">
                        <span>Ronda: 1</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center text-4xl">
                        <span>Turno: kevin</span>
                    </div>
                </div>
                <div className="flex-1 bg-blue-100 flex flex-col">
                    <div className="w-full h-10 bg-gray-200 flex">
                        <button onClick={()=>{setTab(0)}} className="flex-1">
                            Chat
                        </button>
                        <button onClick={()=>{setTab(1)}} className="flex-1">
                            History
                        </button>
                        <button onClick={()=>{setTab(2)}} className="flex-1">
                            Options
                        </button>
                    </div>
                    {(tab==0) ? (
                        <div className="flex-1 flex justify-center items-center">
                            CHAT
                        </div>
                    ) : (tab==1) ? (
                        <History/>
                    ) : (
                        <Options/>
                    )}
                </div>
            </div>
            <div className="flex-[3] flex flex-col relative">
                <div className="flex-1 flex items-center">
                    <div className="flex-1 flex justify-evenly">
                        {(game && game.users) ? (
                            Object.values(game.users).map((user, i)=>(
                                <Hero key={i} id_hero={user.hero._id}/>
                            ))
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="flex-1 flex items-center">
                    <div className="flex-1 flex justify-evenly">
                        <Deck/>
                        {(game && game.user) ? (
                            <Hero id_hero={game.user.id_hero}/>
                        ) : (
                            ''
                        )}
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    )
}




