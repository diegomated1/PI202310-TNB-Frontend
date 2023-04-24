import { useState } from "react";

interface IAlertProps {
    children?: React.ReactNode;
}

export default function Alert({children}:IAlertProps){
    return(
        <div className="w-40 h-20 bg-yellow-200 border border-yellow-500 text-yellow-700 rounded absolute right-0 top-1/2 transform -translate-y-1/2t-0" role="alert">
            {children}
        </div>
    )
}

