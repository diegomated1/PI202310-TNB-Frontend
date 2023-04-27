import { useEffect, useState } from "react"
import IUser from "../../../interfaces/IUser";
import userApi from "../../../services/user.api";
import inventoryApi from "../../../services/inventory.api";

interface IPlayerProps{
    id_user: string
}

export default function Player({id_user}:IPlayerProps){

    const [user, setUser] = useState<IUser>();
    const [idHero, setIdHero] = useState<string>();

    useEffect(()=>{
        const handleGetUserInfo = async ()=>{
            if(id_user){
                const user = await userApi.getById(id_user);
                const deck = await inventoryApi.getByUserId(id_user);
                setUser(user);
                setIdHero(deck.id_user);
            }
        }
        handleGetUserInfo();
    }, []);

    return(
        <div className="h-full p-1 w-[25%]">
            {(idHero) ? (
                <img
                    className="object-cover h-full w-full"
                    src={`${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${idHero}`}
                />
            ): (
                <img
                    className="object-cover h-full w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3IrwAE6VEDLdiafneqHmIgMhKe-eMEKcUKhXJGZeEFwcBk1OAHac-SdL0kbocCOcHmA&usqp=CAU"
                />
            )}
        </div>
    )
}

