import { useEffect, useState } from "react";
import useSocket from "../../../../hooks/useSocket";
import IAuction from "../../../../interfaces/IAuction";
import auctionApi from "../../../../services/auction.api";


export default function useAuctions(){

    const socket = useSocket(import.meta.env.VITE_SERVER_AUCTION);
    const [auctions, setAuctions] = useState<IAuction[]>([]); 

    useEffect(()=>{
        const handleGetAuctions = async () => {
            const auctions = await auctionApi.getAll();
            setAuctions(auctions);
        }
        handleGetAuctions();
    }, []);

    useEffect(()=>{
        if(socket){

            function onCreateAuction(auction:IAuction){
                setAuctions((auctions)=>[...auctions, auction]);
            }

            socket.on('create:auction', onCreateAuction);

            return () => {
                socket.off('create:auction', onCreateAuction);
            }
        }
    }, [socket]);

    return [
        auctions
    ]
}


