import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import Icons from "./Icons";

type InputProps = {
        /**
     *  es un placeholder, letras que aprecen al fondo
     */
    placeholder?: string;
    /**
     * escoge eltipo de input, hay que ver bien los tipos de input y ponerlo
     */
    inputType?: string;
    /**
     * recibe un nombre de icono definido en la bilbiote de iconos
     */
    icon?: string;
    /**
     * recibe una funcion onclick, normalmente para un icono
     */
    onClick?: () => void;
    /**
     * recibe una funcion de estado con tipo string
     */
    onChange?: ChangeEventHandler<HTMLInputElement>
    
    value?: string
}

export default function Input({ placeholder, inputType, icon, onClick, onChange, value }: InputProps) {
    if(value){
        return (
            <div className="w-full h-full shadow-xl relative">
                <input className="w-full focus:outline-none h-full rounded-md p-2 shadow-xl" placeholder={placeholder} type={inputType} value={value}  required onChange={onChange} />
                {icon && <Icons icon={icon} onClick={onClick}  />}
            </div>)
    }
    else if(onChange){
        return (
            <div className="w-full h-full shadow-xl relative">
                <input className="w-full focus:outline-none h-full rounded-md p-2 shadow-xl" placeholder={placeholder} type={inputType} value={value}  required onChange={onChange} />
                {icon && <Icons icon={icon} onClick={onClick}  />}
            </div>
        )
    }else{
        return (
            <div className="w-full h-full shadow-xl relative">
                <input className="w-full focus:outline-none h-full rounded-md p-2 shadow-xl" placeholder={placeholder} type={inputType} value={value} required onChange={onChange} />
                {icon && <Icons icon={icon} onClick={onClick}  />}
            </div>
        )
    }
    

}
