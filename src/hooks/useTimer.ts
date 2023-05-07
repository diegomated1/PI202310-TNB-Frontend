import { useEffect, useState } from "react";

export default function useTimer(start?:Date, end?:number){

    const [started, setStarted] = useState(false);
    const [time, setTime] = useState<number>();

    useEffect(()=>{
        if(start && end){
            setStarted(true);
        }
    }, [start, end]);

    useEffect(()=>{
        if(started){
            const interval = setInterval(() => {
                setTime(time=>time!-1000);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [started]);

    return time
}
