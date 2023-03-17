import { useEffect, useState } from "react"
import IUser from "../../../interfaces/IUser";
import userApi from "../../../services/user.api";

interface IPlayerProps{
    id_user?: string
}

export default function Player({id_user}:IPlayerProps){

    const [userInfo, setUserInfo] = useState<IUser>();

    const handleGetUserInfo = async ()=>{
        if(id_user){
            const user = await userApi.getById(id_user);
            setUserInfo(user);
        }
    }

    useEffect(()=>{
        handleGetUserInfo();
    }, []);

    return(
        <div className=" col-span-1 p-2">
            <div className="relative w-full h-full bg-blue-50">
                <div className="absolute top-[-10px] z-10 w-full flex justify-center">
                    <span className="bg-gray-500 p-1">
                        {(userInfo) ? userInfo.username : ''}
                    </span>
                </div>
                <div className="relative w-full h-full">
                    {(!id_user) ? (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3IrwAE6VEDLdiafneqHmIgMhKe-eMEKcUKhXJGZeEFwcBk1OAHac-SdL0kbocCOcHmA&usqp=CAU" alt="" />
                    ): (
                        <img src="https://static.wikia.nocookie.net/6f42976a-5e1f-4249-b6c9-d8ba666685b9/scale-to-width/755" alt="" />
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

