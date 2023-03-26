import { FormEvent, useEffect, useState } from "react"
import AdminCardsNavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"
import cardApi from "../../services/card.api";
import IHeroe from "../../interfaces/IHeroe";

import ICard from "../../interfaces/ICard";
import heroeApi from "../../services/heroe.api";

export default function EditCards() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cardType, setCardType] = useState('');
    const [cardID, setcardID] = useState('');
    const [cardEfects, setCardEfects] = useState('');
    const [heroType, setheroType] = useState('');
    const [image, setImage] = useState<File>();

    const [heroes, setHeroes] = useState<IHeroe[]>([]);
    const [cards, setCards] = useState<ICard[]>([]);



    const handleEditCard = async (e: FormEvent) => {
        try {
            if (cardID != '' || null) {
                e.preventDefault();
                await cardApi.modifyCard({ name, description, card_type: cardType, id_hero: heroType, effects: [] }, image!, cardID);
                location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleGetHeroes = async () => {
        var data = await heroeApi.get();
        setHeroes(data);
        
    }
    const handlerGetCards = async () => {
        var data = await cardApi.getAll();
        console.log(data)
        setCards(data)
    }
    const handlerGetCard = async (id: string) => {
        var data = await cardApi.getById(id);

        return data
    }
    const handlerAutoCompletar = async (value: string) => {

        let card = await handlerGetCard(value)

        card.name != undefined ? setName(card.name) : null
        card.card_type != undefined ? setCardType(card.card_type.toString()) : null
        card.id_hero != undefined ? setheroType(card.id_hero.toString()) : null
        card.description != undefined? setDescription(card.description):null
    }

        useEffect(() => {
            handleGetHeroes();
            handlerGetCards();
        }, []);

    return (
        <div className="w-screen h-screen flex flex-wrap flex-col">
            <AdminCardsNavBar />
            <div className="w-full h-[calc(100%-50px)] bg-gray-300 flex justify-center items-center">
                <div className="w-full h-full bg-gray-300">
                    <div className="w-full h-20 flex items-center pl-10">
                        <h1 className="text-4xl md:text-5xl">Edicion de cartas</h1>
                    </div>
                    <div className="w-full h-[calc(100%-5rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-10">
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="border border-black rounded-md w-[300px] h-[440px] flex flex-col items-center">
                                <img src={(image) ? URL.createObjectURL(image!) : `http://localhost:3000/images/cards/${cardID}`}></img>
                                <div className="mt-auto relative w-[50px] h-[50px] rounded-[25px]">
                                    <input
                                        className="cursor-pointer opacity-0 absolute top-0 left-0 w-full h-full z-20"
                                        onChange={(e) => { setImage(e.target.files![0]) }} type={'file'}
                                        accept={'image/png, image/jpg, image/jpeg'}
                                    />
                                    <div
                                        className="z-10 border border-gray-400 shadow-xl absolute top-0 left-0 w-full h-full rounded-[25px] flex items-center justify-center">
                                        <span className="text-5xl">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleEditCard} className="col-span-1 flex flex-col items-center">

                            <label className="w-[90%] h-10 mb-14">
                                <strong>Id de carta a editar:</strong>  <br />
                                <div className="w-full h-full shadow-xl relative">
                                    <select onChange={(e) => {
                                        console.log(e.target.value)
                                        setcardID(e.target.value)
                                        handlerAutoCompletar(e.target.value)
                                    }} className="w-full focus:outline-none h-full rounded-md p-2 shadow-xl">
                                        <option value="-1"> Seleccione un ID </option>
                                        {cards.map((card, id) => (
                                            <option key={id} value={card._id}>
                                                {card._id + ': ' + card.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                            <label className="w-[90%] h-10 mb-10">
                                <strong>Nombre:</strong> <br />
                                <Input onChange={(e) => { setName(e.target.value) }} value={name} />
                            </label>
                            <label className="w-[90%] h-10 mb-10">
                                <strong>Descripcion:</strong> <br />
                                <Input onChange={(e) => { setDescription(e.target.value) }} value={description} />
                            </label>
                            <label className="w-[90%] h-10 mb-14">
                                <strong>Tipo de carta:</strong>  <br />
                                <select onChange={(e) => { setCardType(e.target.value) }} value={cardType} className="w-full focus:outline-none h-full rounded-md p-2 shadow-xl">
                                    <option value="0"> Selecciona un tipo </option>
                                    <option value="1"> Arma </option>
                                    <option value="2"> Armadura </option>
                                    <option value="3"> Item </option>
                                    <option value="4"> Epica </option>
                                </select>
                            </label>
                            <label className="w-[90%] h-10 mb-14">
                                <strong>Heroe al que pertenece:</strong>  <br />
                                <div className="w-full h-full shadow-xl relative">
                                    <select value={heroType} onChange={(e) => { setheroType(e.target.value) }} className="w-full focus:outline-none h-full rounded-md p-2 shadow-xl">
                                        <option value="-1"> Selecciona un heroe </option>
                                        {heroes.map((hero, id) => (
                                            <option key={id} value={id}>
                                                {hero.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                            <Button.buttonYellow>Actualizar</Button.buttonYellow>
                        </form>
                        <div className="col-span-1 flex flex-col">
                            <div><span className="text-xl"><strong>Reporte de cambios</strong></span></div>
                            <div>
                                <span className="text-gray-500 text-sm" >
                                    {`${new Date().getUTCMonth() + 1}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`}
                                </span>
                            </div>
                            <div>
                                <p className="leading-5">
                                    Ingrese un lenguaje natural a la lista de cambios realizados a esta carta 300 caracteres
                                </p>
                            </div><br />
                            <label className="w-full h-10">
                                Asunto: <br />
                                <Input />
                            </label><br /><br />
                            <label className="w-full h-52">
                                Descripcion: <br />
                                <Input />
                            </label><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
