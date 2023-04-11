import { useEffect, useState } from "react";
import IMatch from "../../interfaces/IMatch";
import AdminCardsNavBar from "../../components/NavBar";
import TileMatch from "./components/TaleListMatch";

export default function ListTileMatch() {
  const matchList: IMatch[] = [
    {
      _id: "12345",
      id_owner: "abcde",
      max_number_players: 4,
      ias: 1,
      players: [
        { id_user: "player1", bet: 10, id_hero: "ilfr4bh8k" },
        { id_user: "player2", bet: 15, id_hero: "ilfr4bh8k" },
        { id_user: "player3", bet: 5, id_hero: "ilfr4bh8k" },
        { id_user: "player3", bet: 5, id_hero: "ilfr4bh8k" },
      ],
      min_bet: 5,
    },

    {
      _id: "12345",
      id_owner: "abcde",
      max_number_players: 4,
      ias: 1,
      players: [
        { id_user: "player1", bet: 10, id_hero: "ilfr4bh8k" },
        { id_user: "player2", bet: 15, id_hero: "ilfr4bh8k" },
        { id_user: "player3", bet: 5, id_hero: "ilfr4bh8k" },
      ],
      min_bet: 5,
    },

    {
      _id: "12345",
      id_owner: "abcde",
      max_number_players: 4,
      ias: 1,
      players: [
        { id_user: "player1", bet: 10, id_hero: "ilfr4bh8k" },
        { id_user: "player2", bet: 15, id_hero: "ilfr4bh8k" },
      ],
      min_bet: 5,
    },

    {
      _id: "12345",
      id_owner: "abcde",
      max_number_players: 4,
      ias: 1,
      players: [{ id_user: "player1", bet: 10, id_hero: "ilfr4bh8k" }],
      min_bet: 5,
    },

    {
      _id: "12345",
      id_owner: "abcde",
      max_number_players: 4,
      ias: 1,
      players: [
        { id_user: "player1", bet: 10, id_hero: "ilfr4bh8k" },
        { id_user: "player2", bet: 15, id_hero: "ilfr4bh8k" },
        { id_user: "player3", bet: 5, id_hero: "ilfr4bh8k" },
        { id_user: "player3", bet: 5, id_hero: "ilfr4bh8k" },
      ],
      min_bet: 5,
    },
  ];

  return (
    <div className="w-screen h-full flex flex-col">
      <AdminCardsNavBar />
      <h1 className="text-6xl pt-8 pl-6">Listado de partidas</h1>
      <div className="w-screen h-full flex">
        <div className="flex-[3] p-4">
        {matchList
          ? matchList?.map((index) => {
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
