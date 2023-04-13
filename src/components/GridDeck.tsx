import { useState, FormEvent, useEffect } from "react";
import ICard from "../interfaces/ICard";
import IHeroe from "../interfaces/IHeroe";
import Hero from "./Hero";
import cardApi from "../services/card.api";
import Card from "./Card";
import { type } from "os";

type GridProps = {

  type: number;
  parcialCards?:ICard[]|IHeroe[];

  onClick1?: () => void;
  onClick2?: () => void;
  onClick3?: () => void;

} 

export default function GridDeck({type, parcialCards, onClick1, onClick2, onClick3}: GridProps) {

  return (

    <div className="h-full">
      <div className="h-full grid grid-cols-3 grid-rows-2 gap-3 p-2">
        {
          (parcialCards) ? (
            (type==1) ? (
              (parcialCards as ICard[]).map((card, id) => (
                <Card key={card._id} card={card} price={10} discount={15} obtained={"yes"}></Card>
              ))
            ) : (
              (parcialCards as IHeroe[]).map((heroe, id) => (
                <Hero key={heroe._id} heroe={heroe} price={10} discount={15} obtained={"yes"}></Hero>
              ))
            )
          ) : ''
        }
      </div>
    </div>

  )

}