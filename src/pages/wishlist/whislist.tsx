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

    // export default interface IProduct{
    //     id_product?: string,
    //     type: string,
    //     price: number,
    //     discount: number,
    //     availability: number,
    //     amount: number,
    //     overall_rating: number,
    //     amount_people_rate: number
    // }

    const productList: IProduct[] = [
    {
        id_product: "ilfr4nqjg",
        type: "card",
        price: 20,
        discount: 0.1,
        availability: 0,
        amount: 100,
        overall_rating: 4.5,
        amount_people_rate: 4.5
      },
      {
        id_product: "ilfr4jkmz",
        type: "hero",
        price: 15,
        discount: 0.2,
        availability: 0,
        amount: 50,
        overall_rating: 3.8,
        amount_people_rate: 4.5
      },
      {
        id_product: "ilfr4p9r3",
        type: "card",
        price: 25,
        discount: 0.15,
        availability: 1,
        amount: 200,
        overall_rating: 4.2,
        amount_people_rate: 4.5
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