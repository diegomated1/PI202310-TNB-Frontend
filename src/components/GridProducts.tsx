import { useState, useEffect } from "react";
import ICard from "../interfaces/ICard";
import cardApi from "../services/card.api";
import Card from "./Card";
import IProduct from "../interfaces/IProduct";
import IHero from "../interfaces/IHero";
import heroApi from "../services/hero.api";
import Hero from "./Hero";

type GridProps = {
  products:IProduct[];
}

export default function GridProducts({products}: GridProps) {

  return (
    <div className="h-full w-full grid grid-cols-3 grid-rows-2 gap-2 p-2">
      {
        (products) ? (
          products.map((product, i) => (
            <Product key={i} product={product}/>
          ))
        ) : ''
      }
    </div>
  )
}

function Product({product}:{product:IProduct}){

  const [card, setCard] = useState<ICard>();
  const [hero, setHero] = useState<IHero>();

  useEffect(()=>{
    const handleGetCard = async () => {
      if(product.type=='card'){
        const card = await cardApi.getById(product.id_product!);
        setCard(card);
      }else{
        const hero = await heroApi.getById(product.id_product!);
        setHero(hero);
      }
    }
    handleGetCard();
  }, [product]);

  return(
    (product.type=='card') ? (
      <Card card={card} product={product}/>
    ) : (
      <Hero hero={hero} product={product}/>
    )
  )
  
}

