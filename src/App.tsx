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
import AdminHeroes from "./pages/admin_heroes/AdminHeroes"
import CreateDeck from "./pages/create_deck/CreateDeck"
import Mazo from "./pages/mazo_presentacion/mazo"
import Wishlist from "./pages/wishlist/whislist"
import ListTileMatch from "./pages/Lobbys/Lobbys"
import ShoppingCart from "./pages/shoppingCart/shoppingCart"
import CreateAuction from "./pages/auctions/create/CreateAuction"
import Auctions from "./pages/auctions/auctions/Auctions"
import Auction from "./pages/auctions/auction/Auction"
import Account from "./pages/account/account"
import ModalCart from "./components/modals/ModalCart"
import { useContext, useState } from "react"
import useCart from "./hooks/useCart"
import CartProvider, { cartContext } from "./context/cart.context"

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/" element={<Vitrina/>}/>
          <Route path="/admin/cards" element={<AdminCards/>}/>
          <Route path="/admin/cards/create" element={<AdminCardsCreate/>}/>
          <Route path="/admin/cards/:id_card" element={<AdminCardsEdit/>}/>

          <Route path="/admin/heroes" element={<AdminHeroes/>}/>
          <Route path="/admin/heroes/create" element={<AdminHeroesCreate/>}/>
          <Route path="/admin/heroes/:id_hero" element={<div>Hero edit</div>}/>

          <Route path="/game" element={<Game/>}/>
          <Route path="/game/deck" element={<Mazo/>}/>
          <Route path="/game/create/deck" element={<CreateDeck/>}/>
          <Route path="/game/lobby/create" element={<CreateGame/>}/>
          <Route path="/game/list" element={<ListTileMatch/>}/>
          <Route path="/game/lobby/:id_lobby" element={<Lobby/>}/>
          
          <Route path="/card/:id_product" element={<CardDetails/>}/>
          <Route path="/vitrina" element={<Vitrina/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/shoppingcart" element={<ShoppingCart/>}/>

          <Route path="/auctions"  element={<Auctions/>} />
          <Route path="/auctions/:id_auction"  element={<Auction/>} />
          <Route path="/auctions/create"  element={<CreateAuction/>} />

          <Route path="/account" element={<Account/>} />

        </Routes>
        <ModalCart/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
