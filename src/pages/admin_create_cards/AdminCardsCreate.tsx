import { FormEvent, FormEventHandler, useEffect, useState } from "react"
import AdminCardsNavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"
import cardApi from "../../services/card.api";
import IHeroe from "../../interfaces/IHero";
import heroeApi from "../../services/heroe.api";
import ModalReports from "../../components/modals/Reports";

export default function AdminCardsCreate() {

    /**
     * Card attributes
     */
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cardType, setCardType] = useState('');
    const [heroType, setheroType] = useState('');
    const [image, setImage] = useState<File>();
    const [heroes, setHeroes] = useState<IHeroe[]>([]);

    /**
     * Effects of the card
     */
    const [effectsAmount, setEffectsAmounst] = useState(0);
    const [effects, setEffects] = useState<string[]>([]);

    /**
     * State for open and close report modal
     */
    const [modalReportOpen, setModalReportOpen] = useState(false);

    /**
     * Function handler 
     */
    const handleCreateCard = async () => {
        try {
            await cardApi.insert({ name, description, card_type: cardType, id_hero: heroType, effects }, image!);
            alert("Carta creada con exito");
            window.location.reload();
        } catch (error) {
            alert("No se pudo crear la carta");
        }
    }

    /**
     * Fucntion for get all heroes
     */
    const handleGetHeroes = async () => {
        var data = await heroeApi.get();
        setHeroes(data);
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
        setEffectsAmounst(amount=>amount+1);
    }

    /**
     * Function submit form
     * @param e 
     */
    const handleSubmitForm = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setModalReportOpen(true);
    }

    useEffect(() => {
        handleGetHeroes();
    }, []);

    return (
        <div className="w-screen h-screen flex flex-wrap flex-col">
            <AdminCardsNavBar />
            <div className="w-full h-[calc(100%-50px)] bg-gray-300 flex justify-center items-center">
                <div className="w-full h-full bg-gray-300">
                    <div className="w-full h-20 flex items-center pl-10">
                        <h1 className="text-4xl md:text-5xl">Creacion de cartas</h1>
                    </div>
                    <form onSubmit={handleSubmitForm} className="w-full h-[calc(100%-5rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-10">
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="border border-black rounded-md w-[300px] h-[440px] flex flex-col items-center">
                                <img src={(image) ? URL.createObjectURL(image!) : ''}></img>
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
                        <div className="col-span-1 flex flex-col items-center">
                            <label className="w-full h-10 mb-10">
                                <strong>Nombre:</strong> <br />
                                <Input onChange={(e) => { setName(e.target.value) }} value={name} />
                            </label>
                            <label className="w-full h-10 mb-14">
                                <strong>Tipo de carta:</strong>  <br/>
                                <select onChange={(e) => { setCardType(e.target.value) }} className="w-full focus:outline-none h-full rounded-md p-2 shadow-md">
                                    <option value="0"> - </option>
                                    <option value="sword"> Arma </option>
                                    <option value="armor"> Armadura </option>
                                    <option value="item"> Item </option>
                                    <option value="epic"> Epica </option>
                                </select>
                            </label>
                            <label className="w-full h-10 mb-14">
                                <strong>Heroe al que pertenece:</strong>  <br />
                                <div className="w-full h-full shadow-xl relative">
                                    <select onChange={(e) => { setheroType(e.target.value) }} className="w-full focus:outline-none h-full rounded-md p-2 shadow-xl">
                                        <option value="-1"> - </option>
                                        {heroes.map((hero, id) => (
                                            <option key={id} value={hero._id}>
                                                {hero.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                            <label className="w-full h-40 mb-10">
                                <strong>Descripcion de la carta: </strong><br />
                                <textarea
                                    onChange={(e) => { setDescription(e.target.value) }}
                                    className="border rounded-md border-gray-100 w-full h-full max-w-full max-h-full min-w-full min-h-full shadow-xl relative p-2"
                                />
                            </label><br />
                            <div className="w-full h-12">
                                <Button.buttonYellow type="submit">
                                    Crear carta
                                </Button.buttonYellow>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <label className="w-full h-10 mb-10">
                                <strong>Efectos:</strong> <br />
                                {[...Array(effectsAmount)].map((x,i)=>(
                                    <div key={i} className="w-full h-14 mb-10">
                                        <textarea
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
                    </form>
                </div>
            </div>
            <ModalReports 
                isOpen={modalReportOpen}
                setIsOpen={setModalReportOpen}
                onAccept={()=>{handleCreateCard()}}
            />
        </div>
    )
}
