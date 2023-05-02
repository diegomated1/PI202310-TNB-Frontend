import { InputHTMLAttributes, useEffect } from "react";
import {Icon} from "./Icons";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /**
     * recibe un nombre de icono definido en la bilbiote de iconos
     */
    icon?: Icon;
    /**
     * 
     */
    onClickIcon?: ()=>void
}

export default function Input(props: InputProps) {

    return(
        <div className="w-full h-full shadow-md relative bg-transparent">
            <input className="w-full focus:outline-double h-full rounded-md p-2 shadow-xl border border-gray-100"
                {...props} 
            required/>
            {(props.icon && props.onClickIcon) ? <props.icon onClick={props.onClickIcon}/> : ''}
        </div>
    )
}
