import { useEffect, useState } from "react"
import IAuction from "../../../../interfaces/IAuction"
import cardApi from "../../../../services/card.api";
import ICard from "../../../../interfaces/ICard";
import { format } from 'date-format-parse';
import Buttons from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import IProduct from "../../../../interfaces/IProduct";
import productsApi from "../../../../services/products.api";
import IHeroe from "../../../../interfaces/IHero";
import heroeApi from "../../../../services/hero.api";

interface AuctionProps{
    auction: IAuction
}

export default function Auction({auction}:AuctionProps){

    const navigate = useNavigate();

    const [timeEnd, setTimeEnd] = useState<number>();

    useEffect(()=>{
        var timeInit = new Date(auction.created!);
        timeInit.setHours(timeInit.getHours() + auction.time);
        const interval = setInterval(() => {
            setTimeEnd((timeEnd) => {
                return (timeEnd?timeEnd-1000:timeInit.getTime());
            });
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    const [product, setProduct] = useState<IProduct>();
    const [card, setCard] = useState<ICard>();
    const [hero, setHero] = useState<IHeroe>();

    useEffect(()=>{
        const handleGetProduct = async()=>{
            const product = await productsApi.getProductById(auction.id_card);
            if(product.type=='card'){
                const card = await cardApi.getById(product.id_product!);
                setCard(card);
            }else{
                const hero = await heroeApi.getById(product.id_product!);
                setHero(hero);
            }
            setProduct(product);
        }
        handleGetProduct();
    }, []);

    return(
        <div className="w-full h-48 bg-white flex justify-center items-center">
            <div className="border border-gray-500 pb-6 rounded-lg w-[85%] h-40 bg-white flex">
                <div className="w-40 h-full p-2 ">
                    {(product) ? (
                        (card) ? (
                            <img className="w-full h-full object-contain" src={`${import.meta.env.VITE_API_CARDS_URL}/images/cards/${product.id_product}`} />
                        ) : (
                            (hero) ? (
                                <img className="w-full h-full object-contain" src={`${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${product.id_product}`} />
                            ) : ''
                        )
                    ):''}
                </div>
                <div className="flex-1 bg-white flex">
                    <div className="flex-1 flex flex-col p-4 ">
                        <div className="w-full h-10">
                            <span className="text-3xl font-bold"><strong>{card ? card.name : ''}</strong></span>
                        </div>
                        <div className="flex flex-col">
                            <span><strong  >Postores:</strong> {auction.bids!.length}</span>
                            <span><strong  >Créditos máximos ofrecidos:</strong> {auction.bids!.length>0 ? auction.bids![auction.bids!.length-1].coins : ''}</span>
                            <span><strong >Cartas maximas ofrecidas</strong> {auction.bids!.length>0 ? auction.bids![auction.bids!.length-1].cards.length : ''}</span>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex-[2] flex justify-center items-center">
                            <strong className="text-xl font-bold">Termina en: {(timeEnd) ? format(new Date(timeEnd), 'HH:mm:ss'): '...'}</strong>
                        </div>
                        <div className="flex-[1] flex justify-center items-center p-3">
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
