import { useEffect, useState } from "react";
import IUser from "../interfaces/IUser";
import userApi from "../services/user.api";

export default function useAuth(){
    const [user, setUser] = useState<IUser|null>(null);

    const auth = async ()=>{
        try{
            //const user = await userApi.auth();
            const a = localStorage.getItem('id_user');
            const user = await userApi.getById(a||'');
            setUser(user);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        auth();
    }, []);

    return user
}
