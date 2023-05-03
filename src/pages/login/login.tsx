import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCardsNavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"
import userApi from "../../services/user.api";
import Icons from "../../components/Icons";

export default function Login() {
    const navigate = useNavigate()

    const [typeInput, setType] = useState<string>("password");

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [alertlogin, setAlert] = useState<string>("");


    const handleLoggin=async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        var data = await userApi.login(email,password)
        if(data.error == "0"){
            navigate("/admin/cards")
        }else{
            setAlert(data.message)
        }
    }   

    const showPassword =()=>{
        if(typeInput == "password"){
            setType("text")
        }else{
            setType("password")
        }
        
    }

    return (
        <div className="h-screen">
            <AdminCardsNavBar />
            <div className="h-[calc(100%-50px)]">
                <figure className="h-full relative">
                    <img className="h-full w-full object-fit m-0" src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/4826003140499/battle-cat-jinx-prestige.png" alt="imagen de fondo" />
                </figure>
                <div className="rounded-md w-[380px] h-[530px] bg-smallgray absolute top-[calc(18%)] left-[calc(5%)] flex-col p-2 bg-opacity-40">
                    <form className="flex-col flex justify-center items-center" onSubmit={handleLoggin} >
                        <h1 className="font-extrabold text-4xl text-center text-yellow-300 mt-12 italic" >
                            NEXUS BATTLE
                        </h1>
                        <h2 className="flex justify-center text-2xl font-semibold mt-10">
                            Iniciar Sesion
                        </h2>
                        <div className="w-[80%] justify-center flex flex-col mt-10">
                            <p className="mb-2">Correo Electronico:</p>
                            <Input placeholder="Correo electronico" type={'email'} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="w-[80%] justify-center flex flex-col mt-4">
                            <p className="mb-2">Contraseña:</p>
                            <Input placeholder="Contraseña" type={typeInput} icon={Icons.eye} onClickIcon={showPassword} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <p className="mt-4">{alertlogin}</p>
                        <div className="mt-6 font-light">
                            <Button.buttonPurple>Iniciar Sesion</Button.buttonPurple>
                        </div>
                        <div className="text-sm text-zinc-700 mt-6">


                            
                            <p>
                                No tienes una cuenta? <a onClick={()=>{navigate('/register')}} href="" className="border-b border-buttonYellow">Registrarse</a>
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