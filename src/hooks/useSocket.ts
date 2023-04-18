import { useEffect, useState } from "react";
import * as io from 'socket.io-client';

/**
 * Custom hook for managing a socket connection. 
 * 
 * @param {string} url The URL of the socket server to connect to.
 * @returns {io.Socket|null} The socket instance or null if it has not been initialized yet.
 */
export default function useSocket(url?:string, opts?:Partial<io.ManagerOptions & io.SocketOptions>){
    const [socket, setSocket] = useState<io.Socket|null>(null);

    useEffect(() => {
        if(url){
            console.log(url, opts)
            // Creates a new socket instance and sets it to the state.
            const newSocket = io.connect(url, opts);
            console.log(newSocket)
            setSocket(newSocket);

            // Disconnects the socket when the component using the hook unmounts.
            return () => {
                newSocket.disconnect();
            };
        }
    }, [url]);
  
    return socket;
};