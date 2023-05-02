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
import Card from "../../../components/Card";
import IHeroe from "../../../interfaces/IHero";
import IProduct from "../../../interfaces/IProduct";
import heroeApi from "../../../services/heroe.api";
import productsApi from "../../../services/products.api";
import Hero from "../../../components/Hero";


export default function Auction() {

    const navigate = useNavigate();
    const { id_auction } = useParams();
    const [owner, setOwner] = useState<IUser>();
    const [auction, createBid, deleteBid] = useAuction(id_auction!);

    const [minBid, setMinBid] = useState<number>(0);
    const [valoracion, setValoracion] = useState<number>(0);
    const [product, setProduct] = useState<IProduct>();
    const [card, setCard] = useState<ICard>();
    const [hero, setHero] = useState<IHeroe>();


    const [timeEnd, setTimeEnd] = useState<number>();

    const [modalCreateBidOpen, setModalCreateBidOpen] = useState(false);

    const handleOpenModal = () => {
        setModalCreateBidOpen(open => !open);
    }

    useEffect(() => {
        if (auction && auction.bids!.length > 0) {
            setMinBid(auction.bids![auction.bids!.length - 1].coins);
        }
    }, [auction?.bids]);

    useEffect(() => {
        if (auction) {
            var timeInit = new Date(auction.created!);
            timeInit.setHours(timeInit.getHours() + auction.time);
            const interval = setInterval(() => {
                setTimeEnd((timeEnd) => {
                    return (timeEnd ? timeEnd - 1000 : (timeInit.getTime() - new Date().getTime()));
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [auction]);

    useEffect(() => {
        if (auction === null) {
            navigate('/auctions');
        } else if (auction) {
            const handleGetProduct = async () => {
                const product = await productsApi.getProductById(auction.id_card);
                if (product.type == 'card') {
                    const card = await cardApi.getById(product.id_product!);
                    setCard(card);
                } else {
                    const hero = await heroeApi.getById(product.id_product!);
                    setHero(hero);
                }
                setProduct(product);
            }
            const handleGetUser = async () => {
                const user = await userApi.getById(auction.id_user);
                setOwner(user);
            }
            handleGetProduct();
            handleGetUser();
        }
    }, [auction]);

    return (
        <div className="flex flex-col w-screen h-screen">
            <AdminCardsNavBar />
            <div className="flex-1 w-full borderborder-gray-500 bg-gray-300 flex flex-col justify-center items-center p-5">
                <div className="w-full h-full grid grid-cols-2 lg:grid-cols-5">
                    <div className="col-span-2 p-5">
                        <div className="w-full h-full border border-gray-500 bg-white rounded-xl">
                            {card ? (
                                <Card card={card} product={product} />
                            ) : hero ? (
                                <Hero heroe={hero} product={product!} />
                            ) : ''}
                        </div>
                    </div>
                    <div className="col-span-3 p-5">
                        <div className="border border-gray-500 bg-white flex flex-col rounded-lg">
                            <span className="text-3xl pl-5 pt-5 pb-1"><strong>{card ? card.name : hero ? hero.name : ''}</strong></span>
                            <div className=" pl-5   flex">
                                {[...Array(5)].map((x, i) => (
                                    <Icons.star key={i} onClick={() => setValoracion(i)}/>
                                ))}
                            </div>
                            <span className="text-xl pl-5 pt-2">Category: {card ? card.card_type : "hero"}</span>
                            <hr/>
                            <div className=" bg-white p-5 flex justify-between flex-row">
                                <div className="flex-col">
                                    <span className="flex  justify-start text-4xl"><strong>Subasta</strong></span>
                                    <span className="flex items-center text-2xl"><strong>Dueño:&nbsp;</strong>{owner ? owner.username : ''}</span>
                                    <span className="flex text-xl justify-center "><strong>Apuesta minima:&nbsp;</strong>{minBid + 1}</span>
                                    
                                </div>
                                <div className="flex-col justify-end">
                                    <span className=" flex justify-end text-xl"><strong>Termina en: {(timeEnd) ? format(new Date(timeEnd), 'HH:mm:ss') : '...'}</strong></span>
                                    <div className=" flex justify-center pt-5 items-center text-xl">
                                        <Buttons.buttonYellow onClick={handleOpenModal}>
                                            Pujar
                                        </Buttons.buttonYellow>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="flex-[2] bg-white p-4">
                                <span className="text-2xl"><strong>Ofertas: </strong></span>
                                <ul>
                                    {auction ? (
                                        auction.bids!.slice(0).reverse().map((bid, i, arr) => (
                                            <li key={i}>
                                                <Bid bid={bid} />
                                            </li>
                                        ))
                                    ) : ''}
                                </ul>
                            </div>
                        </div>

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


