import { useEffect, useState } from "react";
import IProduct from "../interfaces/IProduct";
import ICard from "../interfaces/ICard";
import productsApi from "../services/products.api";
import cardApi from "../services/card.api";
import heroApi from "../services/hero.api";
import IHero from "../interfaces/IHero";

export default function useGetProduct(id_product:string):[IProduct?, ICard?, IHero?]{

    const [product, setProduct] = useState<IProduct>();
    const [card, setCard] = useState<ICard>();
    const [hero, setHero] = useState<IHero>();

    useEffect(()=>{
        const handleGetProduct = async () => {
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
        handleGetProduct();
    }, []);

    return [product, card, hero]
}

