import AdminCardsNavBar from "../../components/AdminCardsNavBar";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Icons from "../../components/Icons";
import '../../assets/react.svg';
import '../../assets/tailwind.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import cardsApi from '../../services/card.api';

export default function CardDetails() {

    const params = useParams();
    const [card, setCard] = useState();

    const handleGetCard = async () => {
        const data = await cardsApi.getById(params.id_card!);
        console.log(data);
    }

    useEffect(() => {
        handleGetCard();
    }, []);

    return (
        <div className="flex flex-col w-screen h-screen">
            <AdminCardsNavBar />
            <div className="flex-1 w-full borderborder-gray-500 bg-gray-300 flex flex-col justify-center items-center p-5">
                <div className="w-[80%] h-full grid grid-cols-2 lg:grid-cols-5">
                    <div className="col-span-2 p-5">
                        <div className="w-full h-full border border-gray-500 bg-white rounded-xl ">
                            <Card></Card>
                        </div>
                    </div>
                    <div className="col-span-3 p-5">
                        <div className="border border-gray-500 bg-white flex flex-col rounded-lg">
                            <div className="p-5">
                                <h2 className="text-3xl"><strong>Guerrero Dragón</strong></h2>
                                <h3 className="text-xl">Category: Heroe</h3>
                            </div>
                            <hr />
                            <div className="p-5">
                                <p >
                                    Es un panda gigante que de manera improbable es elegido como el Guerrero
                                    Dragón. Él es hijo adoptivo del Sr. Ping, y es uno de los estudiantes del
                                    maestro Shifu. La profecía se refiere a Po como el Guerrero Dragón o guerrero
                                    de blanco y negro.Es un panda gigante que de manera improbable es elegido
                                    como el Guerrero Dragón. Él es hijo adoptivo del Sr. Ping, y es uno de
                                    los estudiantes del maestro Shifu. La profecía se refiere a Po como el
                                    Guerrero Dragón o guerrero de blanco y negro.Es un panda gigante que de
                                    manera improbable es elegido como el Guerrero Dragón. Él es hijo adoptivo
                                    del Sr. Ping, y es uno de los estudiantes del maestro Shifu. La profecía
                                    se refiere a Po como el Guerrero Dragón o guerrero de blanco y negro.
                                </p>
                            </div>
                            <hr />
                            <div className="p-5">
                                <span className="text-xl">
                                    <strong>
                                        Price: $7.99
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

                                    <Icons icon="star"></Icons>
                                    <Icons icon="star"></Icons>
                                    <Icons icon="star"></Icons>
                                    <Icons icon="star"></Icons>
                                    <Icons icon="star"></Icons>
                                </div>
                            </div>
                            <div className="p-3">
                                <h3 className="text-xl">Comment</h3>
                                <div className="p-3">
                                    <textarea
                                        className="border border-black peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder="Your message"></textarea>
                                </div>
                            </div>
                            <div className="p-5 w-full flex">
                                <div className="w-[10%] p-1">
                                    <Icons icon="clip"></Icons>
                                </div>
                                <div className="w-[90%] p-1">
                                    <Button text="Add To Comment" type="buttonlarge" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 p-3">
                        <div className="w-full h-full border border-gray-500 bg-white rounded-lg">
                            <div className=" border   border-black">
                                <div className="p-1 w-full flex">
                                    <div className="w-[90%] p-1">
                                        <h2 className="text-xl p-2"><strong>Usuario1</strong></h2>
                                    </div>
                                    <div className=" flex text-right w-[10%] p-1">
                                        <Icons icon="edit"></Icons>
                                        <Icons icon="trash"></Icons>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <h2 className="text-xl p-3">2002-14-34</h2>
                                    <div className="p-3 flex">
                                        <Icons icon="star"></Icons>
                                        <Icons icon="star"></Icons>
                                        <Icons icon="star"></Icons>
                                        <Icons icon="star"></Icons>
                                        <Icons icon="star"></Icons>
                                    </div>
                                    <div className="p-3">
                                        <label className="p-3"> Es un panda gigante que de manera improbable es elegido como el Guerrero
                                            Dragón. Él es hijo adoptivo del Sr. Ping, y es uno de los estudiantes del
                                            maestro Shifu. La profecía se refiere a Po como el Guerrero Dragón o guerrero
                                            de blanco y negro.Es un panda gigante que de manera improbable es elegido</label>
                                    </div>
                                </div>
                            </div>
                            <br className="bg-black" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


