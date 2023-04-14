import { useEffect, useState } from "react";
import ILobby from "../../interfaces/ILobby";
import AdminCardsNavBar from "../../components/NavBar";
import TileMatch from "./components/TaleListMatch";
import matchApi from "../../services/lobby.api"
import useLobby from "../../hooks/useLobby";
import Chat from "../../components/Chat";


export default function ListTileMatch() {

  const [lobby, lobbies, Clobby] = useLobby()

  return (
    <div className="w-screen h-full flex flex-col">
      <AdminCardsNavBar />
      <h1 className="text-6xl pt-8 pl-6">Listado de partidas</h1>
      <div className="w-screen h-full flex">
        <div className="flex-[3] p-4">
        {lobbies?.map((index) => {
              return (
                <TileMatch lobby={index} key={index._id}></TileMatch>
              );
            })}
        </div>
        <div className="flex-[1]">
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
}
