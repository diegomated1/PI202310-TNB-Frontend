import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import AdminCards from '../../admin_cards/AdminCards';

const NavMatches: React.FC = () => {
    const [matches, setMatches] = useState([]);
    const navigate = useNavigate();
  const socket = io('#'); 

    useEffect(() => {
    socket.emit('get_matches');

    socket.on('matches', (data) => {
        setMatches(data.matches);
    });

    return () => {
        socket.disconnect();
    };
}, [socket]);

const handleJoinMatch = (matchId) => {
    socket.emit('join_match', { matchId });

    socket.on('match_joined', () => {
      // Navega a la siguiente pantalla después de unirse a la partida (depende hasta que se establesca) :D
        navigate('/game');
    });
};

return (
    <AdminCards/>
        <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col space-y-4">
            {matches.map((match) => (
            <button
                key={match.id}
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:scale-110 hover:bg-blue-600"
                onClick={() => handleJoinMatch(match.id)}
            >
                Unirse a partida de {match.owner} - {match.bet}$
            </button>
        ))}
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
