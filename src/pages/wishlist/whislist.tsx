import React, { useEffect, useState } from "react"
import Card from "../../components/Card"
import AdminCardsNavBar from "../../components/NavBar"
import Pager from "../../components/Pager"
import ICard from "../../interfaces/ICard"
import cardApi from "../../services/card.api"
import { StringDecoder } from "string_decoder"
import IProduct from "../../interfaces/IProduct"
import WishlistComponent from "./component/WishlistComponent"

export default function Wishlist() {

    const productList: IProduct[] = [
    {
        id_product: 1,
        type_object: "card",
        id_object: "ilfr4nqjg",
        price: 20,
        discount: 0.1,
        availability: 10,
        amount: 100,
        overall_rating: 4.5
      },
      {
        id_product: 2,
        type_object: "hero",
        id_object: "ilfr4jkmz",
        price: 15,
        discount: 0.2,
        availability: 5,
        amount: 50,
        overall_rating: 3.8
      },
      {
        type_object: "card",
        id_object: "ilfr4p9r3",
        price: 25,
        discount: 0.15,
        availability: 20,
        amount: 200,
        overall_rating: 4.2
      }
    ]
      

    return (
        <div className="w-screen h-full flex flex-col">
            <AdminCardsNavBar></AdminCardsNavBar>
            <h1 className="text-6xl pt-8 pl-6">Lista de deseos</h1>
            {/* <div className="h-full flex">
                    <h2>Nombre del producto</h2>
                    <h2>Descuento</h2>
                    <h2>Precio unitario</h2>
                    <h2>En stock</h2>
                </div> */}
            <div className="w-screen h-full flex">
                <div className="flex-[3] p-4">
                {productList?.map((index, i) => {
                    return (
                        <WishlistComponent product={index} key={i}></WishlistComponent>
                    );
                    })}
                </div>
            </div>
        </div>
    )

}