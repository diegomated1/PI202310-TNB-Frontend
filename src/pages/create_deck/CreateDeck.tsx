import { useEffect, useState } from "react";
import DeckProgress from "../../components/DeckProgress";
import GridDeck from "../../components/GridDeck";
import Icons from "../../components/Icons";
import NavBar from "../../components/NavBar";
import Pager from "../../components/Pager";
import ICard from "../../interfaces/ICard";
import IHeroe from "../../interfaces/IHeroe";
import cardApi from "../../services/card.api";
import heroeApi from "../../services/heroe.api";


export default function CreateDeck() {

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [parcialCards, setParcialCards] = useState<ICard[]>([]);
  const [parcialHeroes, setParcialHeroes] = useState<IHeroe[]>([]);
  const [cards, setCards] = useState<ICard[]>([]);
  const [heroes, setHeroes] = useState<IHeroe[]>([]);

  type Pages = {
    [key: number]: string;
  };

  const pages:Pages = {
    1: "heroes",
    2: "sword",
    3: "armor",
    4: "epic",
    5: "item"
  };

  const handleNextClick = ()=>{
    var nextPage = currentPage + 1;
    if (nextPage >= Object.keys(pages).length + 1) nextPage = 1;
    setCurrentPage(nextPage);
  }

  const handlePrevClick = ()=>{
    var prevPage = currentPage - 1;
    if (prevPage < 1) prevPage = Object.keys(pages).length;
    setCurrentPage(prevPage);
  }

  const render = ()=>{
    if(currentPage==1){
      setParcialCards([]);
      console.log('heroes melo');
      handlerGetHeroes();
    }else{
      setParcialHeroes([]);
      console.log(`${pages[currentPage]} melo`);
      handlerGetCards(currentPage);
    }
  }

  useEffect(()=>{
    render();
  }, [currentPage]);

  const handlerGetCards = async (page:number) => {
    var data = await cardApi.getAll();
    console.log(data);
    data = data.filter((card) => card.card_type === pages[page]);
    console.log(data);
    setParcialCards(data.slice(0, 6));
    setCards(data);
  }

  const handlerGetHeroes = async () => {
    var data = await heroeApi.getAll();
    setParcialHeroes(data.slice(0, 6));
    setHeroes(data);
  }

  useEffect(() => {
    handlerGetHeroes();
  }, []);

  return (

    <div className="w-full h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 items-center flex flex-col bg-gray-200 p-2">
          <Pager setParcialCards={(currentPage==1) ? setParcialHeroes : setParcialCards} cardsArray={(currentPage==1)?heroes:cards}></Pager>
          <DeckProgress></DeckProgress>
          <div className="flex justify-evenly w-full">
            <div className="border-gray-600 border-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg bg-amber-400 w-14 h-12 flex justify-center items-center cursor-pointer" onClick={handlePrevClick}>
              <Icons.left></Icons.left>
            </div>
            <div className="border-gray-600 border-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg bg-amber-400 w-14 h-12 flex justify-center items-center cursor-pointer" onClick={handleNextClick}>
              <Icons.right></Icons.right>
            </div>
          </div>
          <h1>{currentPage}/5</h1>
          <div className="flex">
            <a href="">Cancelar creación de Mazo</a>
          </div>
        </div>
        <div className="flex-[4]">
          <GridDeck
            type={currentPage==1?0:1}
            parcialCards={currentPage==1?parcialHeroes:parcialCards}
           ></GridDeck>
        </div>
      </div>
    </div>

  )

}