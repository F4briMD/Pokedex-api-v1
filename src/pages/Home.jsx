// import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"
import PokemonList from "../components/PokemonList"
import FilterBarra from "../components/FilterBarra"
// import Loader from "../components/Loader"

const Home = () => {

    // const {} = useContext(PokeContext)
   

  return (
    <>
    {/* {
      loading ? (
        <Loader/>
        ) : ( */}
    <section className="flex w-full px-5 py-3 mt-5 bg-white rounded-lg max-w-7xl">

     <div className="w-1/5 h-screen ">
     <FilterBarra/>
     </div> 
     <div className="w-4/5 ml-3">
      <PokemonList />
     </div>
     
      
    </section>
        {/* )
    } */}
     
    </>
    
  )
}

export default Home
