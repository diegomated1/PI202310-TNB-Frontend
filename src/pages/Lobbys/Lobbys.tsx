import AdminCardsNavBar from "../../components/NavBar";
import TileMatch from "./components/TaleListMatch";
import Chat from "../../components/Chat";
import useLobbies from "../../hooks/useLobby";


export default function ListTileMatch() {

  const {lobbies, joinLobby} = useLobbies()

  const handleJoinLobby = (id_lobby:string)=>{
    joinLobby(id_lobby);
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <AdminCardsNavBar />
      <h1 className="text-6xl pt-8 pl-6">Listado de partidas</h1>
      <div className="w-screen h-full flex">
        <div className="flex-[3] p-4">
        {lobbies?.map((index,i) => (
          <TileMatch 
            key={i} 
            lobby={index}
            joinLobby={handleJoinLobby}
          />
        ))}
        </div>
        <div className="flex-[1]">
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
}
