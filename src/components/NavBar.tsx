import Icons from "./Icons"
import Button from "./Button"
export default function AdminCardsNavBar() {
    return (
        <div className="w-full h-[50px] bg-black grid grid-cols-3 px-8 shadow-xl">
            <div className="col-span-1 flex items-center justify-center text-yellow-300 text-xl font-semibold italic">
                <span>NEXUS BATTLE</span>
            </div>
            <div className="col-span-1 flex justify-end grid-cols-3 text-white gap-6 text-xs">
                <NavBarBtn text="TIENDA" />
                <NavBarBtn text="SUBASTA" />
                <NavBarBtn text="INVENTARIO" />

            </div>
            <div className="col-span-1 flex grid-cols-3 text-white justify-end items-center gap-5">
                <NavBarBtn icon="shoppingCart" />
                <NavBarBtn icon="favorites" />
                <NavBarBtn icon="profile" />
                <Button text="Battle" type="navbar" />
            </div>
        </div>
    )
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
                {icon && Icons[icon]({})}
            </span>
        </div>
    )
}
