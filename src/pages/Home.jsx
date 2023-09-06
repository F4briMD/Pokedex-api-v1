import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"
import PokemonList from "../components/PokemonList"

const Home = () => {

    // const {} = useContext(PokeContext)
   

  return (
    <section className="w-full max-w-6xl px-5 py-3 mt-5 bg-white rounded-lg">
      
      <PokemonList />
    </section>
  )
}

export default Home
