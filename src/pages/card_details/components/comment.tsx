import { useEffect, useState } from "react";
import Icons from "../../../components/Icons";
import IComments from "../../../interfaces/IComments";
import userApi from "../../../services/user.api";
import { strict } from "assert";

interface ICommentProps{
    comment: IComments,
}

export default function Comment(props:ICommentProps) {
    
    const [userName, setUserName] = useState("");

    

    useEffect(() => {
        const handleGetCard = async () => {
            const data = await userApi.getById(props.comment.id_usuario);
            setUserName(data.username);
        }
        handleGetCard();
    }, []);

    return (
        <div className=" border   border-gray-500  ">
            <div className="p-1 w-full flex">
                <div className="w-[90%] p-1">
                    <h2 className="text-2xl p-1"><strong>Molano GOD{userName}</strong></h2>
                </div>
                <div className=" flex  text-right w-[10%] p-3">
                    <Icons.edit 
                    />
                    <Icons.trash />
                </div>
            </div>
            <div className="p-1">
                <div className="p-1 flex">
                    <Icons.star />
                    <Icons.star />
                    <Icons.star />
                    <Icons.star />
                    <Icons.star />
                </div>
                <h2 className="text-base p-2">{props.comment.fecha_comentario}</h2>
                <div className="p-1">
                    <label className="text-lg p-1">{props.comment.comentario}</label>
                </div>
                
            </div>
        </div>
    )
}

function Images(id_image:string){
    return(
        <div>
            <img src="" alt="" />
        </div>
    )
}


