import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth"
import AdminCardsNavBar from "../../components/NavBar";
import Buttons from "../../components/Button";
import Icons from "../../components/Icons";
import ButtonOption from "./components/ButtonOption";
import Facturas from "./components/tabs/Facturas";
import InfoUser from "./components/tabs/InfoUser";
import MyAccount from "./components/tabs/MyAccount";

export default function Account(){

    const user = useAuth();

    const [tab, setTab] = useState(0);

    return(
        <div className="w-screen h-screen flex flex-col bg-red-100">
            <AdminCardsNavBar/>
            <div className="flex-1 flex justify-center items-center">
                <div className="w-9/12 h-full bg-blue-100 flex flex-col">
                    <div className="relative w-full h-48 bg-red-200">
                        <div className="absolute h-48 aspect-square bottom-0 transform translate-y-1/2 left-10 rounded-full bg-green-300"/>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="w-full h-24 bg-white">
                            <div className="w-full h-3/4 bg-red-100 flex">
                                <div className="w-36"/>
                                <div className="flex-1 border-b border-black flex">
                                    <div className="ml-32 flex justify-center items-center">
                                        <span className="text-4xl">{user?.username}</span>
                                    </div>
                                    <div className="ml-auto w-64 flex">
                                        <div className="flex-1">
                                            <Buttons.navbar>
                                                <div className="flex justify-evenly items-center">
                                                    <Icons.currency/>
                                                    <span className="text-black">Banco</span>
                                                </div>
                                            </Buttons.navbar>
                                        </div>
                                        <div className="flex-1">
                                            <Buttons.navbar>
                                                <div className="flex justify-evenly items-center">
                                                    <Icons.profile/>
                                                    <span className="text-black">cuenta</span>
                                                </div>
                                            </Buttons.navbar>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-blue-100 flex">
                            <div className="w-48 ml-10 bg-green-300 flex flex-col justify-center">
                                <ButtonOption isSelected={tab==0} onClick={()=>{setTab(0)}}>
                                    <span className="text-black">Mi cuenta</span>
                                </ButtonOption>
                                <ButtonOption isSelected={tab==1} onClick={()=>{setTab(1)}}>
                                    <span className="text-black">Facturas</span>
                                </ButtonOption>
                                <ButtonOption isSelected={tab==2} onClick={()=>{setTab(2)}}>
                                    <span className="text-black">Datos personales</span>
                                </ButtonOption>
                            </div>
                            <div className="flex-1 bg-yellow-200 p-10">
                                {(tab==0) ? (
                                    <MyAccount/>
                                ) : (tab==1) ? (
                                    <Facturas id_user={user?.id_user}/>
                                ) : (
                                    <InfoUser user={user}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

