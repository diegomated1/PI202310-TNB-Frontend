import { useEffect, useState } from "react";
import DeckProgress from "../../components/DeckProgress";
import GridDeck from "../../components/GridDeck";
import Icons from "../../components/Icons";
import NavBar from "../../components/NavBar";
import Pager from "../../components/Pager";
import ICard from "../../interfaces/ICard";
import IHeroe from "../../interfaces/IHeroe";
import cardApi from "../../services/card.api";


export default function CreateDeck() {

  const [parcialCards, setParcialCards] = useState<ICard[]>([]);

  const [cards, setCards] = useState<ICard[]>([]);

  const [heroes, setHeroes] = useState<IHeroe[]>([]);

  const handlerGetCards = async () => {
        var data = await cardApi.getAll();
        setParcialCards(data.slice(0,6));
        setCards(data);
    }

    const handlerGetHeroes = async () => {
      var data = await cardApi.getAll();
      setParcialCards(data.slice(0,6));
      setCards(data);
  }

  useEffect(() => {
    handlerGetCards();
  }, []);




  return (

    <div className="w-full h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 items-center flex flex-col bg-gray-200 p-2">
          <Pager setParcialCards={setParcialCards} cardsArray={cards}></Pager>
          <DeckProgress></DeckProgress>
          <div className="flex justify-evenly w-full">
            <div className="border-gray-600 border-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg bg-amber-400 w-14 h-12 flex justify-center items-center">
              <Icons.left></Icons.left>
            </div>
            <div className="border-gray-600 border-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg bg-amber-400 w-14 h-12 flex justify-center items-center">
              <Icons.right></Icons.right>
            </div>
          </div>
          <h1>2/5</h1>
          <div className="flex">
            <a href="">Cancelar creación de Mazo</a>
          </div>
        </div>
        <div className="flex-[4]">
          <GridDeck parcialCards = {parcialCards}></GridDeck>
        </div>
      </div>
    </div>

  )

}