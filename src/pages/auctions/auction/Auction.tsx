import { useEffect, useState } from "react";
import useAuction from "./hooks/useAuction"
import { useNavigate, useParams } from "react-router-dom";
import AdminCardsNavBar from "../../../components/NavBar";
import ICard from "../../../interfaces/ICard";
import cardApi from "../../../services/card.api";
import Icons from "../../../components/Icons";
import Buttons from "../../../components/Button";
import { format } from "date-format-parse";
import Bid from "./components/Bid";
import IUser from "../../../interfaces/IUser";
import userApi from "../../../services/user.api";
import ModalCreateBid from "./components/ModalCreateBid";


export default function Auction(){

    const navigate = useNavigate();
    const {id_auction} = useParams();
    const [owner, setOwner] = useState<IUser>();
    const [auction, createBid, deleteBid] = useAuction(id_auction!);

    const [minBid, setMinBid] = useState<number>(0);
    const [card, setCard] = useState<ICard>();

    const [timeEnd, setTimeEnd] = useState<number>();

    const [modalCreateBidOpen, setModalCreateBidOpen] = useState(false);

    const handleOpenModal = () => {
        setModalCreateBidOpen(open=>!open);
    }

    useEffect(()=>{
        if(auction){
            setMinBid(auction.bids[auction.bids.length-1].coins);
        }
    }, [auction?.bids]);

    useEffect(()=>{
        if(auction){
            var timeInit = new Date(auction.created);
            timeInit.setHours(timeInit.getHours() + auction.time);
            const interval = setInterval(() => {
                setTimeEnd((timeEnd) => {
                    return (timeEnd?timeEnd-1000:(timeInit.getTime()-new Date().getTime()));
                });
            }, 1000);
            
            return () => clearInterval(interval);
        }
    }, [auction]);

    useEffect(()=>{
        if(auction===null){
            navigate('/auctions');
        }else if(auction){
            const handleGetCard = async ()=>{
                const card = await cardApi.getById(auction.id_card);
                setCard(card);
            }
            const handleGetUser =async () => {
                const user = await userApi.getById(auction.id_user);
                setOwner(user);
            }
            handleGetCard();
            handleGetUser();
        }
    }, [auction]);

    return(
        <div className="w-screen h-screen bg-red-200 flex flex-col">
            <AdminCardsNavBar/>
            <div className="flex-1 flex">
                <div className="flex-1 flex justify-center items-center">
                    {card ? card.name : ''}
                </div>
                <div className="flex-[2] flex flex-col">
                    <div className="h-40 bg-gray-100 p-4 flex flex-col">
                        <span className="text-4xl"><strong>{card ? card.name : ''}</strong></span>
                        <span>carta normal</span>
                        <div className="flex">
                            {[...Array(5)].map((x,i)=>(
                                <Icons.star key={i}/>
                            ))}
                        </div>
                        <div className="flex-1">
                            <div className="w-1/4 h-4/5">
                                <Buttons.buttonYellow>
                                    Calificar carta
                                </Buttons.buttonYellow>
                            </div>
                        </div>
                    </div>
                    <div className="h-32 bg-gray-200 p-4 flex flex-col">
                        <div className="flex-1 flex">
                            <span className="flex-1 text-4xl"><strong>Subasta</strong></span>
                            <span className="flex-1 text-xl flex items-center"><strong>Apuesta minima:&nbsp;</strong>{minBid+1}</span>
                            <div className="flex-1"></div>
                        </div>
                        <div className="flex-1 flex">
                            <span className="flex-1 flex items-center text-2xl"><strong>Dueño:&nbsp;</strong>{owner ? owner.username : ''}</span>
                            <span className="flex-1 flex items-center text-xl"><strong>Termina en: {(timeEnd) ? format(new Date(timeEnd), 'HH:mm:ss'): '...'}</strong></span>
                            <div className="flex-1 flex justify-center items-center text-xl">
                                <Buttons.buttonYellow onClick={handleOpenModal}>
                                    Pujar
                                </Buttons.buttonYellow>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[2] bg-gray-300 p-4">
                        <span className="text-2xl"><strong>Ofertas: </strong></span>
                        <ul>
                            {auction ? (
                                auction.bids.slice(0).reverse().map((bid,i,arr)=>(
                                    <li key={i}>
                                        <Bid bid={bid} />
                                    </li>
                                ))
                            ) : ''}
                        </ul>
                    </div>
                </div>
            </div>
            <ModalCreateBid 
                isOpen={modalCreateBidOpen} setIsOpen={setModalCreateBidOpen}
                onAccept={createBid}
                minBit={minBid} id_auction={auction?._id}
            />
        </div>
    )
}


