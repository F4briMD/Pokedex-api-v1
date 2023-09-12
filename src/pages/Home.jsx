import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PokemonList from "../components/PokemonList";
import FilterBarra from "../components/FilterBarra";
import Loader from "../components/Loader";
import Gotop from "../components/Gotop";

const Home = () => {
  const { loading, onClickLoadMore, typedSelect } = useContext(PokeContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="w-full px-5 py-3 my-5 max-md:mt-24 bg-[#f7f7f7] rounded-lg max-w-7xl">
          <section className="flex w-full ">
            <div className="w-1/5 h-screen max-md:w-0 max-md:hidden max-lg:w-[120px] mx-auto">
              <h3>Filtros</h3>
              <span className="py-2 leading-8 ">Filtrar por tipo</span>
              <div className="grid grid-cols-2 gap-3 max-lg:grid-cols-1">
                <FilterBarra />
              </div>
            </div>
            <div className="w-4/5 ml-3 max-md:w-full max-md:ml-0">
              <PokemonList />
              {!Object.values(typedSelect).includes(true) && (
                <div className="my-4 text-center">
                  <button
                    className="px-[9px] py-[8px] text-white bg-[#f85b44] hover:bg-[#d85440] transition duration-300 font-semibold rounded-full cursor-pointer"
                    onClick={onClickLoadMore}
                  >
                    Cargar mas
                  </button>
                </div>
              )}
            </div>
          </section>
          <Gotop/>
        </main>
      )}
    </>
  );
};

export default Home;
