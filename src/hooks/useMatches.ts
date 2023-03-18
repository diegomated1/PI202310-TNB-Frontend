import { useEffect, useState } from "react";
import IMatch from "../interfaces/IMatch";
import useAuth from "./useAuth";
import useSocket from "./useSocket";

/**
 * Custom hook for managing matches.
 * @returns {Object} An object with the following properties:
 *   - matches: An array of all matches.
 *   - createMatch: A function to create a new match.
 *   - joinMatch: A function to allow the user to join a match.
 *   - match: The current match the user is in.
 */
export default function useMatches(){
    
    // socket that allow to connect server 'game_create'
    const socket = useSocket("ws://localhost:3000");
    // useAuth for get user session
    const {user} = useAuth();

    // state for almacening all matches info
    const [matches, setMatches] = useState<IMatch[]>([]);
    // state for almacening match info (players, ias, bet, etc.)
    const [match, setMatch] = useState<IMatch|null>(null);

    useEffect(()=>{
        if(socket){
            /**
             * Function that adds a new match to the state and sets the current match if the user created it.
             * @param {IMatch} new_match The new match to add.
             */
            function matchCreate(new_match:IMatch){
                setMatches((matches)=>[...matches, new_match]);
                if(user && user.id_user==new_match.id_owner){
                    setMatch(new_match);
                }
            }

            /**
             * Function for get all matches
             * @param {IMatch[]} matches All matches
             */
            function getMatches(matches?:IMatch[]){
                if(matches){
                    setMatches(matches);
                }
            }

            /**
             * Function to check if the user joined a match
             * @param id_user id of the user who joined
             * @param match match of the user who joined
             */
            function matchUserJoin(id_user:string, match:IMatch){
                if(user && id_user==user.id_user){
                    setMatch(match);
                }
            }

            // Events that this custom hook listens to
            socket.on('match:get:all', getMatches);
            socket.on('match:create', matchCreate);
            socket.on('match:user:join', matchUserJoin);

            // when this custom hook is mounted, fire event to get all matches 
            socket.emit('match:get:all');

            // Clean up function to remove the event listener when the component unmounts.
            return () => {
                socket.off('match:get:all', getMatches);
                socket.off('match:create', matchCreate);
                socket.off('match:user:join', matchUserJoin);
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
            socket.emit("match:create", user.id_user, number_players, ias, bet);
        }
    }

    /**
     * Function that allows the user join in some match 
     * @param id_match id of the match who the use want to join
     */
    function joinMatch(id_match:string){
        if(socket && user){
            socket.emit("match:user:join", user.id_user, id_match);
        }
    }

    return{
        matches, createMatch, joinMatch,
        match
    }
}



