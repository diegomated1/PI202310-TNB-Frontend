import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminCards from "./pages/admin_cards/AdminCards"
import AdminHeroes from "./pages/admin_heroes/AdminHeroes"
import Login from "./pages/login/login"
import CardDetails from "./pages/card_details/cardDetails"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Sample</div>}/>
        <Route path="/admin/cards" element={<AdminCards/>}/>
        <Route path="/admin/heroes" element={<AdminHeroes/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/card/:id_card" element={<CardDetails/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
