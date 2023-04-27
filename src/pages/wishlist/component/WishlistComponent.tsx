import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import IProduct from "../../../interfaces/IProduct";
import ICard from "../../../interfaces/ICard";
import cardsApi from "../../../services/card.api";
import IHero from "../../../interfaces/IHeroe";
import heroeApi from "../../../services/heroe.api";
import Icons from "../../../components/Icons";
import WishlistApi from "../../../services/Wishlist.api";
import productsApi from "../../../services/products.api";

type ListWishlistProps = {
  id_product: string;
  onClick1?: () => void;
};

export default function TileWishlist({ id_product }: ListWishlistProps) {
  const [image, setImage] = useState<File>();

  const [disabled, setDisabled] = useState<boolean>(false);

  const [product, setProduct] = useState<IProduct>();
  const [card, setCard] = useState<ICard>();
  const [hero, setHero] = useState<IHero>();


  useEffect(() => {
    const handleGetProduct = async ()=>{
      const _product = await productsApi.getProductById(id_product);
      if(_product.type=='card'){
        const _card = await cardsApi.getById(_product.id_product!);
        setCard(_card);
      }else{
        const _hero = await heroeApi.getById(_product.id_product!);
        setHero(_hero);
      }
      setProduct(_product);
      setDisabled(_product?.availability === 0);
    }
    handleGetProduct();
  }, []);

  const handleRemoveFromWishlist = async () => {
    try {
      const response = await WishlistApi.deleteWhislist('id-user', product?.id_product!);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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
          <figure className="h-full w-[20%]">
            <img
              className="object-contain h-[30%] w-28"
              src={
                image
                  ? URL.createObjectURL(image!)
                  : `${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${
                      product?.id_product
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
            <Icons.trash onClick={handleRemoveFromWishlist}></Icons.trash>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-32 flex p-3 border-b border-gray-800 border-opacity-50">
        <div className="w-[50%] h-full flex items-center justify-evenly">
          <figure className="h-full w-auto">
            {card?(
              <img
                className="object-contain h-[95%] w-28"
                src={`${import.meta.env.VITE_API_CARDS_URL}/images/cards/${card._id}`}
              />
            ) : hero ? (
              <img
                className="object-contain h-[95%] w-28"
                src={`${import.meta.env.VITE_API_CARDS_URL}/images/heroes/${hero._id}`}
              />
            ) : ''}
          </figure>
          <h1>{card?.name}</h1>
        </div>
        <div className="w-[50%] h-full flex items-center justify-evenly">
          <h1>{product?.price}</h1>
          {product?.availability === 1 ? <Icons.checkGreen /> : <Icons.x />}
          <div className="w-[30%]">
          <Button.buttonYellow disabled={disabled}>Añadir</Button.buttonYellow>
          </div>
          <div className="">
            <Icons.trash onClick={handleRemoveFromWishlist}></Icons.trash>
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
