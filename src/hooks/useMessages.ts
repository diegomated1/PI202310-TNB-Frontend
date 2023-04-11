import useSocket from "./useSocket";
import useAuth from "./useAuth";
import IMessage from "../interfaces/IMessage";
import { useEffect } from "react";
import IUser from "../interfaces/IUser";


export default function useMessages(setMessages:React.Dispatch<React.SetStateAction<IMessage[]>>, user:IUser|null, id_room?:string){
    const socket = useSocket(import.meta.env.VITE_SOCKET_CHAT);

    useEffect(()=>{
        if(socket){
            function receivedMessage(message:IMessage){
                console.log(message);
                setMessages((prevs)=>[...prevs, message]);
            }

            socket.on('chat:message', receivedMessage);

            socket.emit('chat:join', id_room);

            return ()=>{
                socket.off('message', receivedMessage);
            }
        }
    }, [socket]);

    const sendMessage = (message:string) => {
        if(socket && user){
            const newMsg:IMessage = {
                id_user: user.id_user,
                username: user.username,
                text: message
            }
            socket.emit('chat:message', newMsg);
        }
    }

    return [
        sendMessage
    ]
}


