import ILobby from "../../../interfaces/ILobby";
import Button from "../../../components/Button";
import Player from "./Player";

interface ListLobbyProps{
  lobby: ILobby
  joinLobby: (id_lobby:string)=>void
}

export default function TileLobby({ lobby, joinLobby }: ListLobbyProps) {

  return (
    <div className="w-full h-32 flex p-3 border-b border-gray-800 border-opacity-50">
      <div className="flex-[3]  flex justify-evenly items-center">
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">ID de partida</h1>
          <h2 className="text-3xl">{lobby._id}</h2>
        </div>
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">Max jugadores</h1>
          <h2 className="text-3xl">{lobby.max_number_players}</h2>
        </div>
        <div className="flex-1 flex-col p-2 text-center">
          <h1 className="text-base font-semibold">Apuesta</h1>
          <h2 className="text-3xl">{lobby.min_bet}</h2>
        </div>
      </div>
      <div className="flex-[4] flex justify-start items-center">
        {lobby.players.map((player,i) => (
          <Player key={i} id_user={player} />
        ))}
      </div>
      <div className="flex-[1] w-full">
        <div className="flex h-full justify-center items-center flex-col p-2">
          <Button.buttonYellow onClick={()=>{joinLobby(lobby._id!)}}>
            Ingresar
          </Button.buttonYellow>
        </div>
      </div>
    </div>
  );
}


