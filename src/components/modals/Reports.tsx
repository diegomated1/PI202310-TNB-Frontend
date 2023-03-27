import { useState } from "react";
import cardApi from "../../services/card.api";
import Button from "../Button";
import Icons from "../Icons";
import Input from "../Input";

interface ModalReports{
    /**
     * Variable for check if the modal is open or close
     */
    isOpen: boolean,
    /**
     * Function for change to close or open
     */
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    /**
     * Function that is executed when accepted  
     */
    onAccept?: ()=>void,
    /**
     * Function that is executed when close modal  
     */
    onClose?: ()=>void,
}

export default function ModalReports({isOpen, setIsOpen, onAccept, onClose}:ModalReports){

    const [post, setPost] = useState('');
    const [description, setDescription] = useState('');
 

    const handleClose = ()=>{
        setIsOpen(false);
        if(onClose) onClose();
    }

    const handleAccept = async ()=>{
        setIsOpen(false);
        await cardApi.addReport(post, description);
        if(onAccept) onAccept();
    }

    return (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 ${isOpen ? '' : 'hidden'}`}
        >
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 flex flex-col">
                <button
                    onClick={handleClose}
                    className="absolute top-1 right-1 w-8 h-8 border border-gray-200 bg-gray-300 hover:bg-gray-200 flex justify-center items-center">
                    <Icons.x/>
                </button>
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
                    <Input onChange={(e)=>{setPost(e.target.value)}} />
                </label><br /><br />
                <label className="w-full h-20">
                    Descripcion: <br />
                    <textarea
                        onChange={(e)=>{setDescription(e.target.value)}}
                        className="border rounded-md border-gray-100 w-full h-full max-w-full max-h-full min-w-full min-h-full shadow-xl relative p-2"
                    />
                </label><br />
                <div className="w-full h-16 flex justify-center items-center">
                    <div className="w-1/2 h-1/2">
                        <Button.buttonYellow onClick={handleAccept}>Completar</Button.buttonYellow>
                    </div>
                </div>
            </div>
        </div>
    );
}


