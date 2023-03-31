import { useState } from "react";
import Icons, { Icon } from "./Icons";
type Dropdownprops = {
  icon?: Icon;
  onClick?: () => void;
  options: Array<{ text: string; onClick: () => void }>;
  clickeable?:boolean;
};
export default function Dropdown(props: Dropdownprops) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(true);
  }

  function toggleDropdownof() {
    setIsOpen(false);
  }
  return (
    <div className="relative">
      {props.icon ? (
        <props.icon
          onmouseover={toggleDropdown}
          onmouseout={toggleDropdownof}
          clickeable={props.clickeable}
        />
      ) : (
        ""
      )}
      <div
        onMouseOut={toggleDropdownof}
        onMouseOver={toggleDropdown}
        className={`dropdown-menu absolute mt-[-1px] bg-slate-800 shadow-md w-auto rounded z-10 front-layer ${
          isOpen ? "" : "hidden"
        }`}
      >
        {props.options.map((option, index) => (
          <div className="flex">
            <a
              onMouseOut={toggleDropdownof}
              key={option.text}
              href="#"
              className=" px-2 py-2 w-36 text-gray-200 rounded hover:bg-slate-700 hover:underline"
              onClick={option.onClick}
            >
              {option.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
