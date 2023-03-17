import { useEffect, useState } from "react";
import IMatch from "../interfaces/IMatch";
import useAuth from "./useAuth";
import useSocket from "./useSocket";

/**
 *  Custom hook for managing lobby.
 */
export default function useLobby(id_match?:string){

    const socket = useSocket("ws://localhost:3000");
    const {user} = useAuth();

    const [match, setMatch] = useState<IMatch|null|undefined>(undefined);

    useEffect(()=>{
        if(id_match===undefined){
            setMatch(null);
        }
        if(socket && user){
            /**
             * Function to get match 
             * @param {string} match match object if not exists error ocurred in the socket server 
             */
            function matchGet(match?:IMatch){
                setMatch(match ?? null);
            }

            /**
             * Function to get players when a new player is joining 
             * @param {{id_user:string, bet:number}[]} players Players from match
             */
            function matchUserJoin(players:{id_user:string, bet:number}[]){
                if(match){
                    match.players = players;
                    setMatch(match);
                }
            }

            /**
             * Function to get players when a new player is leaving 
             * @param {{id_user:string, bet:number}[]} players Players from match
             */
            function matchUserLeave(players:{id_user:string, bet:number}[]){
                if(match){
                    match.players = players;
                    setMatch(match);
                }
            }

            socket.on('match:get:one', matchGet);
            socket.on('match:user:join', matchUserJoin);
            socket.on('match:user:leave', matchUserLeave);

            socket.emit('match:get:one', user.id_user, id_match);

            // Clean up function to remove the event listener when the component unmounts.
            return () => {
                socket.off('match:get', matchGet);
                socket.off('match:user:join', matchUserJoin);
                socket.off('match:user:leave', matchUserLeave);
            }
        }
    }, [socket, user]);

    return [match]
}



