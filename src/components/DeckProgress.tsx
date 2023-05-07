import Pager from "./Pager";

type DeckProps = {
  _id?: string;
  id_hero?: string;
  id_armor?: string;
  id_weapon?: string;
  id_epic?: string;
  id_item?: string
}

export default function DeckProgress ({_id, id_hero, id_armor, id_weapon, id_epic, id_item}: DeckProps){

  return (

    <div className="w-full h-full flex flex-col bg-gray-200">
      <div className="px-3">
        <h1 className="text-4xl font-bold mb-1">Mazo</h1>
        <h2 className="text-2xl font-semibold border-gray-600 border-b-2">Heroes</h2>
        <p className="pl-3">Guerrero Armas</p>
        <h2 className="text-2xl font-semibold border-gray-600 border-b-2">Armas</h2>
        <p className="pl-3">Bola de pinchos</p>
        <p className="pl-3">Espada larga</p>
        <h2 className="text-2xl font-semibold border-gray-600 border-b-2">Armaduras</h2>
        <p className="pl-3">Armadura de adamantita</p>
        <p className="pl-3">Armadura de titanio</p>
        <h2 className="text-2xl font-semibold border-gray-600 border-b-2">Epicas</h2>
        <p className="pl-3">Poción de rabia</p>
        <p className="pl-3">Congelar</p>
        <h2 className="text-2xl font-semibold border-gray-600 border-b-2">Items</h2>
        <p className="pl-3">Flauta de bardo</p>
        <p className="pl-3">Pocima</p>
      </div>
      
    </div>

  )  

}