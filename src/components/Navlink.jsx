import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";

const Navlink = () => {

  const {setFilterState} = useContext(PokeContext)

  return (
    <nav className="flex items-center font-semibold text-white max-md:justify-around ">
      <Link className=" navlinks" to="/"
      onClick={()=>(
        setFilterState(true)
      )}
      >  
        Inicio
      </Link>
      <Link className=" navlinks" to="">
        Pokedex
      </Link>
    </nav>
  );
};

export default Navlink;
