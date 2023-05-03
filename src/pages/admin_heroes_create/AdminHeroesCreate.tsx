import AdminCardsNavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"
import heroesApi from "../../services/heroe.api";
import { useState, FormEvent } from "react";
import ModalReports from "../../components/modals/Reports";

export default function AdminHeroesCreate() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File>();
    const [health, setHealth] = useState('');
    const [defense, setDefense] = useState('');
    const [attack_basic, setAttack_basic] = useState('');
    const [attack_range, setAttack_range] = useState('');
    const [damage_range, setDamage_range] = useState('');

    const [modalReportOpen, setModalReportOpen] = useState(false);

    const handleCreateHeroe = async () => {
        try {
            //var data = await heroesApi.insert({name, description, power:1, health:parseInt(health), defense:parseInt(defense), attack_basic:parseInt(attack_basic), attack_range:parseInt(attack_range), damage_range:parseInt(damage_range)}, image!);
            alert("Carta creada con exito");
            window.location.reload();
        } catch (error) {
            alert("No se pudo crear la carta");
        }
    }

    /**
     * Function submit form
     * @param e 
     */
    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setModalReportOpen(true);
    }

    return (
        <div className="w-screen h-screen flex flex-wrap flex-col">
            <AdminCardsNavBar />
            <div className="w-full h-[calc(100%-50px)] bg-gray-300 flex justify-center items-center">
                <div className="w-full h-full bg-gray-300">
                    <div className="w-full h-20 flex items-center pl-10">
                        <h1 className="text-4xl md:text-5xl">Creación Carta de Heroe</h1>
                    </div>
                    <form onSubmit={handleSubmitForm} className="w-full h-[calc(100%-5rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-10">
                        <div className="col-span-1 flex justify-center items-center flex-col">
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
                            <p>Añadir una imagen aquí</p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <label className="w-full h-10 mb-14">
                                <strong>Nombre de heroe:</strong> <br />
                                <select onChange={(e) => { setName(e.target.value) }} className="w-full focus:outline-none h-full rounded-md p-2 shadow-md">
                                    <option value="Guerrero Tanque"> Guerrero Tanque </option>
                                    <option value="Guerrero Armas"> Guerrero Armas </option>
                                    <option value="Mago Fuego"> Mago Fuego </option>
                                    <option value="Mago Hielo"> Mago Hielo </option>
                                    <option value="Pícaro Veneno"> Pícaro Veneno </option>
                                    <option value="Pícaro Machete"> Pícaro Machete </option>
                                </select>
                            </label>
                            <label className="w-full h-40 mb-10">
                                <strong>Descripcion de la carta: </strong><br />
                                <textarea
                                    required
                                    onChange={(e) => { setDescription(e.target.value) }}
                                    className="border rounded-md border-gray-100 w-full h-full max-w-full max-h-full min-w-full min-h-full shadow-xl relative p-2"
                                />
                            </label><br />
                            <div className="w-full h-12 mt-auto mb-24">
                                <p>Ingrese la imagen primero</p>
                                <Button.buttonYellow type="submit">
                                    Crear heroe
                                </Button.buttonYellow>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <label className="w-full h-10 mb-14">
                                <strong>Vida:</strong>  <br />
                                <Input onChange={(e) => { setHealth(e.target.value) }} />
                            </label>
                            <label className="w-full h-10 mb-14">
                                <strong>Defensa:</strong>  <br />
                                <Input onChange={(e) => { setDefense(e.target.value) }} />
                            </label>
                            <label className="w-full h-10 mb-14">
                                <strong>Ataque Básico:</strong>  <br />
                                <Input onChange={(e) => { setAttack_basic(e.target.value) }} />
                            </label>
                            <label className="w-full h-10">
                                <strong>Ataque Rango:</strong> <br />
                                <Input onChange={(e) => { setAttack_range(e.target.value) }} />
                            </label><br /><br />
                            <label className="w-full h-10">
                                <strong>Daño Rango:</strong> <br />
                                <Input onChange={(e) => { setDamage_range(e.target.value) }} />
                            </label><br /><br />
                        </div>
                    </form>
                </div>
            </div>
            <ModalReports
                isOpen={modalReportOpen}
                setIsOpen={setModalReportOpen}
                onAccept={() => { handleCreateHeroe() }}
            />
        </div>
    )
}