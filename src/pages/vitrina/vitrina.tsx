import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import AdminCardsNavBar from "../../components/NavBar"
import Pager from "../../components/Pager"
import ICard from "../../interfaces/ICard"
import cardApi from "../../services/card.api"
import IProduct from "../../interfaces/IProduct"
import productsApi from "../../services/products.api"
import GridProducts from "../../components/GridProducts"
import ModalCart from "../../components/modals/ModalCart"

export default function Vitrina() {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const handleGetProducts = async () => {
            const products = await productsApi.getProducts(1);
            setProducts(products)
        }
        handleGetProducts();
    }, [])  

    return (
        <div className="container min-w-screen h-screen">
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
                <div className="">
                    <GridProducts products={products} />
                </div>
            </div>


            {/* paginador */}
            <div className="max-w-[50%] ml-[25%] mt-2">
                {/* <Pager/> */}
            </div>
        </div >
    )
}

