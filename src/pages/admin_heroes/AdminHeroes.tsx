import AdminCardsNavBar from "../../components/AdminCardsNavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Icons from "../../components/Icons"
import heroesApi from "../../services/heroe.api";
import { useState, FormEvent } from "react";

export default function AdminHeroes() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File>();
    const [health, setHealth] = useState('');
    const [defense, setDefense] = useState('');
    const [attack_basic, setAttack_basic] = useState('');
    const [attack_range, setAttack_range] = useState('');
    const [damage_range, setDamage_range] = useState('');

    const handleCreateHeroe = async (e: FormEvent) => {
        try {
            e.preventDefault();
            console.log(name);
            console.log(description);
            console.log(health);
            console.log(defense);
            console.log(attack_basic);
            console.log(attack_range);
            console.log(damage_range);
            var data = await heroesApi.insert({name, description, power:1, health:parseInt(health), defense:parseInt(defense), attack_basic:parseInt(attack_basic), attack_range:parseInt(attack_range), damage_range:parseInt(damage_range)}, image!);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-screen h-screen flex flex-wrap flex-col">
            <AdminCardsNavBar />
            <div className="w-full h-[calc(100%-50px)] bg-gray-300 flex justify-center items-center">
                <div className="w-full h-full bg-gray-300">
                    <div className="w-full h-20 flex items-center pl-10">
                        <h1 className="text-4xl md:text-5xl">Creación Carta de Heroe</h1>
                    </div>
                    <div className="w-full h-[calc(100%-5rem)] grid grid-cols-3 p-5 gap-10">
                        <div className="col-span-1 flex justify-center items-center flex-col">
                        <div className="border border-black rounded-md w-[300px] h-[440px] flex flex-col items-center">
                                <img src={(image) ? URL.createObjectURL(image!) : ''}></img>
                                <div className="mt-auto relative w-[50px] h-[50px] rounded-[25px]">
                                    <input 
                                        className="cursor-pointer opacity-0 absolute top-0 left-0 w-full h-full z-20"
                                        onChange={(e)=>{setImage(e.target.files![0])}} type={'file'}
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
                        <div className="col-span-2">
                            <form onSubmit={handleCreateHeroe} className="grid grid-cols-2 p-5 gap-10 w-full">
                                <div className="col-span-1 flex flex-col items-center">
                                    <label className="w-[90%] h-10 mb-14">
                                        <strong>Nombre:</strong> <br />
                                        <Input onChange={setName}/>
                                    </label>
                                    <label className="w-[90%] h-10 mb-14">
                                        <strong>Vida:</strong>  <br />
                                        <Input onChange={setHealth}/>
                                    </label>
                                    <label className="w-[90%] h-10 mb-14">
                                        <strong>Defensa:</strong>  <br />
                                        <Input onChange={setDefense}/>
                                    </label>
                                    <label className="w-[90%] h-10 mb-14">
                                        <strong>Ataque Básico:</strong>  <br />
                                        <Input onChange={setAttack_basic}/>
                                    </label>
                                    <p>Ingrese la imagen primero</p>
                                    <Button text="Crear" type="buttonYellow" />
                                </div>
                                <div className="col-span-1 flex flex-col">
                                    <label className="w-full h-10">
                                        Ataque Rango: <br />
                                        <Input onChange={setAttack_range}/>
                                    </label><br /><br />
                                    <label className="w-full h-10">
                                        Daño Rango: <br />
                                        <Input onChange={setDamage_range}/>
                                    </label><br /><br />
                                    <label className="w-full h-52">
                                        Descripcion: <br />
                                        <Input onChange={setDescription}/>
                                    </label><br />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}