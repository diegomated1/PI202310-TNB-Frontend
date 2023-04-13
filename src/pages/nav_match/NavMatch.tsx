import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCardsNavBar from "../../components/NavBar";
import Button from "../../components/Button";
import Icons from "../../components/Icons";

const NavMatches: React.FC = () => {
    return (
    <AdminCardsNavBar/>
        <NavBar />
        <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col space-y-4">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:scale-110 hover:bg-blue-600">
            Unirse a partida
            <div className="text-xs text-white mt-2">
                <ul className="list-disc list-inside">
                    <li>Veras un listado de las partidas creadas</li>
                    <li>Podras ver el username del dueño de la sala</li>
                    <li>Podras ver el monto de la apuesta</li>
                    <li>Podras ver si se juega contra una IA</li>
                </ul>
            </div>
            </button>
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:scale-110 hover:bg-green-600">
            Crear partida
            <div className="text-xs text-white mt-2">
                <ul className="list-disc list-inside">
                    <li>Podras escoger la cantidad de jugadores</li>
                    <li>Podras definir el monto de la apuesta</li>
                    <li>Podras escoger si se juega contra una IA</li>
                </ul>
            </div>
            </button>
        </div>
        </div>
    </>
    );
};

export default NavMatches;
