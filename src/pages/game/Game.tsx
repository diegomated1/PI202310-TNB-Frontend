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
import Alert from "./components/modals/alert";
import IHero from "./interfaces/IHero";
import useAuth from "../../hooks/useAuth";
import IUser from "../../interfaces/IUser";
import userApi from "../../services/user.api";
import CardsEquiped from "./components/modals/cardsEquiped";
import IPlayer from "./interfaces/IPlayer";


export default function Game(){

    const [searchParams] = useSearchParams();
    const [tab, setTab] = useState(0);

    const {user} = useAuth();
    const {game, players, heroes, actions} = useGame(searchParams.get('g'), user);

    const [player, setPlayer] = useState<IPlayer>();
    const [hero, setHero] = useState<IHero>();
    const [userTurn, setUserTurn] = useState<IUser>();

    const [modalCardsEquiped, setModalCardsEquiped] = useState<boolean>(false);
    const [modalInfo, setModalInfo] = useState<{hero_name:string,cards:string[]}>({hero_name:'', cards: []});

    const [canChangeCard, setCanChangeCard] = useState(false);
    const [canUseCard, setCanUseCard] = useState(false);

    useEffect(()=>{
        if(user && players[user.id_user]){
            setPlayer(players[user.id_user]);
        }
    }, [user, players]);

    // Get user hero
    useEffect(()=>{
        if(player){
            setHero(heroes[player.id_hero]);

            const canUse = player.upgrades>0;
            const canChange = player.changes>0;
            setCanUseCard(canUse);
            setCanChangeCard(canUse?false:canChange);
        }
    }, [player]);

    // Change turn info 
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

    // open and change modal info
    const handleOpenModal = (id_player:string, id_hero:string)=>{
        setModalInfo({
            cards: [...players[id_player].used_cards],
            hero_name: heroes[id_hero].name
        });
        setModalCardsEquiped(true);
    }

    const handleChange = ()=>{
        setCanChangeCard(est=>!est);
        setCanUseCard(est=>!est);
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
                        {(hero) ? (
                            Object.values(heroes).filter(hero=>hero._id!=players[user?.id_user!].id_hero).map((_hero, i)=>(
                                <Hero 
                                    key={i} 
                                    hero={_hero}
                                    canSelect={(userTurn?.id_user==user?.id_user && hero?.power!>0)?true:false}
                                    onSelect={handleAttack}
                                    openModal={handleOpenModal}
                                />
                            ))
                        ) : ''}
                    </div>
                </div>
                <div className="flex-1 flex items-center">
                    <div className="flex-1 flex justify-evenly">
                        <Deck cards_in_deck={(user&&players[user.id_user])?players[user.id_user].all_cards.length:0}/>
                        {(hero) ? (
                            <Hero hero={hero} 
                                canSelect={false}
                                openModal={handleOpenModal}
                            />
                        ) : (
                            ''
                        )}
                        {(hero) ? (
                            players[user!.id_user].hand_cards.map((card,i)=>(
                                <Card 
                                    key={i} 
                                    id_card={card} 
                                    id_hero={hero?._id} 
                                    canChange={canChangeCard}
                                    onChange={actions.changeCard}
                                    canUse={canUseCard}
                                    onUse={actions.useCard}
                                />
                            ))
                        ):''}
                    </div>
                </div>
            </div>
            <Actions 
                change={handleChange}
                attack={()=>{}} pass={handlePassTurn} 
                power={hero?hero.power:0}
                turn={(user && game) ? (user.id_user == game.turn) : false}
            />
            <CardsEquiped
                modalInfo={modalInfo}
                isOpen={modalCardsEquiped} 
                setIsOpen={setModalCardsEquiped}
                onClose={()=>{setModalInfo({hero_name:'', cards: []})}}
            />
        </div>
    )
}




