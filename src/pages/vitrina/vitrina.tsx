import React from "react"
import Card from "../../components/Card"
import AdminCardsNavBar from "../../components/AdminCardsNavBar"
import Pager from "../../components/Pager"

export default function Vitrina() {
    return (
        <div className="container min-w-[1366px] ">

            <AdminCardsNavBar />
            <div className="flex h-full mt-12">
                {/* filtro */}
                <div className="h-2/3 w-52 justify-center items-center  bg-slate-400 rounded-md ml-3">
                    <div>
                        <div className="mt-4 bg-slate-50 rounded-md m-2">
                            <h4 className="text-center px-4">Precio Carta</h4>
                            <span className="ml-6"> Min</span>
                            <span className="ml-12"> Max</span>
                        </div>
                    </div>
                    <ul className="list-reset ">
                        <li className="my-2 md:my-0 ">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                                <i className="fas fa-tasks fa-fw mr-3"></i><span className="w-full inline-block pb-1 md:pb-0 text-sm">Tipo de carta</span>
                            </a>
                        </li>
                        <li className="my-2 md:my-0">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                                <i className="fa fa-envelope fa-fw mr-3"></i><span className="w-full inline-block pb-1 md:pb-0 text-sm">Clases de guerrero</span>
                            </a>
                        </li>
                        <li className="my-2 md:my-0">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                                <i className="fas fa-chart-area fa-fw mr-3 text-indigo-400"></i><span className="w-full inline-block pb-1 md:pb-0 text-sm">Analytics</span>
                            </a>
                        </li>
                        <li className="my-2 md:my-0">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                                <i className="fa fa-wallet fa-fw mr-3"></i><span className="w-full inline-block pb-1 md:pb-0 text-sm">Payments</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* grid-cartas. */}
                <div className="container mx-auto p-0 px-32 w-full h-[calc(100%-50px)]">
                    <div className='grid lg: grid-cols-3 ml-0'>
                        <div className="max-w-[13rem] max-h-[18rem]">
                            <Card />
                        </div>
                        <div className="max-w-[13rem] max-h-[18rem]" >
                            <Card />
                        </div>
                        <div className="max-w-[13rem] max-h-[18rem]">
                            <Card />
                        </div>

                    </div>
                    <div className='grid lg: grid-cols-3 mt-3 ml-0'>
                        <div className="max-w-[13rem] max-h-[19rem]">
                            <Card />
                        </div>
                        <div className="max-w-[13rem] max-h-[19rem]" >
                            <Card />
                        </div>
                        <div className="max-w-[13rem] max-h-[19rem]">
                            <Card />
                        </div>
                    </div>

                </div>
            </div>
            {/* paginador */}
            <div className="max-w-[50%] ml-[25%] mt-2">
                <Pager/>
            </div>
            {/* carritoflotante */}
            <div className="container-cart-cards  max-w-[19rem] min-h-[20rem] border-2 mt-4 hidden ">
                {/* cartaflotante */}
                <div className="row-cards flex ml-3 mt-2">
                    <div className="flex max-w-[10rem]">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MUq3awEA1KEnMlL9U-C_JwHaEK%26pid%3DApi&f=1&ipt=b64ce7b8fd13508ca19f449c37c528d0533744a65960b4d4ff6e0f20ca61e97e&ipo=images" className="w-full h-20" alt="" />
                    </div>
                    <div className="flex-none  min-w-[9rem] ml-5">
                        <p className="">titulo</p>
                        <span className="">x1</span>
                        <span className="float-none">$10.000</span>
                    </div>

                </div>
                {/* carta repetitiva-borrar */}
                <div className="row-cards flex ml-3 mt-2">
                    <div className="flex max-w-[10rem]">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MUq3awEA1KEnMlL9U-C_JwHaEK%26pid%3DApi&f=1&ipt=b64ce7b8fd13508ca19f449c37c528d0533744a65960b4d4ff6e0f20ca61e97e&ipo=images" className="w-full h-20" alt="" />
                    </div>
                    <div className="flex-none  min-w-[9rem] ml-5">
                        <p className="">titulo</p>
                        <span className="">x1</span>
                        <span className="float-none">$10.000</span>
                    </div>

                </div>


                <div className="ml-3 mt-2 flex">
                    <ul>
                        <li>
                            Total bruto
                        </li>
                        <li>
                            Impuestos
                        </li>
                    </ul>
                </div>
                {/* totales */}
                <div className="flex max-w-full ml-3">
                    <div className="flex-none w-[147px]">
                        <span>Total</span>
                    </div>
                    <div className="flex-none">
                        <span>$100.000</span>
                    </div>
                </div>
            </div>

        </div >
    )
}

