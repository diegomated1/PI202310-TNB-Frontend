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

    <div className="w-full h-full flex flex-col">
      <div>
        <h1>Mazo</h1>
        <h2>Heroes</h2>
        <p>Guerrero Armas</p>
        <h2>Armas</h2>
        <p>Bola de pinchos</p>
        <p>Ninguno</p>
        <h2>Armaduras</h2>
        <p>Ninguno</p>
        <h2>Epicas</h2>
        <p>Ninguno</p>
        <h2>Items</h2>
        <p>Ninguno</p>
      </div>
      
    </div>

  )  

}