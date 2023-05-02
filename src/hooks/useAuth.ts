import { useEffect, useState } from "react";
import IUser from "../interfaces/IUser";
import userApi from "../services/user.api";

export default function useAuth(){
    const [user, setUser] = useState<IUser|null>(null);

    const auth = async ()=>{
        try{
            const user = await userApi.auth();
            setUser(user as IUser);
        }catch(error){
            const user = await userApi.getById("ilh2udb51");
            console.log(user);
            setUser(user);
        }
    }

    useEffect(()=>{
        auth();
    }, []);

    return user
}
