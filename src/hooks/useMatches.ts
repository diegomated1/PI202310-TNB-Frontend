import { useEffect, useState } from "react";
import IMatch from "../interfaces/IMatch";
import useAuth from "./useAuth";
import useSocket from "./useSocket";

/**
 *  Custom hook for managing matches.
 */
export default function useMatches(){

    const socket = useSocket("ws://localhost:3000");
    const {user} = useAuth();

    const [matches, setMatches] = useState<IMatch[]>([]);
    const [match, setMatch] = useState<IMatch|null>(null);

    useEffect(()=>{
        if(socket){
            /**
             * Callback function that adds a new match to the state and sets the current match if the user created it.
             * 
             * @param {IMatch} new_match The new match to add.
             */
            function matchCreate(new_match:IMatch){
                setMatches((matches)=>[...matches, new_match]);
                if(user && user.id_user==new_match.id_owner){
                    setMatch(new_match);
                }
            }

            socket.on('room:create', matchCreate);

            // Clean up function to remove the event listener when the component unmounts.
            return () => {
                socket.off('room:create', matchCreate);
            }
        }
    }, [socket, user]);

    /**
     * Function to create a new match.
     * 
     * @param {number} number_players The maximum number of players in the match.
     * @param {number} ias The amount of ias in the match
     * @param {number} bet The minimum amount of credits for the bet.
     */
    function createMatch(number_players:number, ias:number, bet:number){
        if(socket && user){
            socket.emit("room:create", user.id_user, number_players, ias, bet);
        }
    }

    return{
        matches, createMatch,
        match
    }
}



