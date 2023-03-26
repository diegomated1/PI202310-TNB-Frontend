import AdminCardsNavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Icons from "../../components/Icons"

export default function AdminHeroes(){
    return(
        <div className="w-screen h-screen flex flex-wrap flex-col">
            <AdminCardsNavBar/>
            <div className="w-full h-[calc(100%-50px)] bg-gray-300 flex justify-center items-center">
                <div className="w-full h-full bg-gray-300">
                    <div className="w-full h-20 flex items-center pl-10">
                        <h1 className="text-4xl md:text-5xl">Creación Carta de Heroe</h1>
                    </div>
                    <div className="w-full h-[calc(100%-5rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-10">
                        <div className="col-span-1 flex justify-center items-center flex-col">
                            <div className="border border-black rounded-md w-[300px] h-[440px] bg-white relative">
                            <img className="h-full w-full object-cover relative" src="https://images.unsplash.com/photo-1626957902611-81189024dd78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=903&q=80" alt="imagen de carta de heroe" />
                            <div className="absolute bottom-3 right-3">
                            <Icons.upload/>
                            </div>
                            </div>
                            <p>Añadir una imagen aquí</p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <label className="w-[90%] h-10 mb-14">
                                <strong>Nombre:</strong> <br/>
                                <Input/>
                            </label>
                            <label className="w-[90%] h-10 mb-14">
                                <strong>Vida:</strong>  <br/>
                                <Input/>
                            </label>
                            <label className="w-[90%] h-10 mb-14">
                                <strong>Defensa:</strong>  <br/>
                                <Input/>
                            </label>
                            <label className="w-[90%] h-10 mb-14">
                                <strong>Ataque Básico:</strong>  <br/>
                                <Input/>
                            </label>
                            <p>Ingrese la imagen primero</p>
                            <Button text="Crear" type={"buttonYellow"}/>
                        </div>
                        <div className="col-span-1 flex flex-col">
                            {/* <div><span className="text-xl"><strong>Reporte de cambios</strong></span></div>
                            <div><span className="text-gray-500 text-sm" >14/02/2023</span></div>
                            <div>
                                <p className="leading-5">
                                    Ingrese un lenguaje natural a la lista de cambios realizados a esta carta 300 caracteres
                                </p>
                            </div><br /> */}
                            <label className="w-full h-10">
                                Ataque Rango: <br/>
                                <Input/>
                            </label><br /><br />
                            <label className="w-full h-10">
                                Daño Rango: <br/>
                                <Input/>
                            </label><br /><br />
                            <label className="w-full h-52">
                                Descripcion: <br/>
                                <Input/>
                            </label><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}