import Icons from "./Icons"
import Button from "./Button"
import Dropdown from "./dropdown";
import Wishlist from "../pages/wishlist/whislist"; 
import { Link, useNavigate } from "react-router-dom";
import Buttons from "./Button";
import { useContext } from "react";
import { cartContext } from "../context/cart.context";

export default function AdminCardsNavBar() {
    
    const navigate = useNavigate();
    const cart = useContext(cartContext);

    const optionsCard = [
        {
            text: "Login",
            onClick: () => {navigate('/login')}
        },
        {
            text: "Activar tiempo de juego",
            onClick: () => {
                console.log("Haz clic en la opción 1");
            }
        },
        {
            text: "Editar datos personales",
            onClick: () => {navigate('/account')}
        }
    ]


    return (
        <div className="w-screen h-[70px] bg-black grid grid-cols-2 px-8 shadow-xl">
            <div onClick={()=>{navigate('/vitrina')}} className="col-span-1 flex items-center justify- text-yellow-300 text-xl font-semibold italic">
                <span>NEXUS BATTLE</span>
            </div>
            <div className="col-span-1 flex grid-cols-3 h-full text-white justify-end items-center gap-8">
                <NavBarBtn icon="shoppingCart" onClick={()=>{cart?.setIsOpen((b)=>!b)}} />
                <NavBarBtn icon="favorites" onClick={()=>{navigate('/wishlist')}}/>
                <Dropdown options={optionsCard} icon={Icons.profile} clickeable={true}/>
                <Button.navbar onClick={()=>{navigate('/partida')}}>Battle</Button.navbar>
            </div>
        </div>)
}
type NavBarBtnProps = {
    text?: string;
    icon?: string;
    onClick?: ()=>void
}
const NavBarBtn = ({ text, icon, onClick }: NavBarBtnProps) => {
    return (
        <div className="flex justify-center items-center">
            <Buttons.navbar onClick={onClick}>
                <span>
                    {text && text}
                    {icon && Icons[icon!]({})}
                </span>
            </Buttons.navbar>
        </div>)
}