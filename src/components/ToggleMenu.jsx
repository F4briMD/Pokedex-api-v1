import FilterBarra from "../components/FilterBarra";
import Navlink from "./Navlink";
import SearchInput from "./SearchInput";

const ToggleMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <main
      className={` fixed right-0 top-0 h-screen w-64 bg-white  transition-transform transform 
    ${
      isMenuOpen ? "translate-x-0 shadow-2xl shadow-black" : "translate-x-full"
    } overflow-y-auto ease-in-out duration-300 z-50 `}
    >
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="px-3 py-4 text-black focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {/* <div className="flex items-center md:hidden">
          
       
        </div> */}
        
      <section className="flex flex-col px-5 py-2 mx-auto">
        <SearchInput/>
        <div className="my-5 text-lg"> 
          <Navlink/>
        </div>
        
        <span className="py-2 leading-8 ">Filtrar por tipo</span>
        <div className="grid grid-cols-2 gap-3 ">
          <FilterBarra />
        </div>
      </section>
    </main>
  );
};

export default ToggleMenu;
