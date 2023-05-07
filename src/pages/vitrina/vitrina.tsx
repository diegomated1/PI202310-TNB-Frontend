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
import Paginator from "./components/paginator"
import { useSearchParams } from "react-router-dom"

export default function Vitrina() {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [params, setParams] = useSearchParams();
    
    useEffect(()=>{
        const page = params.get('pages');
        if(page){
            setCurrentPage(parseInt(page))
        }
    }, [params]);

    const handleGetProducts = async (page:number) => {
        const products = await productsApi.getProducts(page);
        setProducts(products.products);
        setPages(products.pages);
        setCurrentPage(page);
        params.set('page', page.toString());
        setParams(params);
    }

    useEffect(() => {
        const page = params.get('page');
        const currentPage = parseInt(page||'1');
        handleGetProducts(currentPage);
    }, [])  

    return (
        <div className="w-screen h-screen flex flex-col">
            <AdminCardsNavBar />
            <div className="flex flex-1 h-full p-8">
                {/* filtro */}
                <div className="flex-1 justify-center items-center  bg-slate-400 rounded-md ml-3">
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

                
                <div className="flex-[2] bg-red-200 flex flex-col">
                    {/* <GridProducts products={products} /> */}
                    <div className="flex-1 p-10">
                        <GridProducts products={products} />
                    </div>
                    <div className="w-full h-14 flex flex-row-reverse">
                        <Paginator 
                            pages={pages} 
                            currentPage={currentPage}
                            changePage={handleGetProducts}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

