import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminCards from "./pages/admin_create_cards/AdminCards"
import AdminHeroes from "./pages/admin_create_heroes/AdminHeroes"
import AdminViewGrid from "./pages/admin_view_item/AdminViewItems"
import CreateGame from "./pages/create_game/CreateGame"
import Lobby from "./pages/lobby/Lobby"
import Login from "./pages/login/login"
import Register from "./pages/register/register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Sample</div>}/>
        <Route path="/admin/cards" element={<AdminCards/>}/>
        <Route path="/admin/heroes" element={<AdminHeroes/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin/grilla" element={<AdminViewGrid/>}/>
        <Route path="/game/create" element={<CreateGame/>}/>
        <Route path="/game/lobby/:id_match" element={<Lobby/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
