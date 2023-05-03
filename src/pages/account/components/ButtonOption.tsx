import { ButtonHTMLAttributes } from "react";
import Buttons from "../../../components/Button";

interface IButtonOptionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isSelected: boolean
}

export default function ButtonOption(props:IButtonOptionProps){
    return(
        <div className="mt-2 w-full h-12">
            {(props.isSelected) ? (
                <Buttons.buttonYellow {...props}>
                    {props.children}
                </Buttons.buttonYellow>
            ) : (
                <Buttons.buttonLarge {...props}>
                    {props.children}
                </Buttons.buttonLarge>
            )}
        </div>
    )
}
