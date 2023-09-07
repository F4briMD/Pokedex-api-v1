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
          <main className='flex flex-col px-5 py-3 mt-5 text-white rounded-lg bg-neutral-600'>

        <div className=''>
						<span className='text-xl font-semibold '>#{pokemon.id}</span>
					<div className=''>
							<img
								src={pokemon.sprites.other.dream_world.front_default}
                
								alt={`Pokemon ${pokemon?.name}`}
                className='w-[250px] h-full object-contain'
							/>
					</div>

						<div className=''>
							<h1 className='py-2 text-lg font-bold text-center'>{firstMayus(pokemon.name)}</h1>
							<div className='flex flex-row justify-around p-2'>
								{pokemon.types.map(type => (
									<span  key={type.type.name} className={` ${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
							<div className='flex flex-row justify-around gap-2 py-1 bg-gray-500 rounded-full text-cente1'>
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

					<div className='mt-2 '>
						<h1 className='mb-2 text-base font-bold text-center'>Estadísticas</h1>
						<div className='grid grid-cols-2 gap-2 px-2 py-1 text-center bg-gray-400 rounded-xl'>
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
