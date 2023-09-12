import { Link } from "react-router-dom";

const Navlink = () => {
  return (
    <nav className="flex items-center font-semibold text-white max-md:justify-around ">
      <Link className=" navlinks" to="/">
        Inicio
      </Link>
      <Link className=" navlinks" to="">
        Pokedex
      </Link>
    </nav>
  );
};

export default Navlink;
