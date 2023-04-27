import { useEffect, useState } from "react"
import IBids from "../../../../interfaces/IBids"
import IUser from "../../../../interfaces/IUser";
import userApi from "../../../../services/user.api";
import { format } from "date-format-parse";
import Card from "./Card";

interface BidProps{
    bid: IBids
}

export default function Bid({bid}:BidProps){

    const [user, setUser] = useState<IUser>();

    useEffect(()=>{
        const handleGetUser = async () => {
            const _user = await userApi.getById(bid.id_user);
            setUser(_user);
        }
        handleGetUser();
    }, []);

    return(
        <div className="w-full h-36 pt-2 bg-gray-200">
            <div className="w-full h-full flex bg-red-100">
                <div className="flex-1 bg-gray-400 flex flex-col p-4">
                    <span className="flex-1 text-xl flex justify-center items-center">
                        <strong>{user ? user.username : ''}</strong>
                    </span>
                    <span className="flex-1 flex justify-center items-center">
                        {format(new Date(bid.time), 'HH:mm:ss.SS')}
                    </span>
                </div>
                <div className="flex-[2] flex">
                    <div className="flex-1 bg-red-200 flex justify-center items-center">
                        <span className="text-2xl">
                            <strong>{bid.coins} Coins</strong>
                        </span>
                    </div>
                    <div className="flex-[3] flex">
                        {bid.cards.map((card,i)=>(
                            <Card key={i} id_card={card}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

