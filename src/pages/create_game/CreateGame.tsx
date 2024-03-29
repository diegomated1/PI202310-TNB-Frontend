import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AdminCardsNavBar from "../../components/NavBar";
import AddPlayerSquare from "./components/AddPlayerSquare";
import useMatches from "../../hooks/useMatches";
import { useNavigate } from "react-router";

/**
 * Component for creating a new game match.
 */
export default function CreateGame(){

    const navigate = useNavigate();
    const matches = useMatches();
    const [bet, setBet] = useState(0);
    const [numberPlayers, setNumberPlayers] = useState(2);
    const [ias, setIas] = useState(0);

    const [creatingMatch, setCreatingMatch] = useState(0);

    /**
     * Handler function for creating a new match
     */
    const handleCreateMatch = ()=>{
        if(true){
            setCreatingMatch(1);
            matches.createMatch(numberPlayers, ias, bet);
        }
    }

    /**
     * If the match is create redirect to lobby page
     */
    useEffect(()=>{
        if(matches.match){
            navigate(`/game/lobby/${matches.match._id}`);
        }
    }, [matches.match]);

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
                                    <Button onClick={()=>{setNumberPlayers(2)}} text="2" type={(numberPlayers==2)?'buttonYellow':''}/>
                                </div>
                                <div className="w-8 h-8 mr-2">
                                    <Button onClick={()=>{setNumberPlayers(3)}} text="3" type={(numberPlayers==3)?'buttonYellow':''}/>
                                </div>
                                <div className="w-8 h-8">
                                    <Button onClick={()=>{setNumberPlayers(4)}} text="4" type={(numberPlayers==4)?'buttonYellow':''}/>
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
                            <div className="w-36">
                                <Button onClick={handleCreateMatch} text="Crear partida"/>
                                {(creatingMatch==1) ? (
                                    <span className="w-full flex justify-center">Creando partida...</span>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-full bg-red-100 flex justify-center items-center">
                    comentarios
                </div>
            </div>
        </div>
    )
}

