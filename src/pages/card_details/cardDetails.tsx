import AdminCardsNavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Icons from "../../components/Icons";
import '../../assets/react.svg';
import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import cardsApi from '../../services/card.api';
import IComments from "../../interfaces/IComments";
import productsApi from "../../services/products.api";
import Comment from "./components/comment";
import ICard from "../../interfaces/ICard";
import IProduct from "../../interfaces/IProduct";
import ISetComment from "../../interfaces/ISetComment";
import heroeApi from "../../services/heroe.api";
import IHeroe from "../../interfaces/IHeroe";
import Hero from "../../components/Hero";
import cartApi from "../../services/cart.api";
import useAuth from "../../hooks/useAuth";
import commentsApi from "../../services/comments.api";

export default function CardDetails() {

    const { id_product } = useParams();
    const { user } = useAuth();

    const [product, setProduct] = useState<IProduct>();
    const [card, setCard] = useState<ICard>();
    const [hero, setHeroe] = useState<IHeroe>()

    const [valoracion, setValoracion] = useState<number>();
    const [comentario, setComentario] = useState('')

    const [cantidad, setCantidad] = useState(1);

    const [comments, setComments] = useState<IComments[]>([]);

    const sum = () => {
        setCantidad(cantidad + 1);
    };

    const res = () => {
        if (cantidad > 1) {
            setCantidad(
                cantidad - 1);
        }
    };

    /*const handleSetComment = async (e: FormEvent) => {
        try {
            e.preventDefault();
            var data = await productsApi.insert({})}, image!);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }*/

    useEffect(() => {
        const handleGetCard = async (id_card: string) => {
            const data = await cardsApi.getById(id_card);
            setCard(data);
        }
        const handleGetHeroe = async (id_heroe: string) => {
            const data = await heroeApi.getById(id_heroe);
            setHeroe(data);
        }
        const handleGetComments = async (id_product: string) => {
            const data = await commentsApi.get(id_product);
            setComments(data);
        }
        const handleGetProduct = async () => {
            if (id_product) {

                const data = await productsApi.getProductById(id_product!);
                if (data.type == 'card') {
                    handleGetCard(data.id_product!);
                } else {
                    handleGetHeroe(data.id_product!);
                }
                setProduct(data);
                handleGetComments(data.id_product!);
            }
        }
        handleGetProduct();
    }, []);

    const handleAddShoppingCart = async () => {
        try {
            if (user && product) {
                await cartApi.addToCart(user.id_user, id_product!, cantidad);
                alert("Producto añadido");
            } else {
                await cartApi.addToCart("12345", id_product!, cantidad);
                alert("Producto añadido");

            }
        } catch (error) {

        }
    }


    return (
        <div className="flex flex-col w-screen h-screen">
            <AdminCardsNavBar />
            <div className="flex-1 w-full borderborder-gray-500 bg-gray-300 flex flex-col justify-center items-center p-5">
                <div className="w-full h-full grid grid-cols-2 lg:grid-cols-5">

                    <div className="col-span-2 p-5">

                        <div className="w-full h-full border border-gray-500 bg-white rounded-xl ">
                            {
                                (product) ? (
                                    (card) ? (
                                        <Card card={card} product={product} />
                                    ) : (
                                        (hero) ? (
                                            <Hero heroe={hero} product={product} />
                                        ) : ''
                                    )
                                ) : ''
                            }
                        </div>
                    </div>
                    <div className="col-span-3 p-5">
                        <div className="border border-gray-500 bg-white flex flex-col rounded-lg">

                            <div className="p-5">
                                <h2 className="text-3xl">
                                    <strong>
                                        {card ? card.name : hero?.name}
                                    </strong>
                                    <div className="pt-2 pb-2 flex">
                                        <Icons.star onClick={() => setValoracion(1)} />
                                        <Icons.star onClick={() => setValoracion(2)} />
                                        <Icons.star onClick={() => setValoracion(3)} />
                                        <Icons.star onClick={() => setValoracion(4)} />
                                        <Icons.star onClick={() => setValoracion(5)} />
                                        <p className="text-2xl pl-2">{product?.overall_rating}</p>
                                    </div>
                                </h2>
                                <h3 className="text-xl">Category: {card ? card.card_type : "hero"}</h3>
                            </div>
                            <hr />
                            <div className="p-5">
                                <p >
                                    {card ? card.description : hero?.description}
                                </p>
                            </div>
                            <hr />
                            <div className="p-5">
                                <span className="text-xl">
                                    {(product && product.discount > 0) ? (
                                        <strong >
                                            Price: <strong className="text-red-500">${product?.price - ((product?.price * product?.discount) / 100)}</strong>
                                        </strong>
                                    ) : (
                                        <strong>
                                            Price: ${product?.price}
                                        </strong>
                                    )}
                                </span>
                            </div>
                            <div className="p-5 w-[100%] flex">
                                <div className="w-[70%] p-1">
                                    <Button.buttonLarge onClick={handleAddShoppingCart} >Add To Card</Button.buttonLarge>
                                </div>
                                <div className="w-[10%] p-1">
                                    <Button.buttonLarge onClick={res} > - </Button.buttonLarge>
                                </div>
                                <div className="w-[10%] p-1">
                                    <div className="border border-separate rounded-lg w-full h-full flex justify-center items-center">
                                        <span>{cantidad}</span>
                                    </div>
                                </div>
                                <div className="w-[10%] p-1">
                                    <Button.buttonLarge onClick={sum}> + </Button.buttonLarge>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full h-full grid grid-cols-2 lg:grid-cols-5">
                    <div className="col-span-2 p-5">
                        <div className="w-full h-[50%] border bg-white rounded-lg">
                            <div className="p-5">
                                <h2 className="text-3xl text-center"><strong>Comentario</strong></h2>
                            </div>
                            <div className="p-3 ">
                                <h3 className="text-xl">Ranking</h3>
                                <div className="p-3 flex">
                                    <Icons.star onClick={() => setValoracion(1)} />
                                    <Icons.star onClick={() => setValoracion(2)} />
                                    <Icons.star onClick={() => setValoracion(3)} />
                                    <Icons.star onClick={() => setValoracion(4)} />
                                    <Icons.star onClick={() => setValoracion(5)} />
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
                                    <Button.buttonLarge >Add To Card</Button.buttonLarge>
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





