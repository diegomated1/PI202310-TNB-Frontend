import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useSocket from "../../../../hooks/useSocket";
import IAuction from "../../../../interfaces/IAuction";
import auctionApi from "../../../../services/auction.api";
import IBids from "../../../../interfaces/IBids";


export default function useAuction(id_auction:string):
    [IAuction|null|undefined, (id_auction: string, coins: number, cards: string[])=>void, (id_auction: string)=>void]
{

    const socket = useSocket(import.meta.env.VITE_SERVER_AUCTION, {query: {id_auction}, path: '/auction'});
    const [auction, setAuction] = useState<IAuction|null|undefined>(); 
    const {user} = useAuth();

    useEffect(()=>{
        const handleGetAuction = async () => {
            const auction = await auctionApi.getById(id_auction);
            setAuction(auction);
        }
        handleGetAuction();
    }, []);


    useEffect(()=>{
        if(socket && auction){

            function onCreateBidd(_id_auction:string, bid:IBids){
                if(_id_auction==id_auction){
                    setAuction(auction=>({...auction!, bids: [...auction!.bids!, bid]}));
                }
            }

            socket.on('create:bid', onCreateBidd);

            return () => {
                socket.off('create:bid', onCreateBidd);
            }
        }
    }, [socket, auction]);

    function createBid(id_auction:string, coins:number, cards:string[]){
        if(socket && user){
            socket.emit('create:bid', id_auction, user.id_user, coins, cards);
        }
    }

    function deleteBid(id_auction:string){
        if(socket && user){
            socket.emit('delete:bid', id_auction, user.id_user);
        }
    }

    return [
        auction,
        createBid,
        deleteBid
    ]
}


