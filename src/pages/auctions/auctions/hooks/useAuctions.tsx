import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useSocket from "../../../../hooks/useSocket";
import IAuction from "../../../../interfaces/IAuction";
import auctionApi from "../../../../services/auction.api";


export default function useAuctions(){

    const socket = useSocket();
    const [auctions, setAuctions] = useState<IAuction[]|undefined>(); 

    const handleGetAuctions = async () => {
        try{
            const auctions = await auctionApi.getAll();
            setAuctions(auctions);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        handleGetAuctions();
    }, []);

    useEffect(()=>{
        if(socket && auctions){

            function onCreateAuction(auction:IAuction){
                setAuctions((auctions)=>[...auctions!, auction]);
            }

            socket.on('post:auctions', onCreateAuction);

            return () => {
                socket.off('post:auctions', onCreateAuction);
            }
        }
    }, [socket, auctions]);

    return [
        auctions
    ]
}


