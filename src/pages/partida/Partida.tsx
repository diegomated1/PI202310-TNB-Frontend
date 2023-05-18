import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Button";
import AdminCardsNavBar from "../../components/NavBar";


export default function Partida(){

    const navigate = useNavigate();

    return(
        <div className="w-screen h-screen bg-gray-300 flex flex-col">
            <AdminCardsNavBar/>
            <div className="flex-1 flex justify-center items-center">
                <div className="w-[450px] h-[250px] flex flex-col bg-violet-100 rounded-xl border border-black">
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[200px] h-[50px]">
                            <Buttons.buttonYellow onClick={()=>{navigate('/game/list')}}>
                                Unirse a una partida
                            </Buttons.buttonYellow>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="w-[200px] h-[50px]">
                            <Buttons.buttonYellow onClick={()=>{navigate('/game/lobby/create')}}>
                                Crear a una partida
                            </Buttons.buttonYellow>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

