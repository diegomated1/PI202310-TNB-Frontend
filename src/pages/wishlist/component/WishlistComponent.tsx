import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import IProduct from "../../../interfaces/IProduct";
import ICard from "../../../interfaces/ICard";
import cardsApi from "../../../services/card.api";
import IHero from "../../../interfaces/IHeroe";
import heroeApi from "../../../services/heroe.api";
import Icons from "../../../components/Icons";

type ListWishlistProps = {
  product?: IProduct;
  onClick1?: () => void;
};

export default function TileLobby({ product }: ListWishlistProps) {
  const [image, setImage] = useState<File>();

  const [card, setCard] = useState<ICard>();

  const [disabled, setDisabled] = useState<boolean>(false);

  const handleSetAvaliability = async () => {

  }

  const handleGetCard = async () => {
    const data = await cardsApi.getById(product?.id_product!);
    setCard(data);
  };

  const [hero, setHero] = useState<IHero>();

  const handleGetHero = async () => {
    const data = await heroeApi.getById(product?.id_product!);
    setHero(data);
  };

  useEffect(() => {
    if (product?.type == "hero") {
      handleGetHero();
    } else {
      handleGetCard();
    }
    setDisabled(product!.availability === 0)
  }, [product!.availability]);

  // cartas

  // ilfr4nqjg
  // ilfr4bh8k
  // ilfr4p9r3

  // heroes

  // guererro tanque: ilfr4bh8k
  // guerrero armas: ilfr4jkmz

  //const onClick1: () => void;

  if (product?.type == "hero") {
    return (
      <div className="w-full h-32 flex p-3 border-b border-gray-800 border-opacity-50">
        <div className="w-[50%] h-full flex items-center justify-evenly">
          <figure className="h-full w-auto">
            <img
              className="object-contain h-[95%]"
              src={
                image
                  ? URL.createObjectURL(image!)
                  : `${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${
                      product!.id_product
                    }`
              }
            />
          </figure>
          <h1>{hero?.name}</h1>
        </div>
        <div className="w-[50%] h-full flex items-center justify-evenly">
          <h1>{product.price}</h1>
          {product.availability === 1 ? <Icons.checkGreen /> : <Icons.x />}
          <div className="w-[30%]">
          <Button.buttonYellow disabled={disabled}>Añadir</Button.buttonYellow>
          </div>
          <div className="">
            <Icons.trash></Icons.trash>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-32 flex p-3 border-b border-gray-800 border-opacity-50">
        <div className="w-[50%] h-full flex items-center justify-evenly">
          <figure className="h-full w-auto">
            <img
              className="object-contain h-[95%]"
              src={
                image
                  ? URL.createObjectURL(image!)
                  : `${import.meta.env.VITE_API_CARDS_URL}/images/cards/${
                      product!.id_product
                    }`
              }
            />
          </figure>
          <h1>{card?.name}</h1>
        </div>
        <div className="w-[50%] h-full flex items-center justify-evenly">
          <h1>{product!.price}</h1>
          {product!.availability === 1 ? <Icons.checkGreen /> : <Icons.x />}
          <div className="w-[30%]">
          <Button.buttonYellow disabled={disabled}>Añadir</Button.buttonYellow>
          </div>
          <div className="">
            <Icons.trash></Icons.trash>
          </div>
        </div>
      </div>
    );
  }

  // return (
  //   <div className="w-full h-32 flex p-3 border-b border-gray-800 border-opacity-50">
  //     <div className="flex-[3]  flex justify-evenly items-center">
  //       <div className="flex-1 flex-col p-2 text-center">
  //         <h1 className="text-base font-semibold">ID de partida</h1>
  //         <h2 className="text-3xl">{lobby?._id}</h2>
  //       </div>
  //       <div className="flex-1 flex-col p-2 text-center">
  //         <h1 className="text-base font-semibold">Max jugadores</h1>
  //         <h2 className="text-3xl">{lobby?.max_number_players}</h2>
  //       </div>
  //       <div className="flex-1 flex-col p-2 text-center">
  //         <h1 className="text-base font-semibold">Apuesta</h1>
  //         <h2 className="text-3xl">{lobby?.min_bet}</h2>
  //       </div>
  //     </div>
  //     <div className="flex-[4]  flex justify-start items-center">
  //       {lobby?.players
  //         ? lobby?.players.map((index) => {
  //             return (
  //               <div key={index.id_user} className="h-full p-1 w-[25%]">
  //                   <img
  //                 className="object-cover h-full w-full"
  //                 src={
  //                   image
  //                     ? URL.createObjectURL(image!)
  //                     : `${import.meta.env.VITE_API_HEROES_URL}/images/cards/${
  //                         index.id_hero
  //                       }`
  //                 }
  //               />
  //               </div>
  //             );
  //           })
  //         : ""}
  //     </div>
  //     <div className="flex-[1] w-full">
  //       <div className="flex h-full justify-center items-center flex-col p-2">
  //         <Button.buttonYellow>Ingresar</Button.buttonYellow>
  //       </div>
  //     </div>
  //   </div>
  // );
}
