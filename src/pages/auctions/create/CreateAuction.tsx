import { useEffect, useState } from "react";
import useCreateAuction from "./hooks/useCreateAuction"
import AdminCardsNavBar from "../../../components/NavBar";
import Input from "../../../components/Input";
import useAuth from "../../../hooks/useAuth";
import ModalCards from "./components/modalCards";
import IProduct from "../../../interfaces/IProduct";
import ICard from "../../../interfaces/ICard";
import IHeroe from "../../../interfaces/IHero";
import cardApi from "../../../services/card.api";
import heroeApi from "../../../services/hero.api";
import Buttons from "../../../components/Button";
import Card from "../../../components/Card";
import Hero from "../../../components/Hero";
import ModalProducts from "./components/modalProducts";
import { useNavigate } from "react-router-dom";
import IUser from "../../../interfaces/IUser";


export default function CreateAuction() {

    const navigate = useNavigate();
    const [auction, createAuction] = useCreateAuction();

    const [products, setProducts] = useState<IProduct[]>([]);
    const [minBidd, setMinBidd] = useState(0);

    const user = useAuth();

    const [modalOpen, setModalOpen] = useState(false);
    const [product, setProduct] = useState<IProduct>();
    const [card, setCard] = useState<ICard>();
    const [hero, setHero] = useState<IHeroe>();

    const [duration, setDuration] = useState<number>(24);

    const [modalProductsOpen, setModalProductsOpen] = useState(false);

    useEffect(() => {
        if (product) {
            const handleGetProduct = async () => {
                if (product.type == 'card') {
                    const card = await cardApi.getById(product.id_product!);
                    setCard(card);
                } else {
                    const hero = await heroeApi.getById(product.id_product!);
                    setHero(hero);
                }
            }
            handleGetProduct();
        }
    }, [product]);

    const handleCreateAuction = () => {
        if (user && product) {
            createAuction({
                id_user: user.id_user,
                id_card: product.id_product!,
                time: duration,
                min_coins: minBidd,
                insta_win: products.map(p => p.id_product!)
            });
        }
    }

    useEffect(() => {
        if (auction) {
            navigate(`/auctions/${auction._id}`);
        }
    }, [auction]);

    return (
        <div className="w-screen h-screen  bg-red-200 flex flex-col">
            <AdminCardsNavBar />
            <div className="flex-1 w-full border border-gray-500 bg-gray-300 flex flex-col justify-center items-center p-5">
                <div className="w-full h-full grid grid-cols-2 lg:grid-cols-5">
                    <div className=" col-span-2 p-5">
                        <div className="w-full h-full border border-gray-500 bg-white rounded-xl ">
                            {card ? (
                                <Card card={card} product={product} />
                            ) : hero ? (
                                <Hero heroe={hero} product={product!} />
                            ) : ''}
                        </div>
                    </div>
                    <div className="h-[80%] w-[95%] col-span-3 p-5 pt-5 pb-10 border border-gray-500 bg-white  rounded-lg">
                        <div className=" flex flex-row rounded-lg pb-5" >
                            <div className="flex-[2] flex flex-col">
                                <div className="flex-1 flex justify-start items-center">
                                    <span className="text-4xl font-bold">
                                        {card ? card.name : hero ? hero.name : ''}
                                    </span>
                                </div>
                                <div className="flex-1 flex justify-start items-center">
                                    <span className="text-xl">
                                        {card ? card.description : hero ? hero.description : ''}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <div className="w-36 h-10">
                                    <Buttons.buttonYellow onClick={() => { setModalOpen(true) }}>
                                        {product ? (
                                            'Cambiar carta'
                                        ) : (
                                            'Seleccionar carta'
                                        )}
                                    </Buttons.buttonYellow>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="pt-10 pb-10  flex flex-row ">
                            <div className="flex-[1] flex flex-col">
                                <div className="flex-1 flex justify-start items-center">
                                    <span className="text-2xl font-bold">Subasta</span>
                                </div>
                                <div className="flex-1 flex justify-start items-center">
                                    <span className="font-bold text-lg">Dueño:  </span>
                                    <span className="text-lg">  {user?.username}</span>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center">
                                <div className="flex-1">
                                    <span className="text-2xl font-bold">Duracion de la subasta</span>
                                </div>
                                <div className="flex-1 justify-center rounded-lg border border-gray-500">
                                    <select className="w-36 h-10" defaultValue={24} onChange={(e) => { setDuration(parseInt(e.target.value)) }}>
                                        <option value={24}>24 horas</option>
                                        <option value={48}>48 horas</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center">
                                <div className="flex-1">
                                    <span className="text-2xl font-bold">Inversion</span>
                                </div>
                                <div className="flex-1">
                                    <span className="text-lg font-bold">{duration == 24 ? '4' : '8'} L</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="flex-1 flex flex-col pt-12">
                            <div className="flex-1 flex justify-start items-center">
                                <h1 className="font-bold text-3xl">Apuesta:</h1>
                            </div>
                            <div className="flex-[4] flex">
                                <div className="flex-[2] flex flex-wrap pt-10 ">
                                    {products.map((product, i) => (
                                        <Product key={i} product={product} />
                                    ))}
                                    <AddProduct setModalOpen={setModalProductsOpen} />
                                </div>
                                <div className="flex-1 flex flex-col pt-10">
                                    <div className="flex-1 flex flex-col items-center ">
                                        <span className="text-2xl">Oferta minima: </span>
                                        <div className="w-20 h-8 mt-4">
                                            <Input onChange={(e) => { setMinBidd(parseInt(e.target.value)) }} placeholder="0" />
                                        </div>
                                        <div className="w-36 h-12 mt-4">
                                            <Buttons.buttonYellow onClick={handleCreateAuction}>
                                                Crear subasta
                                            </Buttons.buttonYellow>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalCards
                isOpen={modalOpen} setIsOpen={setModalOpen}
                id_user={user?.id_user}
                setProduct={setProduct}
            />
            <ModalProducts
                isOpen={modalProductsOpen} setIsOpen={setModalProductsOpen}
                id_user={user?.id_user}
                setProducts={setProducts}
            />
        </div>
    )
}

interface IAddProductProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function AddProduct({ setModalOpen }: IAddProductProps) {
    return (
        <div className="w-36 h-36 bg-green-600">
            <Buttons.default onClick={() => { setModalOpen(true) }}>
                Añadir carta
            </Buttons.default>
        </div>
    )
}


interface IProductProps {
    product: IProduct
}

function Product({ product }: IProductProps) {

    const [card, setCard] = useState<ICard>();
    const [hero, setHero] = useState<IHeroe>();

    useEffect(() => {
        const handleGetProduct = async () => {
            if (product.type == 'card') {
                const card = await cardApi.getById(product.id_product!);
                setCard(card);
            } else {
                const hero = await heroeApi.getById(product.id_product!);
                setHero(hero);
            }
        }
        handleGetProduct();
    }, []);

    return (
        <div className="w-36 h-36 bg-green-600">
            <div className="w-36 h-full relative">
                {(card) ? (
                    <img className="w-full h-full object-contain" src={`${import.meta.env.VITE_API_CARDS_URL}/images/cards/${product.id_product}`} />
                ) : (
                    (hero) ? (
                        <img className="w-full h-full object-contain" src={`${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${product.id_product}`} />
                    ) : ''
                )}
            </div>
        </div>
    )
}

