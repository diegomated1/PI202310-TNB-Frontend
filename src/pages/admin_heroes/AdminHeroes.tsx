import AdminCardsNavBar from "../../components/AdminCardsNavBar"
import Button from "../../components/Button"
import Input from "../../components/Input"

export default function AdminHeroes(){
    return(
        <div className="w-screen h-screen flex flex-wrap flex-col">
            <AdminCardsNavBar/>
            <div className="w-full h-[calc(100%-70px)] bg-gray-300 flex justify-center items-center">
                <div className="w-full h-full bg-gray-300">
                    <div className="w-full h-20 flex items-center pl-10">
                        <h1 className="text-4xl md:text-5xl">Edicion cartas Epicas</h1>
                    </div>
                    <div className="w-full h-[calc(100%-5rem)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10 gap-10">
                        <div className="col-span-1 flex justify-center items-center">
                            <div className="border border-black rounded-md w-[300px] h-[440px]">

                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col items-center">
                            <label className="w-[90%] h-10 mb-10">
                                <strong>Nombre:</strong> <br/>
                                <Input/>
                            </label>
                            <label className="w-[90%] h-10 mb-14">
                                <strong>Descripcion:</strong>  <br/>
                                <Input/>
                            </label>
                            <Button text="Crear"/>
                        </div>
                        <div className="col-span-1 flex flex-col">
                            <div><span className="text-xl"><strong>Reporte de cambios</strong></span></div>
                            <div><span className="text-gray-500 text-sm" >14/02/2023</span></div>
                            <div>
                                <p className="leading-5">
                                    Ingrese un lenguaje natural a la lista de cambios realizados a esta carta 300 caracteres
                                </p>
                            </div><br />
                            <label className="w-full h-10">
                                Asunto: <br/>
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