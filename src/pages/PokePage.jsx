import { useContext, useEffect, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { firstMayus } from "../helper/helper";

const PokePage = () => {
  const { getPokeByID } = useContext(PokeContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const [moveslist, setMovesList] = useState([]);
  const [moveName, setMoveName] = useState([]);

  const { id } = useParams();

  const fectPokemon = async (id) => {
    const data = await getPokeByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fectPokemon(id);
  }, []);

  // const blackAndWhiteSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemon.id}.png`;

  const getMovesName = async () => {
    const MoveURL = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${MoveURL}pokemon/${id}`);
    const data = await res.json();
    // setMoveName(data)

    const moves = data.moves.map((move) => {
      return {
        name: move.move.name,
        url: move.move.url,
      };
    });

    setMoveName(moves);
  };

  useEffect(() => {
    getMovesName();
  }, [id]);

  useEffect(() => {
    const fetchMoves = async () => {
      const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(pokemonURL);
      const data = await res.json();

      const moves = data.moves.map(async (move) => {
        const moveRes = await fetch(move.move.url);
        const moveData = await moveRes.json();
        return {
          name: moveData.name,
          id: moveData.id,
          accuracy: moveData.accuracy,
          power: moveData.power,
          pp: moveData.pp,
          type: moveData.type.name,
          generation: moveData.generation.name,
          damage_class: moveData.damage_class.name
        };
      });

      // Espera a que todas las solicitudes de movimiento se completen antes de configurar la lista de movimientos
      const movesWithIds = await Promise.all(moves);

      setMovesList(movesWithIds);
    };

    fetchMoves();
  }, [id]);

  // const getMoveID = async()=>{
  //   const MoveURL = `ttps://pokeapi.co/api/v2/move/`
  //   const res = await fetch(MoveURL)
  //   const data = await res.json()

  //   console.log(data)
  // }

  // useEffect(()=>{
  //   getMoveID()

  // },[])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="flex flex-row mt-5">
          <section className="w-3/4 p-5 mr-2 rounded-lg bg-slate-200">
            <h2 className="text-4xl font-medium">{firstMayus(pokemon.name)}</h2>
            <p className="mt-3 text-lg font-medium ">Habilidades</p>
            <div className="flex flex-row my-2 gap-x-3">
              {pokemon.abilities.map((ability) => (
                <div
                  key={ability.ability.name}
                  className="px-2 py-1 font-medium text-center rounded-lg bg-slate-300"
                >
                  {firstMayus(ability.ability.name)}
                </div>
              ))}
            </div>

            <h3 className="mt-5 mb-3 text-2xl font-medium">Lista de Movimientos </h3>

            <table className="w-full ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 ">
                    number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    power
                  </th>
                  <th scope="col" className="px-6 py-3">
                    accuracy
                  </th>
                  <th scope="col" className="px-6 py-3">
                    pp
                  </th>
                  <th scope="col" className="px-6 py-3">
                  class
                  </th>
                  <th scope="col" className="px-6 py-3">
                    type
                  </th>
                </tr>
              </thead>

              <tbody>
                {moveslist.map((move) => (
                  <tr key={move.name} className="text-center bg-white border-b">
                    <th
                      scope="row"
                      className="font-medium text-gray-900 whitespace-nowrap"
                    >
                      {move.id}
                    </th>
                    <td className="table-move">{firstMayus(move.name)}</td>
                    <td className="table-move">{move.power}</td>
                    <td className="table-move">{move.accuracy}</td>
                    <td className="table-move">{move.pp}</td>
                    <td className="table-move">{firstMayus(move.damage_class)}</td>
                    <td className={`${move.type} font-medium text-white `}>
                      <span >
                        {firstMayus(move.type)}{" "}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="flex flex-col w-1/4 h-full px-5 py-3 text-white rounded-lg bg-neutral-600">
            <div className="">
              <span className="text-xl font-semibold ">#{pokemon.id}</span>
              <div className="">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                  className="w-[250px] h-[250px] mx-auto object-contain"
                />
              </div>

              <div className="">
                <h1 className="py-2 text-lg font-bold text-center">
                  {firstMayus(pokemon.name)}
                </h1>
                <div className="flex flex-row justify-center gap-2 text-center">
                  {pokemon.types.map((type) => (
                    <span
                      key={type.type.name}
                      className={` ${type.type.name} min-w-[60px]  mb-2 text-sm max-md:text-xs px-[5px] py-[5px] rounded-full text-white font-semibold`}
                    >
                      {firstMayus(type.type.name)}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row justify-around gap-2 py-1 bg-gray-500 rounded-full text-cente1">
                  <div className="">
                    <p>Altura</p>
                    <span>{pokemon.height}</span>
                  </div>
                  <div className="">
                    <p>Peso</p>
                    <span>{pokemon.weight}KG</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 ">
              <h1 className="mb-2 text-base font-bold text-center">
                Estadísticas
              </h1>
              <div className="grid grid-cols-2 gap-2 px-2 py-1 text-center bg-gray-400 rounded-xl">
                <div className="">
                  <span>Hp</span>
                  <div className=""></div>
                  <span className="">{pokemon.stats[0].base_stat}</span>
                </div>
                <div className="">
                  <span>Attack</span>
                  <div className=""></div>
                  <span className="">{pokemon.stats[1].base_stat}</span>
                </div>
                <div className="">
                  <span>Defense</span>
                  <div className=""></div>
                  <span className="">{pokemon.stats[2].base_stat}</span>
                </div>
                <div className="">
                  <span>Special Attack</span>
                  <div className=""></div>
                  <span className="">{pokemon.stats[3].base_stat}</span>
                </div>
                <div className="">
                  <span>Special Defense</span>
                  <div className=""></div>
                  <span className="">{pokemon.stats[4].base_stat}</span>
                </div>
                <div className="">
                  <span>Speed</span>
                  <div className=""></div>
                  <span className="">{pokemon.stats[5].base_stat}</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default PokePage;
