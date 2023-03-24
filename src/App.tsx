import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminCards from "./pages/admin_cards/AdminCards"
import AdminHeroes from "./pages/admin_heroes/AdminHeroes"
import Login from "./pages/login/login"
import CardDetails from "./pages/card_details/cardDetails"
import Vitrina from "./pages/vitrina/vitrina"
import Account from "./pages/account/Account"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Sample</div>}/>
        <Route path="/admin/cards" element={<AdminCards/>}/>
        <Route path="/admin/heroes" element={<AdminHeroes/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/card/:id_card" element={<CardDetails/>}/>
        <Route path="/vitrina" element={<Vitrina/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
