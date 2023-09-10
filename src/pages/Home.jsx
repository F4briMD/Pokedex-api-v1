import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import PokemonList from "../components/PokemonList";
import FilterBarra from "../components/FilterBarra";
import Loader from "../components/Loader";

const Home = () => {
  const { loading, onClickLoadMore, typedSelect } = useContext(PokeContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="w-full px-5 py-3 my-5 bg-[#f7f7f7] rounded-lg max-w-7xl">
          <section className="flex w-full ">
            <div className="w-1/5 h-screen ">
              <FilterBarra />
            </div>
            <div className="w-4/5 ml-3 ">
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
        </main>
      )}
    </>
  );
};

export default Home;
