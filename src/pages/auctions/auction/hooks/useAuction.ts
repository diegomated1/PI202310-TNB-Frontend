import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useSocket from "../../../../hooks/useSocket";
import IAuction from "../../../../interfaces/IAuction";


export default function useAuction(){

    const socket = useSocket();
    const [auctions, setAuctions] = useState<IAuction[]>([]); 

    useEffect(()=>{
        if(socket){

            function onCreateBidd(auction:IAuction){
                setAuctions((auctions)=>[...auctions, auction]);
            }

            socket.on('post:auctions', onCreateBidd);

            return () => {
                socket.off('post:auctions', onCreateBidd);
            }
        }
    }, [socket]);

    return [
        auctions
    ]
}


