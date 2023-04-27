import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useSocket from "../../../../hooks/useSocket";
import IAuction from "../../../../interfaces/IAuction";

type useCreateAuctionType = () => [IAuction|undefined, (auction: IAuction) => void]

const useCreateAuction:useCreateAuctionType = ()=>{

    const socket = useSocket(import.meta.env.VITE_SOCKET_AUCTION);
    const {user} = useAuth();
    const [auction, setAuction] = useState<IAuction>(); 

    useEffect(()=>{
        if(socket && user){

            function onCreateAuction(auction:IAuction){
                setAuction(auction);
            }

            socket.on('create:auction', onCreateAuction);

            return () => {
                socket.off('create:auction', onCreateAuction);
            }
        }
    }, [socket, user]);

    function createAuction(auction:IAuction){
        if(socket && user){
            socket.emit('create:auction', auction);
        }
    }

    return [
        auction,
        createAuction
    ]
}


export default useCreateAuction;