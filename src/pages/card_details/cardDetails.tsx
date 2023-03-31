import AdminCardsNavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Icons from "../../components/Icons";
import '../../assets/react.svg';
import '../../assets/tailwind.css';
import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import cardsApi from '../../services/card.api';
import IComments from "../../interfaces/IComments";
import productsApi from "../../services/products.api";
import Comment from "./components/comment";
import ICard from "../../interfaces/ICard";
import IProduct from "../../interfaces/IProduct";
import ISetComment from "../../interfaces/ISetComment";

export default function CardDetails() {

    const id_card  = "ilfr4psm2";
    const  id = "1";

    const [card, setCard] = useState<ICard>();
    const [product, setProduct] = useState<IProduct>();
    const [valoracion, setValoracion] = useState<number>();
    const [comentario, setComentario] = useState('')

    const handleGetCard = async () => {
        const data = await cardsApi.getById(id_card!);
        setCard(data);
    }

    const handleGetProduct = async () => {
        const data = await productsApi.getProductById(id_card!);
        setProduct(data);
    }

    /*const handleSetComment = async (e: FormEvent) => {
        try {
            e.preventDefault();
            var data = await productsApi.insert({})}, image!);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }*/

    const [comments, setComments] = useState<IComments[]>([]);

    const handleGetComments = async () => {
        const data = await productsApi.getComments(id!);
        setComments(data);
    }

    useEffect(() => {
        handleGetCard();
        handleGetComments();
        handleGetProduct();
    }, []);




    return (
        <div className="flex flex-col w-screen h-screen">
            <AdminCardsNavBar />
            <div className="flex-1 w-full borderborder-gray-500 bg-gray-300 flex flex-col justify-center items-center p-5">
                <div className="w-[80%] h-full grid grid-cols-2 lg:grid-cols-5">
                    <div className="col-span-2 p-5">
                        <div className="w-full h-full border border-gray-500 bg-white rounded-xl ">
                            <Card _id={card ? card._id : undefined } card_type={card?.card_type} description={card?.description} id_hero={card?.id_hero} name={card?.name} key={card
                            ?._id} discount={product?.descuento} obtained={"y"} price={product?.precio}></Card>
                        </div>
                    </div>
                    <div className="col-span-3 p-5">
                        <div className="border border-gray-500 bg-white flex flex-col rounded-lg">
                            <div className="p-5">
                                <h2 className="text-3xl"><strong>{card?.name}</strong></h2>
                                <h3 className="text-xl">Category: {card?.card_type}</h3>
                            </div>
                            <hr />
                            <div className="p-5">
                                <p >
                                    {
                                        card?.description
                                    }
                                </p>
                            </div>
                            <hr />
                            <div className="p-5">
                                <span className="text-xl">
                                    <strong>
                                        Price: ${product?.precio}
                                    </strong>
                                </span>
                            </div>
                            <div className="p-5 w-full flex">
                                <div className="w-[80%] p-1">
                                    <Button text="Add To Card" type="buttonlarge"></Button>
                                </div>
                                <div className="flex-1 p-1">
                                    <Button text="-" type="buttonlarge" />
                                </div>
                                <div className="flex-1 p-1">
                                    <div className="border border-separate rounded-lg w-full h-full flex justify-center items-center">
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="flex-1 p-1">
                                    <Button text="+" type="buttonlarge" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-[80%] h-full grid grid-cols-2 lg:grid-cols-5">
                    <div className="col-span-2 p-5">
                        <div className="w-full h-full border bg-white rounded-lg">
                            <div className="p-5">
                                <h2 className="text-3xl text-center"><strong>Comentario</strong></h2>
                            </div>
                            <div className="p-3 ">
                                <h3 className="text-xl">Ranking</h3>
                                <div className="p-3 flex">
                                    <Icons.star onClick={()=>setValoracion(1)}/>
                                    <Icons.star onClick={()=>setValoracion(2)}/>
                                    <Icons.star onClick={()=>setValoracion(3)}/>
                                    <Icons.star onClick={()=>setValoracion(4)}/>
                                    <Icons.star onClick={()=>setValoracion(5)}/>
                                </div>
                            </div>
                            <div className="p-3">
                                <h3 className="text-xl">Comment</h3>
                                <div className="p-3">
                                    <textarea
                                        className="border border-black peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="Your message" onChange={(e) => { setComentario(e.target.value) }}>
                                        </textarea>
                                </div>
                            </div>
                            <div className="p-5 w-full flex">
                                <div className="w-[10%] p-1">
                                    <Icons.clip />
                                </div>
                                <div className="w-[90%] p-1">
                                    <Button text="Add To Comment" type="buttonlarge" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 p-3">
                        <div className="w-full h-full border bg-white ">
                            {

                                comments.map((comment, i) => (<Comment key={i} comment={comment} />))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


