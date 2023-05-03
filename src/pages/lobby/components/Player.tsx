import { useEffect, useState } from "react"
import IUser from "../../../interfaces/IUser";
import userApi from "../../../services/user.api";
import inventoryApi from "../../../services/inventory.api";
import heroeApi from "../../../services/heroe.api";
import IHeroe from "../../../interfaces/IHero";

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
                const deck = await inventoryApi.getInventory(id_user);
                setUser(user);
                //setIdHero(deck.inventory);
            }
        }
        handleGetUserInfo();
    }, []);

    return(
        <div className=" col-span-1 p-2">
            <div className="relative w-full h-full bg-blue-50">
                <div className="absolute top-[-10px] z-10 w-full flex justify-center">
                    <span className="bg-gray-500 p-1">
                        {(user) ? user.username : ''}
                    </span>
                </div>
                <div className="relative w-full h-full">
                    {(idHero) ? (
                        <img src={`${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${idHero}`} alt="" />
                    ): (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3IrwAE6VEDLdiafneqHmIgMhKe-eMEKcUKhXJGZeEFwcBk1OAHac-SdL0kbocCOcHmA&usqp=CAU" alt="" />
                    )}
                    {(!id_user) ? (
                        <div className="w-full flex justify-center">
                            <span className="absolute w-12 h-8 bg-slate-400 bottom-0 flex justify-center items-center">
                                IA
                            </span>
                        </div>
                    ) : ''}
                </div>
            </div>
        </div>
    )
}

