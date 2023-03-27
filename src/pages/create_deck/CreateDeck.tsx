import { useState } from "react";
import DeckProgress from "../../components/DeckProgress";
import Icons from "../../components/Icons";
import NavBar from "../../components/NavBar";
import Pager from "../../components/Pager";
import ICard from "../../interfaces/ICard";


export default function CreateDeck() {

  const [parcialCards, setParcialCards] = useState<ICard[]>([]);

  const [cards, setCards] = useState<ICard[]>([]);

  return (

    <div className="w-full h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 items-center flex flex-col">
          <Pager setParcialCards={setParcialCards} cardsArray={cards}></Pager>
          <DeckProgress></DeckProgress>
          <div className="flex">
            <Icons.left></Icons.left>
          </div>
        </div>
        <div className="flex-[4]">

        </div>
      </div>
    </div>

  )

}