import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminCards from "./pages/admin_cards/AdminCards"
import Login from "./pages/login/login"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Sample</div>}/>
        <Route path="/admin/cards" element={<AdminCards/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
