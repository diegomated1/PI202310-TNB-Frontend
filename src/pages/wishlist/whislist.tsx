import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import AdminCardsNavBar from "../../components/NavBar";
import Pager from "../../components/Pager";
import ICard from "../../interfaces/ICard";
import cardApi from "../../services/card.api";
import { StringDecoder } from "string_decoder";
import IProduct from "../../interfaces/IProduct";
import WishlistComponent from "./component/WishlistComponent";
import WishlistApi from "../../services/cart.api";
import productsApi from "../../services/products.api";
import useAuth from "../../hooks/useAuth";
import cartApi from "../../services/cart.api";
import { useSearchParams } from "react-router-dom";
import GridProducts from "../../components/GridProducts";
import Paginator from "../vitrina/components/paginator";
import Hero from "../../components/Hero";
import IHero from "../../interfaces/IHero";
import heroApi from "../../services/hero.api";

export default function Wishlist() {
  const [products, setProducts] = useState<string[]>([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [params, setParams] = useSearchParams();
  
  const user = useAuth();

  useEffect(()=>{
      const page = params.get('pages');
      if(page){
          setCurrentPage(parseInt(page))
      }
  }, [params]);

  const handleGetProducts = async (page:number) => {
    console.log(user);
    if(user){
      const products = await cartApi.getWishList(user.id_user, page);
      setProducts(products.products);
      setPages(products.pages);
      setCurrentPage(page);
      params.set('page', page.toString());
      setParams(params);
    }
  }

  useEffect(() => {
    if(user){
      const page = params.get('page');
      const currentPage = parseInt(page||'1');
      handleGetProducts(currentPage);
    }
  }, [user])  

  return (
      <div className="w-screen h-screen flex flex-col">
          <AdminCardsNavBar />
          <div className="flex flex-1 h-full p-8">
              <div className="flex-[2] bg-red-200 flex flex-col">
                  {/* <GridProducts products={products} /> */}
                  <div className="flex-1 p-10">
                    <div className="h-full w-full grid grid-cols-3 grid-rows-2 gap-2 p-2">
                      {
                        (products) ? (
                          products.map((product, i) => (
                            <Product key={i} id_product={product}/>
                          ))
                        ) : ''
                      }
                    </div>
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

function Product({id_product}:{id_product:string}){

  const [product, setProduct] = useState<IProduct>();
  const [card, setCard] = useState<ICard>();
  const [hero, setHero] = useState<IHero>();

  useEffect(()=>{
    console.log(id_product);
    const handleGetCard = async () => {
      const product = await productsApi.getProductById(id_product);
      if(product.type=='card'){
        const card = await cardApi.getById(product.id_product!);
        setCard(card);
      }else{
        const hero = await heroApi.getById(product.id_product!);
        setHero(hero);
      }
      setProduct(product);
    }
    handleGetCard();
  }, []);

  return(
    (product) ? 
    (product.type=='card') ? (
      <Card card={card} product={product}/>
    ) : (
      <Hero hero={hero} product={product}/>
    ) : <span>Loading...</span>
  )
  
}
