import Icons from "./Icons"
import Button from "./Button"
import Dropdown from "./dropdown";
export default function AdminCardsNavBar() {
    const handleClick1 = () => console.log("Click 1");
    const handleClick2 = () => console.log("Click 2");
    const optionsCard = [
        {
            text: "Opción 1",
            onClick: () => {
                console.log("Haz clic en la opción 1");
            }
        },
        {
            text: "Opción 2",
            onClick: () => {
                console.log("Haz clic en la opción 2");
            }
        }
    ]
    return (
        <div className="w-full h-[50px] bg-black grid grid-cols-2 px-8 shadow-xl">
            <div className="col-span-1 flex items-center justify- text-yellow-300 text-xl font-semibold italic">
                <span>NEXUS BATTLE</span>
            </div>
            <div className="col-span-1 flex grid-cols-3 text-white justify-end items-center gap-8">
                <Dropdown options={optionsCard} icon={Icons.shoppingCart}/>
                <NavBarBtn icon="shoppingCart" />
                <NavBarBtn icon="favorites" />
                <Dropdown options={optionsCard} icon={Icons.profile} />
                <Button text="Battle" type="navbar" />
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
                {icon &&  Icons[icon!]({})}
            </span>
        </div>)
}