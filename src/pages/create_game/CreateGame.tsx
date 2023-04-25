import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AdminCardsNavBar from "../../components/NavBar";
import AddPlayerSquare from "./components/AddPlayerSquare";
import { useNavigate } from "react-router";
import Chat from "../../components/Chat";
import useLobby from "../../hooks/useLobby";

/**
 * Component for creating a new game match.
 */
export default function CreateGame(){

    const navigate = useNavigate();
    const [bet, setBet] = useState(0);
    const [numberPlayers, setNumberPlayers] = useState(2);
    const [ias, setIas] = useState(0);

    const {lobby, createLobby} = useLobby();

    const handleCreateLobby = ()=>{
        createLobby('ilfr4bh8k', 'ilfr4bh8k', ias, numberPlayers, bet);
    }

    useEffect(()=>{
        if(lobby){
            navigate(`/game/lobby/${lobby._id}`);
        }
    }, [lobby]);

    
    return(
        <div className="w-screen h-screen flex flex-col">
            <AdminCardsNavBar/>
            <div className="flex-1 flex">
                <div className="flex-1 p-12 ">
                    <div className="p-5 w-full h-full flex flex-col bg-gray-100">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold">Crear Partida</h1>
                        </div>
                        <div className="flex-[2] flex flex-col justify-evenly">
                            <label><strong>Apuesta de la partida:</strong></label>
                            <div className="w-28">
                                <Input onChange={(e)=>{setBet(parseInt(e.target.value))}}/>
                            </div>
                        </div>
                        <div className="flex-[2] flex flex-col justify-evenly">
                            <label><strong>Numero de jugadores:</strong></label>
                            <div className="w-full flex">
                                <div className="w-8 h-8 mr-2">
                                    <BtnNumPlayers number={2} currentNumber={numberPlayers} setNumberPlayers={setNumberPlayers} />
                                </div>
                                <div className="w-8 h-8 mr-2">
                                    <BtnNumPlayers number={3} currentNumber={numberPlayers} setNumberPlayers={setNumberPlayers} />
                                </div>
                                <div className="w-8 h-8">
                                    <BtnNumPlayers number={4} currentNumber={numberPlayers} setNumberPlayers={setNumberPlayers} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-4">
                            <AddPlayerSquare isUser={true}/>
                            {[...Array(numberPlayers-1)].map((x,i)=>(
                                <AddPlayerSquare key={i} setIas={setIas}/>
                            ))}
                        </div>
                        <div className="flex-[2] flex justify-end items-center pr-5">
                            <div className="w-36 h-10">
                                <Button.buttonYellow onClick={handleCreateLobby}>Crear partida</Button.buttonYellow>
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

interface BtnNumPlayersProps{
    number:number,
    currentNumber:number,
    setNumberPlayers:Dispatch<SetStateAction<number>>
}

function BtnNumPlayers({number, currentNumber, setNumberPlayers}:BtnNumPlayersProps){
    return(
        (number==currentNumber) ? (
            <Button.buttonYellow onClick={()=>{setNumberPlayers(number)}}>{number}</Button.buttonYellow>
        ) : (
            <Button.default onClick={()=>{setNumberPlayers(number)}}>{number}</Button.default>
        )
    )
}


