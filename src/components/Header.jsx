import Ball from "../assets/img/ball.png";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useState,useEffect } from "react";
import ToggleMenu from "./ToggleMenu";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMovil, setIsMovil] = useState(false);

  // const openMenu = ()=>{
  //   setIsMenuOpen(true)
  // }

  useEffect(() => {
    const handleResize = () => {
      setIsMovil(window.innerWidth <= 768);
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <section className="z-40 w-full bg-slate-600 max-md:fixed">
      <header className="flex items-center justify-between px-3 py-4 mx-auto max-w-7xl">
        <Link to="/">
          <div className="flex flex-row items-center cursor-pointer">
            <img src={Ball} width="46px" alt="Pokeball" />
            <span className="pl-1 text-xl font-semibold text-white">
              PokeDex
            </span>
          </div>
        </Link>

        <SearchInput />

        <nav className="flex items-center font-semibold text-white max-md:hidden">
          <Link className="pr-2" to="/">
            Inicio
          </Link>
          <Link className="pr-2" to="">
            Pokedex
          </Link>
        </nav>

        {isMovil && <button
            onClick={()=>(
              setIsMenuOpen(!isMenuOpen)
            )}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>}
      </header>
      <ToggleMenu
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      />
    </section>
  );
};

export default Header;
