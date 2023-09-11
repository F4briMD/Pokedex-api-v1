import Ball from "../assets/img/ball.png";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useState,useEffect } from "react";
import ToggleMenu from "./ToggleMenu";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMovil, setIsMovil] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMovil(window.innerWidth <= 768);
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <section className="w-full bg-slate-600">
      <header className="flex items-center justify-between px-3 py-4 mx-auto max-w-7xl ">
        <Link to="/">
          <div className="flex flex-row items-center cursor-pointer">
            <img src={Ball} width="46px" alt="Pokeball" />
            <span className="pl-1 text-xl font-semibold text-white">
              PokeDex
            </span>
          </div>
        </Link>

        <SearchInput />

        <nav className="flex items-center font-semibold text-white max-md:hidden ">
          <Link className="pr-2" to="/">
            Inicio
          </Link>
          <Link className="pr-2" to="">
            Pokedex
          </Link>
        </nav>

        {isMovil && <ToggleMenu isMenuOpen={isMenuOpen} />}
      </header>
    </section>
  );
};

export default Header;
