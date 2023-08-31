import { Logo } from "../Atoms/Logo";
import { FiMenu } from "react-icons/fi";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-[60px] mx-3">
      <Logo />
      <FiMenu className="text-2xl text-slate-800 hover:bg-slate-200 duration-500 rounded-full p-2 h-10 w-10 cursor-pointer" />
    </nav>
  )
}