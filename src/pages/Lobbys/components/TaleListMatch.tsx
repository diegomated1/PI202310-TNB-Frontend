import { useEffect, useState } from "react";
import ILobby from "../../../interfaces/ILobby";
import Button from "../../../components/Button";

type ListLobbyProps = {
  lobby?: ILobby;
};

export default function TileLobby({ lobby }: ListLobbyProps) {
  const [image, setImage] = useState<File>();

  //const onClick1: () => void;

  return (
    <div className="w-full h-32 flex p-3 border-b border-gray-800 border-opacity-50">
      <div className="flex-[3]  flex justify-evenly items-center">
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">ID de partida</h1>
          <h2 className="text-3xl">{lobby?._id}</h2>
        </div>
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">Max jugadores</h1>
          <h2 className="text-3xl">{lobby?.max_number_players}</h2>
        </div>
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">Apuesta</h1>
          <h2 className="text-3xl">{lobby?.min_bet}</h2>
        </div>
      </div>
      <div className="flex-[4]  flex justify-start items-center">
        {lobby?.players
          ? lobby?.players.map((index) => {
              return (
                <div key={index.id_user} className="h-full p-1 w-[25%]">
                    <img
                  className="object-cover h-full w-full"
                  src={
                    image
                      ? URL.createObjectURL(image!)
                      : `${import.meta.env.VITE_API_HEROES_URL}/images/cards/${
                          index.id_hero
                        }`
                  }
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
