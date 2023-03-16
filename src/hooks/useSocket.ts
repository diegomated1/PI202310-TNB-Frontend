import { useEffect, useState } from "react";
import * as io from 'socket.io-client';

/**
 * @param url socket server url 'ws://host:port'
 * @returns {io.Socket} instance of the socket
 */
export default function useSocket(url:string){
    const [socket, setSocket] = useState<io.Socket|null>(null);

    useEffect(() => {
        const newSocket = io.connect(url);
        setSocket(newSocket);
    
        return () => {
            newSocket.disconnect();
        };
    }, [url]);
  
    return socket;
};