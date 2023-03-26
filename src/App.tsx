import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from "./components/Card"
import AdminCards from "./pages/admin_create_cards/AdminCards"
import AdminHeroes from "./pages/admin_create_heroes/AdminHeroes"
import AdminViewGrid from "./pages/admin_view_item/AdminViewItems"
import CreateGame from "./pages/create_game/CreateGame"
import Game from "./pages/game/Game"
import Lobby from "./pages/lobby/Lobby"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import EditCards from "./pages/edicion_de_cartas/EditCards"
import CardDetails from "./pages/card_details/cardDetails"
import Vitrina from "./pages/vitrina/vitrina"
import Account from "./pages/account/Account"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Sample</div>}/>
        <Route path="/admin/cards" element={<AdminCards/>}/>
        <Route path="/admin/cards/edit" element={<EditCards/>}/>
        <Route path="/admin/heroes" element={<AdminHeroes/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin/grilla" element={<AdminViewGrid/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/game/create" element={<CreateGame/>}/>
        <Route path="/game/lobby/:id_match" element={<Lobby/>}/>
        <Route path="/card/:id_card" element={<CardDetails/>}/>
        <Route path="/vitrina" element={<Vitrina/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
