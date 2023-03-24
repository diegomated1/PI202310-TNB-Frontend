import { useState } from "react";
import AdminCardsNavBar from "../../components/AdminCardsNavBar";
import Button from "../../components/Button";
import Icons from "../../components/Icons";



export default function Account() {


    const [showContainer, setShowContainer] = useState<{ [key: number]: boolean }>({});

    const handleIconClick = (id: number) => {
        setShowContainer({
            ...showContainer,
            [id]: !showContainer[id],
        });
    };

    const [menuActivo, setMenuActivo] = useState("");

    const mostrarMenu1 = () => {
        setMenuActivo('menu1');
    };

    const mostrarMenu2 = () => {
        setMenuActivo('menu2');
    };
    return (
        <div className="w-full h-screen flex flex-wrap flex-col">
            <AdminCardsNavBar></AdminCardsNavBar>
            <div className="flex flex-col flex-1">
                <div className="">
                    <div className="flex items-center p-4">
                        <figure className="w-32 h-32 rounded-full overflow-hidden">
                            <img className="object-contain" src="./imagen/th.jpeg" alt="" />
                        </figure>
                        <h1 className="text-5xl p-4">
                            Bienvenida, DIEGO
                        </h1>
                    </div>
                </div>
                <div className="flex border-b justify-evenly items-center p-4">
                    <Button type={"buttonborder"} text="Cuenta" onClick={mostrarMenu1}></Button>
                    <Button type={"buttonborder"} text="Banco" onClick={mostrarMenu2}></Button>
                </div>
                <div className="flex  flex-1">
                    <div className="flex w-[40%] flex-col">
                        {menuActivo === 'menu1' && (
                            <div className="rounded">
                                <div className=" border border-slate-100 p-4 rounded">
                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">Datos Personales</h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(1)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>
                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">
                                            Metodos de Pago
                                        </h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(2)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>
                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">
                                            Mi Carrito
                                        </h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(3)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>
                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">
                                            Seguridad
                                        </h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(4)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>
                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">
                                            Privacidad
                                        </h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(5)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {menuActivo === 'menu2' && (
                            <div className=" rounded">
                                <div className="border border-slate-100 p-4 rounded">
                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">
                                            Subasta
                                        </h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(1)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>

                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">
                                            Mis creditos
                                        </h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(2)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>
                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">
                                            Jugar en Linea
                                        </h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(3)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>
                                    <div className="flex border justify-between items-center border-slate-100 p-4 text-2xl">
                                        <h1 className="text-xl p-1">
                                            Mi Banco
                                        </h1>
                                        <div className="cursor-pointer" onClick={() => handleIconClick(4)}>
                                            <Icons icon="right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex w-[60%] rounded">
                        {menuActivo === 'menu1' && (
                            <div>
                                <div className=" border border-slate-100 p-4 rounded">
                                    <div className="" >
                                        {showContainer[1] && (
                                            <div className="border border-slate-100 p-4 rounded">Contenido del contenedor rojo
                                            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                                            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                                            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>
                                        )}
                                    </div>
                                    <div className="" >
                                        {showContainer[2] && (
                                            <div className="border border-slate-100 p-4 rounded">Contenido del contenedor Azul</div>
                                        )}
                                    </div>
                                    <div className="" >
                                        {showContainer[3] && (
                                            <div className="border border-slate-100 p-4 rounded">Contenido del contenedor verde</div>
                                        )}
                                    </div>
                                    <div className="" >
                                        {showContainer[4] && (
                                            <div className="border border-slate-100 p-4 rounded">Contenido del contenedor morado</div>
                                        )}
                                    </div>
                                    <div className="" >
                                        {showContainer[5] && (
                                            <div className="border border-slate-100 p-4 rounded">Contenido del contenedor amarillo</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {menuActivo === 'menu2' && (
                           <div>
                           <div>
                               <div className="" >
                                   {showContainer[1] && (
                                       <div className="border border-slate-100 p-4 rounded">Contenido del contenedor rojo1</div>
                                   )}
                               </div>
                               <div className="" >
                                   {showContainer[2] && (
                                       <div className="border border-slate-100 p-4 rounded">Contenido del contenedor Azul1</div>
                                   )}
                               </div>
                               <div className="" >
                                   {showContainer[3] && (
                                       <div className="border border-slate-100 p-4 rounded">Contenido del contenedor verde1</div>
                                   )}
                               </div>
                               <div className="" >
                                   {showContainer[4] && (
                                       <div className="border border-slate-100 p-4 rounded">Contenido del contenedor morado1</div>
                                   )}
                               </div>
                               
                           </div>
                       </div> 
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}
