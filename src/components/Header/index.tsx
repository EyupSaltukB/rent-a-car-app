import { Link } from "react-router-dom"
import CustomButton from "../CustomButton"

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        <div className="flex gap-4 items-center font-semibold text-slate-300">
        <Link to={'/'}>
        <img width={50} src="/bmw.png" alt="bmw-logo"/>
        </Link>
        <h2>Rent A Car</h2>
        </div>
        <div className="flex gap-2">
        <CustomButton title="Kaydol" designs="min-w-[90px]" />
        <CustomButton title="Üye Girişi" designs="min-w-[90px]" />
        </div>
      </nav>
    </header>
  )
}

export default Header;