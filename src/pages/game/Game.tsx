import { useEffect, useState } from "react";
import Card from "./components/Card";
import Deck from "./components/Deck";
import Hero from "./components/Hero";
import History from "./components/tab/History";
import Options from "./components/tab/Options";
import useGame from "./hooks/useGame";
import { useSearchParams } from "react-router-dom";
import IGame from "./interfaces/IGame";
import Actions from "./components/Actions";
import Alert from "./components/alerts/alert";
import IHero from "./interfaces/IHero";
import useAuth from "../../hooks/useAuth";
import IUser from "../../interfaces/IUser";
import userApi from "../../services/user.api";


export default function Game(){

    const [searchParams] = useSearchParams();
    const [tab, setTab] = useState(0);

    const {user} = useAuth();
    const {game, players, heroes, actions} = useGame(searchParams.get('g'), user);

    const [hero, setHero] = useState<IHero>();

    const [userTurn, setUserTurn] = useState<IUser>();

    const [ups, setUps] = useState(0);
    const [grabs, setGrabs] = useState(0);
    const [changes, setChanges] = useState(0);
    const [attacks, setAttacks] = useState(0);
    const [pass, setPass] = useState(0);

    useEffect(()=>{
        if(user && heroes[players[user.id_user].id_hero]){
            setHero(heroes[players[user.id_user].id_hero]);
        }
    }, [heroes]);

    useEffect(()=>{
        if(game){
            const handleGetUser = async ()=>{
                const _user = await userApi.getById(game.turn);
                setUserTurn(_user);
            }
            handleGetUser();
        }
    }, [game?.turn]);

    const handleAttack = (id_hero_target:string)=>{
        if(hero && hero.power>0){
            actions.attack(id_hero_target);
        }
    }

    const handlePassTurn = ()=>{
        actions.passTurn();
    }

    return(
        <div className="relative w-screen h-screen flex">
            <div className="flex-1 h-full bg-red-100 flex flex-col">
                <div className="w-full h-1/3 bg-red-200 flex flex-col">
                    <div className="flex-1 flex justify-center items-center text-4xl">
                        <span>Ronda: {(game && game.current_round) ? game.current_round : '0'}</span>
                    </div>
                    <div className="flex-1 flex justify-center items-center text-4xl">
                        <span>Turno: {userTurn?userTurn.username:''}</span>
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
                        {Object.values(heroes).filter(hero=>hero._id!=players[user?.id_user!].id_hero).map((_hero, i)=>(
                            <Hero 
                                key={i} 
                                hero={_hero}
                                canSelect={(hero && hero.power>0)?true:false}
                                onSelect={handleAttack}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex items-center">
                    <div className="flex-1 flex justify-evenly">
                        <Deck/>
                        {(user && hero) ? (
                            <Hero hero={hero} canSelect={false}/>
                        ) : (
                            ''
                        )}
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
            <Actions 
                attack={()=>{}} pass={handlePassTurn} 
                power={hero?hero.power:0}
                turn={(user && game) ? (user.id_user == game.turn) : false}
            />
        </div>
    )
}




