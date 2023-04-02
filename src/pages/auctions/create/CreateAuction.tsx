import { useEffect, useState } from "react";
import useCreateAuction from "./hooks/useCreateAuction"
import AdminCardsNavBar from "../../../components/NavBar";
import Input from "../../../components/Input";


export default function CreateAuction(){

    //const [auction, setAuction] = useCreateAuction();

    const [minBidd, setMinBidd] = useState(0);

    return(
        <div className="w-screen h-screen bg-red-200 flex flex-col">
            <AdminCardsNavBar/>
            <div className="flex-1 flex p-5">
                <div className="flex-1">

                </div>
                <div className="flex-[2] flex flex-col bg-green-200">
                    <div className="h-40 bg-blue-100">
                        
                    </div>
                    <div className="flex-1 flex flex-col p-5">
                        <h1 className="font-bold text-2xl">Apuesta:</h1>
                        <span>Oferta minima: </span>
                        <div className="w-20 h-8 mb-10">
                            <Input onChange={(e) => { setMinBidd(parseInt(e.target.value)) }} placeholder="0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


