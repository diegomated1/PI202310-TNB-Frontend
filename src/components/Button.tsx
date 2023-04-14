import { ButtonHTMLAttributes } from "react";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export type Button = (props:BtnProps)=>JSX.Element

export interface IButton {
    [key:string]: Button,
    navbar: Button,
    buttonYellow: Button,
    buttonPurple: Button,
    buttonBlue: Button,
    buttonRed: Button,
    buttonGreen: Button,
    buttonLarge: Button,
    buttonBorder: Button,
    default: Button
}

const Buttons:IButton = {
    "navbar": (props)=>(
        <button {...props} className="text-white w-20 p-3 mb-2 mt-2 h-auto rounded-lg border-2 border-white justify-center items-center  " >
            <strong className="text-current" >{props.children}</strong>
        </button>
    ),
    "buttonYellow": (props)=>(
        <button {...props} className="w-full h-ful p-2 rounded-md bg-buttonYellow hover:bg-amber-500" >
            <strong>{props.children}</strong>
        </button>
    ),
    "buttonPurple": (props)=>(
        <button {...props} className="text-white w-full h-full p-2 rounded-md bg-buttonPurple hover:bg-purple-700" >
            <strong className="text-current">{props.children}</strong>
        </button>
    ),
    "buttonBlue": (props)=>(
        <button {...props} className="text-white w-full h-full rounded-md bg-buttonBlue hover:bg-sky-900 p-2" >
            <strong className="text-current">{props.children}</strong>
        </button>
    ),
    "buttonBorder": (props)=>(
        <button {...props} className="mx-5 px-4 py-2 font-semibold text-sm bg-white 
            text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 
            outline-offset-2 outline-blue-500 dark:bg-slate-700 dark:text-slate-200 
            dark:border-transparent" >
            <strong className="text-current">{props.children}</strong>
        </button>
    ),
    "buttonRed": (props)=>(
        <button {...props} className="text-white w-full h-full rounded-md bg-buttonRed hover:bg-red-800 p-2" >
            <strong className="text-current">{props.children}</strong>
        </button>
    ),
    "buttonGreen": (props)=>(
        <button {...props} className="text-white w-full h-full p-2 rounded-md bg-buttonGreen hover:bg-lime-900" >
            <strong className="text-current">{props.children}</strong>
        </button>
    ),
    "buttonLarge": (props)=>(
        <button {...props} className="text-white w-full h-full rounded-md bg-gray-200 hover:bg-lime-900 p-2" >
            <strong className="text-current">{props.children}</strong>
        </button>
    ),
    "default": (props)=>(
        <button {...props} className="w-full h-full rounded-md p-2 border-2 border-gray-500 bg-gray-300 hover:bg-gray-50">
            <strong>{props.children}</strong>
        </button>
    ),
};

export default Buttons;