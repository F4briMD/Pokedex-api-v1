import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"
import { useLocation } from "react-router-dom"
import CardPoke from "../components/CardPoke"
import Loader from "../components/Loader"

const SearchPage = () => {

  const location = useLocation()
  console.log(location)

  const {globalPokemons,loading} = useContext(PokeContext)

  const filterPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))


  return (

    <>
    {
      loading ? (
        <Loader/>
      ) : (
      <section className="bg-white ">
      <div className="">
      <p>
        encontrado: <span>{filterPokemons.length}</span> result:
      </p>
      <article className="grid justify-center grid-cols-6 mx-auto gap-y-6 max-md:grid-cols-3 gap-x-4 max-lg:grid-cols-5">
        {filterPokemons.map(pokemon => <CardPoke pokemon={pokemon} key={pokemon.id} />)}
      </article>
      </div>
      </section>
      )
    }
    
    </>
    
    
  )
}

export default SearchPage
