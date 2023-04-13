import Icons from "./Icons"
import Button from "./Button"
import Dropdown from "./dropdown";
import Wishlist from "../pages/wishlist/favorites"; 
import { Link } from "react-router-dom";
export default function AdminCardsNavBar() {
    const handleClick1 = () => console.log("Click 1");
    const handleClick2 = () => console.log("Click 2");
    const optionsCard = [
        {
            text: "Activar tiempo de juego",
            onClick: () => {
                console.log("Haz clic en la opción 1");
            }
        },
        {
            text: "Editar datos personales",
            onClick: () => {
                console.log("Haz clic en la opción 2");
            }
        }
    ]
    return (
        <div className="w-screen h-[70px] bg-black grid grid-cols-2 px-8 shadow-xl">
            <div className="col-span-1 flex items-center justify- text-yellow-300 text-xl font-semibold italic">
                <span>NEXUS BATTLE</span>
            </div>
            <div className="col-span-1 flex grid-cols-3 h-full text-white justify-end items-center gap-8">

                <NavBarBtn icon="shoppingCart" />
                <NavBarBtn icon="favorites" />
                <Dropdown options={optionsCard} icon={Icons.profile} clickeable={true}/>
                <Button.navbar>Battle</Button.navbar>
            </div>
        </div>)
}
type NavBarBtnProps = {
    text?: string;
    icon?: string;
}
const NavBarBtn = ({ text, icon }: NavBarBtnProps) => {
    return (
        <div className="flex justify-center items-center">
            <span>
                {text && text}
                {icon && Icons[icon!]({})}
            </span>
        </div>)
}