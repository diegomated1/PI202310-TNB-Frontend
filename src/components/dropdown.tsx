import { useState } from "react";
import Icons from "./Icons";
type Dropdownprops = {
    icon?: string;
    onClick?: () => void;
    options: Array<{ text: string; onClick: () => void }>;
}
export default function Dropdown({ options, icon }: Dropdownprops) {
    const [isOpen, setIsOpen] = useState(false);
    function toggleDropdown() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="relative">
            {icon && <Icons icon={icon} onClick={toggleDropdown} />}
            <div
                className={`dropdown-menu absolute bg-white shadow-md w-auto rounded mt-1 z-10 front-layer ${isOpen ? "" : "hidden"}`}>
                {options.map((option, index) => (
                    <a key={option.text} href="#" className="block px-2 py-2 w-28 text-gray-800 hover:bg-gray-100" onClick={option.onClick} >
                        {option.text}
                    </a>))}
            </div>
        </div>);
}