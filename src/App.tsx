import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminCards from "./pages/admin_cards/AdminCards"
import AdminHeroes from "./pages/admin_heroes/AdminHeroes"
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
