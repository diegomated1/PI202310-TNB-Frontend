import { useEffect } from "react";
import useAuctions from "./hooks/useAuctions"
import AdminCardsNavBar from "../../../components/NavBar";
import Auction from "./components/Auction";


export default function Auctions(){

    const [auctions] = useAuctions();

    return(
        <div className="w-screen h-screen bg-gray-300 flex flex-col">
            <AdminCardsNavBar/>
            <div className="flex-1 flex">
                <div className="flex-1">

                </div>
                <div className="flex-[3] p-10 flex flex-col">
                    
                    <div className=" flex-1 bg-white border border-gray-500 rounded-lg">
                        <ul className="w-full h-full flex flex-col">
                            {auctions.map((auction, i)=>(
                                <li key={i}>
                                    <Auction auction={auction}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


