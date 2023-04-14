import useSocket from "./useSocket";
import { useEffect, useState } from "react";
import ILobby from "../interfaces/ILobby";
import useAuth from "./useAuth";
import lobbyApi from "../services/lobby.api";


export default function useLobby(getlobbies:boolean=true):[ILobby|undefined, ILobby[], (id_hero:string, ias:number, max_number_players:number, bet:number) => void]{
    const socket = useSocket(import.meta.env.VITE_SOCKET_LOBBY, {path: '/lobby'});
    const [lobbies, setLobbies] = useState<ILobby[]>([]);
    const [lobby, setLobby] = useState<ILobby>();
    const {user} = useAuth();

    useEffect(()=>{
        const handleGetLobbies = async ()=>{
            const lobbies = await lobbyApi.getAll();
            setLobbies(lobbies);
        }
        if(getlobbies){
            handleGetLobbies();
        }
    }, []);

    useEffect(()=>{
        if(socket){
            function onCreateLobby(lobby?:ILobby){
                if(lobby){
                    if(user && user.id_user==lobby.id_owner){
                        setLobby(lobby);
                    }
                    setLobbies(lobbies=>[...lobbies, lobby]);
                }
            }

            socket.on('lobby:create', onCreateLobby);

            return ()=>{
                socket.off('lobby:create', onCreateLobby);
            }
        }
    }, [socket, user]);

    const createLobby = (
        id_hero:string, ias:number, max_number_players:number, bet:number
    ) => {
        if(socket && user){
            socket.emit('lobby:create', user.id_user, id_hero, ias, max_number_players, bet);
        }
    }

    return [
        lobby, lobbies, createLobby
    ]
}


