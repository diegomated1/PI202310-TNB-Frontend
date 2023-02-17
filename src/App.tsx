import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminCards from "./pages/admin_cards/AdminCards"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Sample</div>}/>
        <Route path="/admin/cards" element={<AdminCards/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
