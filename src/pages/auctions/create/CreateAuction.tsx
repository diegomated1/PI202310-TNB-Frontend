import { useEffect } from "react";
import useCreateAuction from "./hooks/useCreateAuction"


export default function CreateAuction(){

    const [auction, setAuction] = useCreateAuction();

    useEffect(()=>{
        if(auction){
            console.log(auction);
        }
    }, [auction]);

    return(
        <div className="flex justify-center items-center">
            hola
        </div>
    )
}


