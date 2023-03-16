import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AdminCardsNavBar from "../../components/NavBar";
import AddPlayerSquare from "./components/AddPlayerSquare";


export default function CreateGame(){

    const [bet, setBet] = useState(0);
    const [numberPlayers, setNumberPlayers] = useState(2);



    return(
        <div className="w-screen h-screen flex flex-col">
            <AdminCardsNavBar/>
            <div className="flex-1 flex">
                <div className="flex-1 p-12 ">
                    <div className="p-5 w-full h-full flex flex-col bg-gray-100">
                        <div className="w-full h-16">
                            <h1 className="text-3xl font-bold">Crear Partida</h1>
                        </div>
                        <div className="w-full h-24 flex flex-col justify-evenly">
                            <label><strong>Apuesta de la partida:</strong></label>
                            <div className="w-28">
                                <Input/>
                            </div>
                        </div>
                        <div className="w-full h-24 flex flex-col justify-evenly">
                            <label><strong>Numero de jugadores:</strong></label>
                            <div className="w-full flex">
                                <div className="w-8 h-8 mr-2">
                                    <Button text="2" type={(numberPlayers==2)?'buttonYellow':''}/>
                                </div>
                                <div className="w-8 h-8 mr-2">
                                    <Button text="3" type={(numberPlayers==3)?'buttonYellow':''}/>
                                </div>
                                <div className="w-8 h-8">
                                    <Button text="4" type={(numberPlayers==4)?'buttonYellow':''}/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-56 grid grid-cols-4">
                            {[...Array(numberPlayers)].map((x,i)=>(
                                <AddPlayerSquare key={i}/>
                            ))}
                        </div>
                        <div className="flex-1 flex justify-end items-center pr-5">
                            <div className="w-36">
                                <Button text="Crear partida"/>
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

