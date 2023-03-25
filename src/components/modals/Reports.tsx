import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

interface ModalReports{
    onClose?: ()=>void
}


export default function ModalReports({onClose}:ModalReports){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 ${isOpen ? '' : 'hidden'}`}
          onClick={onClose}
        >
            <form className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 flex flex-col">
                <div><span className="text-xl"><strong>Reporte de cambios</strong></span></div>
                <div>
                    <span className="text-gray-500 text-sm" >
                        {`${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`}
                    </span>
                </div>
                <div>
                    <p className="leading-5">
                        Ingrese un lenguaje natural a la lista de cambios realizados a esta carta 300 caracteres
                    </p>
                </div><br />
                <label className="w-full h-10">
                    Asunto: <br />
                    <Input />
                </label><br /><br />
                <label className="w-full h-20">
                    Descripcion: <br />
                    <textarea 
                        className="border rounded-md border-gray-100 w-full h-full max-w-full max-h-full min-w-full min-h-full shadow-xl relative p-2"
                    />
                </label><br />
                <div className="w-full h-16 flex justify-center items-center">
                    <div className="w-1/2 h-1/2">
                        <Button type="buttonYellow" text="Completar" onClick={onClose}/>
                    </div>
                </div>
            </form>
        </div>
    );
}


