import { useState } from "react";
import menu_icon from "../../assets/icons/menu.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary h-[70px] text-white flex justify-between items-center">
      <h1 className="ml-3">DigiWallet</h1>

      <ul className="hidden gap-5 sm:flex mr-3">
        <li className="hover:bg-hover p-2 rounded">Home</li>
        <li className="hover:bg-hover p-2 rounded">Sobre</li>
        <li className="hover:bg-hover p-2 rounded">Contato</li>
        <li className="hover:bg-hover p-2 rounded">Institucional</li>
      </ul>

      <img
        onClick={() => setIsOpen(!isOpen)}
        className="flex sm:hidden mr-3"
        src={menu_icon}
        width={30}
        height={30}
      />

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-2 absolute bg-primary w-full mt-[180px] sidebar px-3`}
      >
        <li className="hover:bg-hover">Home</li>
        <li className="hover:bg-hover">Sobre</li>
        <li className="hover:bg-hover">Contato</li>
        <li className="hover:bg-hover">Institucional</li>
      </ul>
    </nav>
  );
}
