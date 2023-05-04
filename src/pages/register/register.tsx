import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminCardsNavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"
import userApi from "../../services/user.api";
import Icons from "../../components/Icons";

export default function Register() {
    const navigate = useNavigate()

    const [typeInput, setType] = useState<string>("password");

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [secondName, setSecondName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [alertRegister, setAlert] = useState<string>("");

    const handleRegister = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        var data = await userApi.register(email, name, secondName, username,password);
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
        <div className="w-screen h-screen">
            <AdminCardsNavBar />
            <div className="h-[calc(100%-50px)]">
                <figure className="h-full relative">
                    <img className="h-full w-full object-fit m-0" src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/4826003140499/battle-cat-jinx-prestige.png" alt="imagen de fondo" />
                </figure>
                <div className="rounded-md w-[380px] h-[630px] bg-smallgray absolute top-[calc(18%)] left-[calc(5%)] flex flex-col p-2 bg-opacity-70 justify-center">
                    <form className="flex-col flex justify-center items-center" onSubmit={handleRegister} >
                        <h1 className="font-extrabold text-4xl text-center text-yellow-300 mt-5 italic" >
                            NEXUS BATTLE
                        </h1>
                        <h2 className="flex justify-center text-2xl font-semibold mt-5">
                            Registrate
                        </h2>
                        <div className="w-[80%] justify-center flex mt-1">
                            <div className="w-[80%] justify-center flex flex-col mt-5">
                                <p className="mb-2">Nombres:</p>
                                <Input placeholder="Nombres" onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                            <div className="w-[80%] justify-center flex flex-col mt-5">
                                <p className="mb-2">Apellidos:</p>
                                <Input placeholder="Apellidos" onChange={(e)=>{setSecondName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="w-[80%] justify-center flex flex-col mt-1">
                            <p className="mb-2">Username:</p>
                            <Input placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className="w-[80%] justify-center flex flex-col mt-1">
                            <p className="mb-2">Correo Electronico:</p>
                            <Input placeholder="Correo Electronico"  onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="w-[80%] justify-center flex flex-col mt-1">
                            <p className="mb-2">Contraseña:</p>
                            <Input type={typeInput} placeholder="Contraseña" onClickIcon={showPassword} onChange={(e)=>{setPassword(e.target.value)}} icon={Icons.eye}/>
                        </div>
                        <p className="mt-4">{alertRegister}</p>
                        <div className="mt-3 font-light">
                            <Button.buttonPurple>Registrarse</Button.buttonPurple>
                        </div>
                        <div className="text-sm text-zinc-700 mt-3">
                            <p>
                                Ya tienes una cuenta? <a onClick={()=>{navigate('/login')}} href="" className="border-b border-buttonYellow">Login</a>
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