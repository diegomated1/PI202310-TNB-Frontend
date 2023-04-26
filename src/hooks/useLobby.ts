import useSocket from "./useSocket";
import { useEffect, useState } from "react";
import ILobby from "../interfaces/ILobby";
import useAuth from "./useAuth";
import lobbyApi from "../services/lobby.api";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook for managing a lobby server connections. 
 * @param getlobbies true if fetch all lobbies false if not
 * @returns array with lobby for create, all lobbies, and function for create new lobby
 */
export default function useLobby(getlobbies:boolean=true){
    const navigate = useNavigate();
    const socket = useSocket(import.meta.env.VITE_SOCKET_LOBBY, {path: '/lobby'});
    const [lobbies, setLobbies] = useState<ILobby[]>([]);
    const [lobby, setLobby] = useState<ILobby>();
    const {user} = useAuth();

    /**
     * useEffect for fetch all lobbies
     */
    useEffect(()=>{
        const handleGetLobbies = async ()=>{
            const lobbies = await lobbyApi.getAll();
            setLobbies(lobbies);
        }
        if(getlobbies){
            handleGetLobbies();
        }
    }, []);

    /**
     * useEffect for connect s
     */
    useEffect(()=>{
        if(socket && user){
            function onCreateLobby(lobby?:ILobby){
                if(lobby){
                    if(user!.id_user==lobby.id_owner){
                        setLobby(lobby);
                    }
                    if(getlobbies){
                        setLobbies(lobbies=>[...lobbies, lobby]);
                    }
                }
            }

            function onJoinLobby(player?:string, id_lobby?:string){
                if(player && id_lobby && player == user!.id_user){
                    navigate(`/game/lobby/${id_lobby}`);
                }
            }

            // Events that this custom hook listens to
            socket.on('lobby:create', onCreateLobby);
            socket.on('lobby:user:join', onJoinLobby);

            // Clean up function to remove the event listener when the component unmounts.
            return ()=>{
                socket.off('lobby:create', onCreateLobby);
                socket.off('lobby:user:join', onJoinLobby);
            }
        }
    }, [socket, user]);

    /**
     * Function for create a lobby
     * @param id_hero id of the hero of the owner
     * @param id_deck id of the deck of the owner
     * @param ias amount of ias in the lobby
     * @param max_number_players max amount of players in the lobby
     * @param bet min bet
     */
    const createLobby = (ias:number, max_number_players:number, bet:number) => {
        if(socket && user){
            socket.emit('lobby:create', user.id_user, ias, max_number_players, bet);
        }
    }

    const joinLobby = (id_lobby:string) => {
        if(socket && user){
            socket.emit('lobby:user:join', user.id_user, id_lobby);
        }
    }

    return {lobby, lobbies, createLobby, joinLobby}
}


