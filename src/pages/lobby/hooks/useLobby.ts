import { useEffect, useState } from "react";
import Ilobby from "../../../interfaces/ILobby";
import useAuth from "../../../hooks/useAuth";
import useSocket from "../../../hooks/useSocket";
import IUser from "../../../interfaces/IUser";
import lobbyApi from "../../../services/lobby.api";

/**
 * Custom hook for managing lobby.
 * @param {string?} id_lobby id of the lobby for get info
 * @returns A tuple containing lobby info (players, ias, bet, etc.), function to leave the lobby and function to start lobby.
 * The first element is the lobby info as an Ilobby object, null if the lobby is not founded or user is not in the lobby, and undefined if it hasn't been retrieved yet.
 * The second element is a function that allows the user to leave the lobby.
 * Thi third element is a function that allow the owner to start lobby
 */
export default function useLobby(id_lobby:string):[boolean, Ilobby|null|undefined, ()=>void, (idGame:string)=>void]{

    // socket that allow to connect server 'game_create'
    const socket = useSocket(import.meta.env.VITE_SOCKET_LOBBY, {path: '/lobby', query: {id_lobby}});

    // state for almacening lobby info (players, ias, bet, etc.)
    const [lobby, setLobby] = useState<Ilobby|null|undefined>(undefined);

    const {user} = useAuth();

    const [isOwner, setIsOwner] = useState(false);

    useEffect(()=>{
        if(user){
            const handleGetLobby = async ()=>{
                const lobby = await lobbyApi.getById(id_lobby);
                const _user = lobby.players.find(player=>player==user.id_user);
                if(_user){
                    setLobby(lobby);
                    setIsOwner(user.id_user==lobby.id_owner);
                }else{
                    setLobby(null);
                }
            }
            handleGetLobby();
        }
    }, [user]);

    useEffect(()=>{
        if(lobby && socket && user){

            /**
             * Function to get players when a new player is joining 
             * @param {IPLayer} player player object (id_player, id_hero, id_deck)
             */
            function lobbyUserJoin(player:string){
                setLobby((lobby)=>({...lobby!, players: [...lobby!.players, player]}));
            }

            /**
             * Function to get players when a player is leaving
             * @param {string} id_player the id of the player who leave the lobby
             */
            function lobbyUserLeave(id_player:string){
                setLobby((lobby)=>({...lobby!, players: lobby!.players.filter(ply=>ply!=id_player)}));
            }

            socket.emit('lobby:room:join', user.id_user);

            // Events that this custom hook listens to
            socket.on('lobby:user:join', lobbyUserJoin);
            socket.on('lobby:user:leave', lobbyUserLeave);

            // Clean up function to remove the event listener when the component unmounts.
            return () => {
                socket.off('lobby:user:join', lobbyUserJoin);
                socket.off('lobby:user:leave', lobbyUserLeave);
            }
        }
    }, [lobby, socket, user]);

    /**
     * Function that allows the user exit the lobby
     */
    function leave(){
        if(socket && user && id_lobby){
            socket.emit('lobby:user:leave', user.id_user, id_lobby);
        }
    }

    /**
     * Function to start round
     */
    function start(id_game:string){
        if(socket && user && isOwner && id_lobby){
            socket.emit('lobby:start', id_lobby, id_game);
        }
    }

    return [isOwner, lobby, leave, start]
}



