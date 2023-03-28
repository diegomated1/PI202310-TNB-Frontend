import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AdminCardsNavBar from "../../components/NavBar";
import useLobby from "./hooks/useLobby";
import Chat from "../../components/Chat";
import Player from "./components/Player";
import WaitingPlayer from "./components/WaitingPlayer";
import useGame from "./hooks/useGame";
import useAuth from "../../hooks/useAuth";

export default function Lobby(){

    const navigate = useNavigate();
    const {id_match} = useParams();
    const [match, matchLeave, start, token] = useLobby(id_match);
    const [isOwner, setIsOwner] = useState(false);
    const [idGame, gameCreate] = useGame(isOwner);
    const {user} = useAuth();

    const [creatingMatch, setCreatingMatch] = useState(1);

    /**
     * Function for leaving the lobby
     */
    const handleLeave = ()=>{
        matchLeave();
        navigate('/game/create');
    }

    /**
     * Function to start game, only the owner can start the game
     */
    const handleStart = ()=>{
        if(match && isOwner){
            gameCreate(match);
            setCreatingMatch(1);
        }
    }

    /**
     * check if the user is in the lobby, if not navigate to /game/create
     */
    useEffect(()=>{
        if(match===null){
            navigate('/game/lobby/create');
        }
    }, [match]);

    /**
     * Check if user is the owner of the lobby
     */
    useEffect(()=>{
        if(user && match){
            setIsOwner(user.id_user==match.id_owner);
        }
    }, [user]);

    /**
     * check if the match is created when owner start the game
     */
    useEffect(()=>{
        if(idGame){
            start(idGame);
        }
    }, [idGame]);

    /**
     * Go to game when all user join in the game
     */
    useEffect(()=>{
        if(token){
            localStorage.setItem('mathToken', token);
            navigate(`/game/${id_match}`);
        }
    }, [token]);

    return(
        <div className="w-screen h-screen flex flex-col">
            <AdminCardsNavBar/>
            <div className="flex-1 flex">
                <div className="flex-1 p-12 ">
                <div className="p-5 w-full h-full flex flex-col bg-gray-100">
                        <div className="flex-1 flex justify-between">
                            <h1 className="text-3xl font-black">Lobby</h1>
                            <div className="h-10 w-20">
                                <Button.buttonYellow onClick={handleLeave}>Salir</Button.buttonYellow>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-black">ID de partida: {(match)?match._id:''}</h1>
                        </div>
                        <div className="flex-1 flex flex-col justify-evenly">
                            <span>Apuesta de la partida:</span>
                            <span className="text-3xl ml-5">{(match)?match.min_bet:''}</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-evenly">
                            <span>Numero de jugadores:</span>
                            <span className="text-3xl ml-5">{(match)?match.max_number_players:''}</span>
                        </div>
                        {(match) ? (
                            <div className="flex-[3] grid grid-cols-4">
                                {match.players.map((player,i)=>(
                                    <Player key={i} id_user={player.id_user} />
                                ))}
                                {[...Array(match.max_number_players-(match.players.length+match.ias))].map((x,i)=>(
                                    <WaitingPlayer key={i}/>
                                ))}
                                {[...Array(match.ias)].map((x,i)=>(
                                    <Player key={i}/>
                                ))}
                            </div>
                        ) : (
                            ''
                        )}
                        <div className="flex-1 flex justify-end items-center pr-5">
                            <div className="w-36 h-12">
                                {
                                    (match && match.max_number_players==match.players.length) ? (
                                        <Button.buttonYellow 
                                            onClick={handleStart}
                                        >
                                            Iniciar partida
                                        </Button.buttonYellow>
                                    ) : (
                                        <Button.default>
                                            Iniciar partida
                                        </Button.default>
                                    )
                                }
                                {(creatingMatch==1) ? (
                                    <span className="w-full flex justify-center">Iniciando partida...</span>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-full bg-red-100 flex justify-center items-center">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}

