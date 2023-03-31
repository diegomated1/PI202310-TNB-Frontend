import { useEffect } from "react";
import useAuctions from "./hooks/useAuctions"
import AdminCardsNavBar from "../../../components/NavBar";


export default function Auctions(){

    //const [auctions] = useAuctions();

    return(
        <div className="w-screen h-screen bg-red-200 flex flex-col">
            <AdminCardsNavBar/>
            <div className="flex-1 flex">
                <div className="flex-1">

                </div>
                <div className="flex-[3] flex flex-col">
                    <div className="h-20 bg-gray-200">

                    </div>
                    <div className="flex-1 bg-green-200 flex">
                        <div className="flex-1">

                        </div>
                        <div className="flex-[3] bg-blue-200">

                        </div>
                    </div>
                    <div className="h-20 bg-gray-200">

                    </div>
                </div>
            </div>
        </div>
    )
}


