import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useSocket from "../../../../hooks/useSocket";
import IAuction from "../../../../interfaces/IAuction";


export default function useCreateAuction(){

    const socket = useSocket();
    const {user} = useAuth();
    const [auction, setAuction] = useState<IAuction>(); 

    useEffect(()=>{
        if(socket && user){

            function onCreateAuction(auction:IAuction){
                setAuction(auction);
            }

            socket.on('post:auctions', onCreateAuction);

            return () => {
                socket.off('post:auctions', onCreateAuction);
            }
        }
    }, [socket, user]);

    function createAuction(auction:IAuction){
        if(socket && user){
            socket.emit('post:auctions', auction);
        }
    }

    return [
        auction,
        createAuction
    ]
}


