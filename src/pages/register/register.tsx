import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCardsNavBar from "../../components/AdminCardsNavBar"
import Button from "../../components/Button"
import Icons from "../../components/Icons"
import Input from "../../components/Input"
import userApi from "../../services/user.api";

export default function Login() {
    const navigate = useNavigate()

    const [typeInput, setType] = useState<string>("password");

    const showPassword =()=>{
        if(typeInput == "password"){
            setType("text")
        }else{
            setType("password")
        }
    }

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [alertRegister, setAlert] = useState<string>("");

    const handleRegister = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        var data = await userApi.register(email,username,password);
        if(data.error == "0"){
            navigate("/admin/cards")
        }else{
            setAlert(data.message)
        }
    }   

    //bg-gradient-to-b from-gradientFrom to-gradientTo

    return (
        <div className="h-screen">
            <AdminCardsNavBar />
            <div className="h-[calc(100%-50px)]">
                <figure className="h-full relative">
                    <img className="h-full w-full object-fit m-0" src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/4826003140499/battle-cat-jinx-prestige.png" alt="imagen de fondo" />
                </figure>
                <div className="rounded-md w-[380px] h-[560px] bg-smallgray absolute top-[calc(18%)] left-[calc(5%)] flex-col p-2 bg-opacity-70">
                    <form className="flex-col flex justify-center items-center" onSubmit={handleRegister} >
                        <h1 className="font-extrabold text-4xl text-center text-yellow-300 mt-12 italic" >
                            NEXUS BATTLE
                        </h1>
                        <h2 className="flex justify-center text-2xl font-semibold mt-10">
                            Registrate
                        </h2>
                        <div className="w-[80%] justify-center flex flex-col mt-5">
                            <p className="mb-2">Username:</p>
                            <Input placeholder="Username" inputType="text" onChange={setEmail}/>
                        </div>
                        <div className="w-[80%] justify-center flex flex-col mt-3">
                            <p className="mb-2">Correo Electronico:</p>
                            <Input placeholder="Correo Electronico" inputType="email" onChange={setEmail}/>
                        </div>
                        <div className="w-[80%] justify-center flex flex-col mt-3">
                            <p className="mb-2">Contraseña:</p>
                            <Input placeholder="Contraseña" inputType={typeInput} icon="eye" onClick={showPassword} onChange={setPassword}/>
                        </div>
                        <p className="mt-4">{alertRegister}</p>
                        <div className="mt-3 font-light">
                            <Button text="Iniciar Sesion" type="buttonPurple"/>
                        </div>
                        <div className="text-sm text-zinc-700 mt-3">
                            <p>
                                No tienes una cuenta? <a href="" className="border-b border-buttonYellow">Registrarse</a>
                            </p>
                            <p>
                                Has olvidado tu contraseña? <a className="border-b border-buttonYellow" href="">Recuperar contraseña</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}