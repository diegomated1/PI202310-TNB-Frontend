import { BrowserRouter, Routes, Route } from "react-router-dom"

import AdminCards from "./pages/admin_cards/AdminCards"
import AdminCardsEdit from "./pages/admin_cards_edit/AdminCardsEdit"
import AdminCardsCreate from "./pages/admin_create_cards/AdminCardsCreate"

import AdminHeroesCreate from "./pages/admin_heroes_create/AdminHeroesCreate"
import CreateGame from "./pages/create_game/CreateGame"
import Game from "./pages/game/Game"
import Lobby from "./pages/lobby/Lobby"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import CardDetails from "./pages/card_details/cardDetails"
import Vitrina from "./pages/vitrina/vitrina"
import Account from "./pages/account/Account"
import AdminHeroes from "./pages/admin_heroes/AdminHeroes"
import CreateDeck from "./pages/create_deck/CreateDeck"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="/" element={<div>Sample</div>}/>
        <Route path="/admin/cards" element={<AdminCards/>}/>
        <Route path="/admin/cards/create" element={<AdminCardsCreate/>}/>
        <Route path="/admin/cards/:id_card" element={<AdminCardsEdit/>}/>

        <Route path="/admin/heroes" element={<AdminHeroes/>}/>
        <Route path="/admin/heroes/create" element={<AdminHeroesCreate/>}/>
        <Route path="/admin/heroes/:id_hero" element={<div>Hero edit</div>}/>

        <Route path="/game" element={<Game/>}/>
        <Route path="/game/create/deck" element={<CreateDeck/>}/>
        <Route path="/game/lobby/create" element={<CreateGame/>}/>
        <Route path="/game/lobby/:id_match" element={<Lobby/>}/>
        
        <Route path="/card/:id_card" element={<CardDetails/>}/>
        <Route path="/vitrina" element={<Vitrina/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
