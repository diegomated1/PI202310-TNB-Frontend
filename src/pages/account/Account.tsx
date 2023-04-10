import { useState } from "react";
import AdminCardsNavBar from "../../components/NavBar";
import Button from "../../components/Button";
import Icons from "../../components/Icons";



export default function Account() {
    const [showContainer, setShowContainer] = useState<{ [key: number]: boolean }>({});

    const handleIconClick = (id: number) => {
        setShowContainer({
            ...showContainer,
            [id]: !showContainer[id],
        });
    };

    const [menuActivo, setMenuActivo] = useState("");

    const mostrarMenu1 = () => {
        setMenuActivo('menu1');
    };

    const mostrarMenu2 = () => {
        setMenuActivo('menu2');
    };
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-screen flex flex-wrap flex-col">
            <AdminCardsNavBar></AdminCardsNavBar>
            <div className="flex flex-col flex-1">
                <div className="">
                    <div className="bg-blue-500 p-10 text-white mr-20 ml-20">
                        <div className="flex items-center ">
                            <img src="https://via.placeholder.com/150" alt="Profile Picture" className="rounded-full mr-4 -mb-60"/>
                            <h1 className="text-4xl  -mb-60 text-black ml-10 mt-12">username</h1>
                        </div>
                        
                       

                        <div className="flex justify-end  p-4">
                            <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" onClick={mostrarMenu1}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.292 7.292a1 1 0 0 0-1.414-1.414L8 9.586 5.121 6.707A1 1 0 1 0 3.707 8.121l3.172 3.172a1 1 0 0 0 1.414 0l5-5z" clipRule="evenodd"/>
                                </svg>
                                Cuenta
                            </button>
                            <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={mostrarMenu2}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M17 10a7 7 0 11-14 0 7 7 0 0114 0zm2 0a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                                </svg>
                                Banco
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex items-center p-4">
                        <figure className="w-32 h-32 rounded-full overflow-hidden">
                            <img className="object-contain" src="./imagen/th.jpeg" alt="" />
                        </figure>
                    </div>
                </div>


                <div className="flex  flex-1">
                    <div className="flex w-[40%] flex-col">
                        {menuActivo === 'menu1' && (
                            <div className="rounded mr-20 ml-20">
                              <div className="border border-gray-300 p-4 rounded relative">
                                <div className="flex justify-between items-center text-lg font-medium mb-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                  <h1>Mi cuenta</h1>
                                  <div className="transform rotate-90">
                                    <Icons.right />
                                  </div>
                                </div>
                                {isOpen && (
                                  <div className="border-t border-gray-300 pt-4">
                                    <button className="w-full text-left mb-2 py-2 px-4 block text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => handleIconClick(1)}>Cambiar contraseña</button>
                                    <button className="w-full text-left mb-2 py-2 px-4 block text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => handleIconClick(2)}>Eliminar cuenta</button>
                                  </div>
                                )}
                                <div className="flex justify-between items-center text-lg font-medium mb-2">
                                  <h1>Datos personales</h1>
                                  <div className="cursor-pointer" onClick={() => handleIconClick(2)}>
                                        <Icons.right/>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-lg font-medium mb-2">
                                  <h1>Metodos de pago</h1>
                                  <div className="cursor-pointer" onClick={() => handleIconClick(3)}>
                                        <Icons.right/>
                                    </div>
                                </div>
                              </div>
                            </div>
                        )}
                    </div>
                    <div className="flex w-[60%] rounded">
                        {menuActivo === 'menu1' && (
                            <div>
                                <div className=" border border-slate-100 p-4 rounded">
                                    <div className="" >
                                        {showContainer[1] && (
                                            <div className="border border-slate-100 p-4 rounded">
                                                <div className="flex flex-col space-y-4">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
                                                    Define Password Restore Questions
                                                </button>
                                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button">
                                                    Restore Password
                                                </button>
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button">
                                                    Delete Account
                                                </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="" >
                                        {showContainer[2] && (
                                            <div className="border border-slate-100 p-4 rounded">
                                                <form className="max-w-xl mx-auto">
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                                        Nombre
                                                        </label>
                                                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John"/>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="last-name">
                                                        Apellido
                                                        </label>
                                                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Doe"/>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                                        E-mail
                                                        </label>
                                                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com"/>
                                                    </div>
                                                    <div className="mb-6">
                                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                                                        Direccion
                                                        </label>
                                                        <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" rows="4" placeholder="123 Main St."></textarea>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="profile-pic">
                                                        Avatar
                                                        </label>
                                                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile-pic" type="file"/>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                        Guardar
                                                        </button>
                                                        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                        Cancelar
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                    <div className="" >
                                        {showContainer[3] && (
                                            <div className="border border-slate-100 p-4 rounded">
                                                <div className="max-w-md mx-auto">
                                                    <form>
                                                    <div className="mb-6">
                                                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name on card</label>
                                                        <input id="name" type="text" name="name" placeholder="John Doe" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                                    </div>
                                                    <div className="mb-6">
                                                        <label htmlFor="card" className="block text-gray-700 font-bold mb-2">Card number</label>
                                                        <input id="card" type="text" name="card" placeholder="**** **** **** ****" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                                    </div>
                                                    <div className="mb-6">
                                                        <label htmlFor="expiry" className="block text-gray-700 font-bold mb-2">Expiration date</label>
                                                        <input id="expiry" type="text" name="expiry" placeholder="MM / YY" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                                    </div>
                                                    <div className="mb-6">
                                                        <label htmlFor="cvc" className="block text-gray-700 font-bold mb-2">CVC</label>
                                                        <input id="cvc" type="text" name="cvc" placeholder="***" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                        Submit
                                                        </button>
                                                    </div>
                                                    </form>
                                          </div></div>
                                        )}
                                    </div>
                                    <div className="" >
                                        {showContainer[4] && (
                                            <div className="border border-slate-100 p-4 rounded">Contenido del contenedor morado</div>
                                        )}
                                    </div>
                                    <div className="" >
                                        {showContainer[5] && (
                                            <div className="border border-slate-100 p-4 rounded">Contenido del contenedor amarillo</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                        {menuActivo === 'menu2' && (
                           <div>
                           <div>
                               <div className="" >
                                   {showContainer[1] && (
                                       <div className="border border-slate-100 p-4 rounded">Contenido del contenedor rojo1</div>
                                   )}
                               </div>
                               <div className="" >
                                   {showContainer[2] && (
                                       <div className="border border-slate-100 p-4 rounded">Contenido del contenedor Azul1</div>
                                   )}
                               </div>
                               <div className="" >
                                   {showContainer[3] && (
                                       <div className="border border-slate-100 p-4 rounded">Contenido del contenedor verde1</div>
                                   )}
                               </div>
                               <div className="" >
                                   {showContainer[4] && (
                                       <div className="border border-slate-100 p-4 rounded">Contenido del contenedor morado1</div>
                                   )}
                               </div>
                               
                           </div>
                       </div> 
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}
