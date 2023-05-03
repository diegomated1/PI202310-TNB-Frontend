import { useState } from "react"
import Input from "../../../../components/Input";
import Buttons from "../../../../components/Button";
import userApi from "../../../../services/user.api";
import IUser from "../../../../interfaces/IUser";

export default function InfoUser({user}:{user?:IUser|null}){

    const [name, setName] = useState(user?.name);
    const [secondName, setSecondName] = useState(user?.second_name);
    const [username, setUsername] = useState(user?.username);
    const [email, setEmail] = useState(user?.email);
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    const handleEditProfile:React.FormEventHandler<HTMLFormElement> = async(e)=>{
        e.preventDefault();
        if(user){
            if(password==confirmPassword){
                const userData:{[key:string]:string|undefined} = {};
                if(name!=user.name) userData.name = name;
                if(secondName!=user.second_name) userData.secondName = secondName;
                if(username!=user.username) userData.username = username;
                if(email!=user.email) userData.email = email;

                if(Object.values(userData).length==0) return;
                await userApi.modify(user.id_user, userData);
                alert("Datos modificados")
            }
        }
    }

    return(
        <div className="w-full h-full">
            <form onSubmit={handleEditProfile} className="w-full h-full grid grid-cols-2">
                <div className="w-40 h-10 justify-center flex flex-col mt-5">
                    <p className="mb-1">Nombres:</p>
                    <Input placeholder="Nombres" onChange={(e)=>{setName(e.target.value)}} required defaultValue={name}/>
                </div>
                <div className="w-40 h-10 justify-center flex flex-col mt-5">
                    <p className="mb-1">Apellidos:</p>
                    <Input placeholder="Apellidos" onChange={(e)=>{setSecondName(e.target.value)}} required defaultValue={secondName}/>
                </div>
                <div className="w-40 h-10 justify-center flex flex-col mt-5">
                    <p className="mb-1">Username:</p>
                    <Input placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} required defaultValue={username}/>
                </div>
                <div className="w-40 h-10 justify-center flex flex-col mt-5">
                    <p className="mb-1">Email:</p>
                    <Input placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required defaultValue={email}/>
                </div>
                <div className="w-40 h-10 justify-center flex flex-col mt-5">
                    <p className="mb-1">Contraseña:</p>
                    <Input placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div className="w-40 h-10 justify-center flex flex-col mt-5">
                    <p className="mb-1">Confirmar Contraseña:</p>
                    <Input placeholder="Password" onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                </div>
                <div className="w-52 h-10">
                    <Buttons.buttonYellow type="submit">
                        Editar
                    </Buttons.buttonYellow>
                </div>
            </form>
        </div>
    )
}
