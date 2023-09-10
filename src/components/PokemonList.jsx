import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import CardPoke from "./CardPoke";
import Loader from "./Loader";

const PokemonList = () => {
  const { allPokemons,loading, filteredPokes,typedSelect } = useContext(PokeContext);

  return (
    <>
    {loading ? (
      <Loader/>
    ) : (
    <section className="grid justify-center grid-cols-6 mx-auto gap-y-6 max-md:grid-cols-3 max-sm:grid-cols-2 gap-x-4 max-lg:grid-cols-4 ">
      {filteredPokes.length ? (
        <>
          {filteredPokes.map((pokemon) => (
            <CardPoke pokemon={pokemon} key={pokemon.id} />
          ))}
        </>
      ) : (
        Object.keys(typedSelect).some(type => typedSelect[type]) ? (
          <p className="">No hay Resultados</p>
        ) : (
          <>
          {allPokemons.map((pokemon) => (
            <CardPoke pokemon={pokemon} key={pokemon.id} />
          ))}
        </>
        )    
      )}
    </section>
    )}

    </>
  );
};

export default PokemonList;
