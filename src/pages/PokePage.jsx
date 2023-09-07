import  { useContext,useEffect,useState } from 'react'
import { PokeContext } from '../context/PokeContext'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { firstMayus } from '../helper/helper'


const PokePage = () => {

  const {getPokeByID} = useContext(PokeContext)

  const [loading,setLoading]= useState(true)
  const [pokemon,setPokemon]= useState({})

  const {id} = useParams()

  const fectPokemon = async(id) =>{
    const data = await getPokeByID(id)
    setPokemon(data)
    setLoading(false) 
  }

  useEffect(()=>{
    fectPokemon(id)
  },[])

  // const blackAndWhiteSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemon.id}.png`;

  return (
    <main>
      {
        loading ? (
          <Loader/>
        ) : (
          <main className='text-white'>

            <div className=''>
						<span className=''>#{pokemon.id}</span>
						<div className=''>
							<img
								src={pokemon.sprites.other.dream_world.front_default}
                // width={}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</div>

						<div className=''>
							<h1>{firstMayus(pokemon.name)}</h1>
							<div className=''>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
							<div className=''>
								<div className=''>
									<p>Altura</p>
									<span>{pokemon.height}</span>
								</div>
								<div className=''>
									<p>Peso</p>
									<span>{pokemon.weight}KG</span>
								</div>
							</div>
						</div>
					</div>

					<div className=''>
						<h1>Estadísticas</h1>
						<div className=''>
							<div className=''>
								<span>Hp</span>
								<div className=''></div>
								<span className=''>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className=''>
								<span>Attack</span>
								<div className=''></div>
								<span className=''>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className=''>
								<span>Defense</span>
								<div className=''></div>
								<span className=''>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className=''>
								<span>Special Attack</span>
								<div className=''></div>
								<span className=''>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className=''>
								<span>Special Defense</span>
								<div className=''></div>
								<span className=''>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className=''>
								<span>Speed</span>
								<div className=''></div>
								<span className=''>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
						</div>
					</div>
          </main>
        )
      }
    </main>
  )
}

export default PokePage
