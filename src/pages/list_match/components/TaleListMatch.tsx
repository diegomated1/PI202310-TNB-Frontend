import { useEffect, useState } from "react";
import IMatch from "../../../interfaces/IMatch";
import Button from "../../../components/Button";

type ListMatchProps = {
  match?: IMatch;
  onClick1?: () => void;

};

export default function TileMatch({ match, onClick1 }: ListMatchProps) {
  const [image, setImage] = useState<File>();

  return (
    <div className="w-full h-32 flex p-3 border-b border-gray-800 border-opacity-50">
      <div className="flex-[3]  flex justify-evenly items-center">
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">ID de partida</h1>
          <h2 className="text-3xl">{match?._id}</h2>
        </div>
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">Max jugadores</h1>
          <h2 className="text-3xl">{match?.max_number_players}</h2>
        </div>
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">Apuesta</h1>
          <h2 className="text-3xl">{match?.min_bet}</h2>
        </div>
      </div>
      <div className="flex-[4]  flex justify-start items-center">
        {match?.players
          ? match?.players.map((index) => {
              return (
                <div className="h-full p-1 w-[25%]">
                    <img
                  className="object-cover h-full w-full"
                  key={index.id_user}
                  src="../../../../imagen/FIWfOaWXsAEii7c.jpeg"
                  /*src={
                    image
                      ? URL.createObjectURL(image!)
                      : `${import.meta.env.VITE_API_HEROES_URL}/images/cards/${
                          index.id_hero
                        }`
                  }*/
                />
                </div>
              );
            })
          : ""}
      </div>
      <div className="flex-[1] w-full">
        <div className="flex h-full justify-center items-center flex-col p-2">
          <Button.buttonYellow>Ingresar</Button.buttonYellow>
        </div>
      </div>
    </div>
  );
}
