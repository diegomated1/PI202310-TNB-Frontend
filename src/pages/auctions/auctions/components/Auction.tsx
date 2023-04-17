import { useEffect, useState } from "react"
import IAuction from "../../../../interfaces/IAuction"
import cardApi from "../../../../services/card.api";
import ICard from "../../../../interfaces/ICard";
import { format } from 'date-format-parse';
import Buttons from "../../../../components/Button";
import { useNavigate } from "react-router-dom";

interface AuctionProps{
    auction: IAuction
}

export default function Auction({auction}:AuctionProps){

    const navigate = useNavigate();
    const [card, setCard] = useState<ICard|undefined>();

    const [timeEnd, setTimeEnd] = useState<number>();

    useEffect(()=>{
        var timeInit = new Date(auction.created);
        timeInit.setHours(timeInit.getHours() + auction.time);
        const interval = setInterval(() => {
            setTimeEnd((timeEnd) => {
                return (timeEnd?timeEnd-1000:timeInit.getTime());
            });
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
        const handleGetCard = async (id_card:string)=>{
            const card = await cardApi.getById(id_card);
            setCard(card);
        }
        handleGetCard(auction.id_card);
    }, []);

    return(
        <div className="w-full h-48 bg-red-200 flex justify-center items-center">
            <div className="w-[85%] h-40 bg-blue-100 flex">
                <div className="w-40 h-full bg-gray-200">
                    <img className="max-h-full max-w-full" src='https://pm1.narvii.com/8223/0003e3a4972784ca4038d475d3daf8404f073af0r1-1045-1465v2_hq.jpg' alt="" />
                </div>
                <div className="flex-1 bg-blue-100 flex">
                    <div className="flex-1 bg-green-200 flex flex-col pt-4 pl-4">
                        <div className="w-full h-10">
                            <span><strong>{card ? card.name : ''}</strong></span>
                        </div>
                        <div className="flex flex-col">
                            <span><strong>Postores:</strong> {auction.bids.length}</span>
                            <span><strong>Créditos máximos ofrecidos:</strong> {auction.bids[auction.bids.length-1].coins}</span>
                            <span><strong>Cartas maximas ofrecidas</strong> {auction.bids[auction.bids.length-1].cards.length}</span>
                        </div>
                    </div>
                    <div className="flex-1 bg-yellow-200 flex flex-col">
                        <div className="flex-[2] bg-red-200 flex justify-center items-center">
                            <strong>Termina en: {(timeEnd) ? format(new Date(timeEnd), 'HH:mm:ss'): '...'}</strong>
                        </div>
                        <div className="flex-1 bg-green-200 p-2">
                            <Buttons.buttonYellow onClick={()=>{navigate(`/auctions/${auction._id}`)}}>
                                Revisar Subasta
                            </Buttons.buttonYellow>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
