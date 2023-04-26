import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import AdminCardsNavBar from "../../components/NavBar";
import useLobby from "./hooks/useLobby";
import Chat from "../../components/Chat";
import Player from "./components/Player";
import WaitingPlayer from "./components/WaitingPlayer";
import gameApi from "../../services/game.api";
import all_cards from "../../utils/createUsers";

export default function Lobby(){

    const navigate = useNavigate();
    const {id_lobby} = useParams();
    const [isOwner, lobby, leave, start] = useLobby(id_lobby!);

    const [startMessage, setStartMessage] = useState<string>('');

    /**
     * Function for leaving the lobby
     */
    const handleLeave = ()=>{
        leave();
        navigate('/game/list');
    }

    /**
     * Function to start game, only the owner can start the game
     */
    const handleStart = async ()=>{
        if(lobby && isOwner){
            setStartMessage("Iniciando partida...");
            try{
                const game = await gameApi.create(lobby.players, lobby.ias, lobby.min_bet);
                if(game){
                    for(let i=0;i<lobby.players.length;i++){
                        await gameApi.addUser(game.id_game, lobby.players[i]);
                    }
                    navigate(`/game/?g=${game.id_game}`);
                }
            }catch(error){
                console.log(error);
            }
        }
    }

    useEffect(()=>{
        if(lobby===null){
            navigate('/game/list');
        }
    }, [lobby]);

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
                            <h1 className="text-3xl font-black">ID de partida: {(lobby)?lobby._id:''}</h1>
                        </div>
                        <div className="flex-1 flex flex-col justify-evenly">
                            <span>Apuesta de la partida:</span>
                            <span className="text-3xl ml-5">{(lobby)?lobby.min_bet:''}</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-evenly">
                            <span>Numero de jugadores:</span>
                            <span className="text-3xl ml-5">{(lobby)?lobby.max_number_players:''}</span>
                        </div>
                        {(lobby) ? (
                            <div className="flex-[3] grid grid-cols-4">
                                {lobby.players.map((player,i)=>(
                                    <Player key={i} id_user={player}/>
                                ))}
                                {[...Array(lobby.max_number_players-(lobby.players.length+lobby.ias))].map((x,i)=>(
                                    <WaitingPlayer key={i}/>
                                ))}
                            </div>
                        ) : (
                            ''
                        )}
                        <div className="flex-1 flex justify-end items-center pr-5">
                            <div className="w-40 h-14">
                                {
                                    (isOwner && lobby) ? (
                                        <Button.buttonYellow 
                                            onClick={handleStart}
                                        >
                                            {(lobby.max_number_players==lobby.players.length) ? (
                                                'Iniciar Partida'
                                            ) :(
                                                `Iniciar Partida con ${lobby.players.length} jugadores`
                                            )}
                                        </Button.buttonYellow>
                                    ) : ''
                                }
                                {(startMessage) ? (
                                    <span className="w-full flex justify-center">{startMessage}</span>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-full bg-red-100 flex justify-center items-center">
                    <Chat id_room={id_lobby}/>
                </div>
            </div>
        </div>
    )
}

