import { useEffect, useState } from "react";
import IMatch from "../../interfaces/IMatch";
import AdminCardsNavBar from "../../components/NavBar";
import TileMatch from "./components/TaleListMatch";
import matchApi from "../../services/match.api"


export default function ListTileMatch() {

  const [data, setData] = useState<IMatch[]>([]);

  const handlerGetMatch = async () => {
    var data = await matchApi.getAll();
    setData(data);
}
  useEffect(() => {
    handlerGetMatch();
    console.log(data)
  }, []);

  return (
    <div className="w-screen h-full flex flex-col">
      <AdminCardsNavBar />
      <h1 className="text-6xl pt-8 pl-6">Listado de partidas</h1>
      <div className="w-screen h-full flex">
        <div className="flex-[3] p-4">
        {data
          ? data?.map((index) => {
              return (
                <TileMatch match={index} key={index._id}></TileMatch>
              );
            })
          : ""}
        </div>
        <div className="flex-[1]">a</div>
      </div>
    </div>
  );
}
