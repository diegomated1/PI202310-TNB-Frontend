import { FormEvent, useEffect, useState } from "react"
import AdminCardsNavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"
import cardApi from "../../services/card.api";
import IHeroe from "../../interfaces/IHero";

import ICard from "../../interfaces/ICard";
import heroeApi from "../../services/hero.api";
import ModalReports from "../../components/modals/Reports";

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

    const [effects, setEffects] = useState<string[]>([]);

    const [modalReportOpen, setModalReportOpen] = useState(false);


    const handleEditCard = async () => {
        try {
            if (cardID != '' || null) {
                await cardApi.modifyCard({ name, description, card_type: cardType, id_hero: heroType, effects }, image!, cardID);
                location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmitForm = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setModalReportOpen(true);
    }

    const handleGetHeroes = async () => {
        var data = await heroeApi.get();
        setHeroes(data);
        
    }
    const handlerGetCards = async () => {
        var data = await cardApi.getAll();
        setCards(data)
    }
    const handlerGetCard = async (id: string) => {
        var data = await cardApi.getById(id);

        return data
    }
    const handlerAutoCompletar = async (value: string) => {

        let card = await handlerGetCard(value)
        console.log(card);
        card.name != undefined ? setName(card.name) : null
        card.card_type != undefined ? setCardType(card.card_type.toString()) : null
        card.id_hero != undefined ? setheroType(card.id_hero.toString()) : null
        card.description != undefined? setDescription(card.description):null
        
        setEffects([...card.effects]);
    }

    /**
     * Function for set effects state
     * @param idx index of the effect in the array
     * @param value new value of the effect
     */
    const setEffect = (idx:number, value:string)=>{
        effects[idx] = value;
        setEffects([...effects]);
    }

    /**
     * Function for add new effect
     */
    const addEffect = ()=>{
        effects.push('');
        setEffects([...effects]);
    }

    useEffect(() => {
        handleGetHeroes();
        handlerGetCards();
    }, []);

    return (
        <div className="w-screen h-screen">
            <AdminCardsNavBar />
            <div className="w-full h-[calc(100%-50px)] bg-gray-300 flex justify-center items-center">
                <div className="w-full h-full bg-gray-300">
                    <div className="w-full h-20 flex items-center pl-10">
                        <h1 className="text-4xl md:text-5xl">Edicion de cartas</h1>
                    </div>
                    <div className="w-full h-[calc(100%-5rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-10">
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="border border-black rounded-md w-[300px] h-[440px] flex flex-col items-center">
                                <img src={(image) ? URL.createObjectURL(image!) : ``}></img>
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
                        <form onSubmit={handleSubmitForm} className="col-span-1 flex flex-col items-center">

                            <label className="w-full h-10 mb-8">
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
                            <label className="w-full h-10 mb-8">
                                <strong>Nombre:</strong> <br />
                                <Input onChange={(e) => { setName(e.target.value) }} value={name} />
                            </label>
                            <label className="w-full h-10 mb-8">
                                <strong>Tipo de carta:</strong>  <br />
                                <select onChange={(e) => { setCardType(e.target.value) }} value={cardType} className="w-full focus:outline-none h-full rounded-md p-2 shadow-xl">
                                    <option value="0"> Selecciona un tipo </option>
                                    <option value="1"> Arma </option>
                                    <option value="2"> Armadura </option>
                                    <option value="3"> Item </option>
                                    <option value="4"> Epica </option>
                                </select>
                            </label>
                            <label className="w-full h-10 mb-8">
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
                            <label className="w-full h-40 mb-8">
                                <strong>Descripcion de la carta: </strong><br />
                                <textarea
                                    onChange={(e) => { setDescription(e.target.value) }} value={description}
                                    className="border rounded-md border-gray-100 w-full h-full max-w-full max-h-full min-w-full min-h-full shadow-xl relative p-2"
                                />
                            </label><br />
                            <div className="w-full h-12">
                                <Button.buttonYellow type="submit">
                                    Actualizar
                                </Button.buttonYellow>
                            </div>
                        </form>
                        <div className="col-span-1 flex flex-col">
                            <label className="w-full h-10 mb-10">
                                <strong>Efectos:</strong> <br />
                                {effects.map((x,i)=>(
                                    <div key={i} className="w-full h-14 mb-10">
                                        <textarea
                                            defaultValue={x}
                                            required
                                            onChange={(e)=>{setEffect(i, e.target.value)}}
                                            className="border rounded-md border-gray-100 w-full h-full max-w-full max-h-full min-w-full min-h-full shadow-xl relative p-2"
                                        />
                                    </div>
                                ))}
                                <div className="w-full h-10">
                                    <Button.buttonGreen type="button" onClick={addEffect}>
                                        Añadir efecto
                                    </Button.buttonGreen>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <ModalReports 
                isOpen={modalReportOpen}
                setIsOpen={setModalReportOpen}
                onAccept={()=>{handleEditCard()}}
            />
        </div>
    )
}
