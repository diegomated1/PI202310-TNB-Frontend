import { useEffect, useState } from "react";
import IMatch from "../interfaces/IMatch";
import useAuth from "./useAuth";
import useSocket from "./useSocket";

/**
 * Custom hook for managing lobby.
 * @param {string?} id_match id of the match for get info
 * @returns A tuple containing match info (players, ias, bet, etc.) and a function to leave the lobby.
 * The first element is the match info as an IMatch object, null if the match is not founded or user is not in the match, and undefined if it hasn't been retrieved yet.
 * The second element is a function that allows the user to leave the lobby.
 */
export default function useLobby(id_match?:string):[IMatch|null|undefined, ()=>void]{

    // socket that allow to connect server 'game_create'
    const socket = useSocket("ws://localhost:3000");
    // useAuth for get user session
    const {user} = useAuth();

    // state for almacening match info (players, ias, bet, etc.)
    const [match, setMatch] = useState<IMatch|null|undefined>(undefined);

    useEffect(()=>{
        if(id_match===undefined){
            setMatch(null);
        }
        if(socket && user){
            /**
             * Function to get match when this custom hook is mounted
             * @param {IMatch} match match object, if not exists error ocurred in the socket server 
             */
            function matchGet(match?:IMatch){
                setMatch(match ?? null);
            }

            /**
             * Function to get players when a new player is joining 
             * @param {string} id_player the id of the player who enter the lobby
             * @param {IMatch} match the new match info
             */
            function matchUserJoin(id_player:string, match:IMatch){
                if(match){
                    setMatch(match);
                }
            }

            /**
             * Function to get players when a player is leaving 
             * @param {string} id_player the id of the player who leave the lobby
             * @param {IMatch} match the new match info
             */
            function matchUserLeave(id_player:string, match:IMatch){
                if(match){
                    setMatch(match);
                }
            }

            // Events that this custom hook listens to
            socket.on('match:get:one', matchGet);
            socket.on('match:user:join', matchUserJoin);
            socket.on('match:user:leave', matchUserLeave);

            // when this custom hook is mounted, fire event to get match 
            socket.emit('match:get:one', user.id_user, id_match);

            // Clean up function to remove the event listener when the component unmounts.
            return () => {
                socket.off('match:get', matchGet);
                socket.off('match:user:join', matchUserJoin);
                socket.off('match:user:leave', matchUserLeave);
            }
        }
    }, [socket, user]);

    /**
     * Function that allows the user exit the lobby
     */
    function matchLeave(){
        if(socket && user && id_match){
            socket.emit('match:user:leave', user.id_user, id_match);
        }
    }

    return [match, matchLeave]
}



