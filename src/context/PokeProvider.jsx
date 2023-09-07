import { useEffect, useState } from "react"
import { PokeContext } from "./PokeContext"
import { useForm } from "../hook/useForm"

const PokeProvider = ({children}) => {

    const [allPokemons,setAllPokemons]=useState([])
    const [offset,setOffset]= useState(0)
    const [globalPokemons,setGlobalPokemons]=useState([])

    //useForm
    const {valueSearch,onInputChange,onResetForm} = useForm({
        valueSearch: '',
    })

    //State simples
    const [loading,setLoading]=useState(true)
    // const [active,setActive] = useState(false)

    //LLamar a la api
    const getAllPoke = async(limit= 50)=>{
        const baseUrl = 'https://pokeapi.co/api/v2/'
            const res = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`)
            const data = await res.json();
            
            const promises = data.results.map(async(pokemon)=>{
                const res = await fetch(pokemon.url)
                const data = await res.json()
                return data
            })
            const results = await Promise.all(promises)

            // setAllPokemons(prevPokemons=>[...prevPokemons,...results])
            setAllPokemons([...allPokemons,...results])
            setLoading(false)
    }

    //global pokemons llamarlos a todos
    const getGlobalPoke = async()=>{
       
            const baseUrl = 'https://pokeapi.co/api/v2/'
                const res = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`)
                const data = await res.json();
                
                const promises = data.results.map(async(pokemon)=>{
                    const res = await fetch(pokemon.url)
                    const data = await res.json()
                    return data
                })
                const results = await Promise.all(promises)
    
                setGlobalPokemons(results)
                setLoading(false)
        }
    //llamar por id
    const getPokeByID = async(id)=>{
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json();
        return data
    }

    useEffect(()=>{
        getAllPoke()
    },[offset])

    useEffect(()=>{
        getGlobalPoke()
    },[])

    //Cargar mas
    const onClickLoadMore =()=>{
        setOffset(offset + 50)
    }
    

  return (
    <PokeContext.Provider value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        loading,
        onClickLoadMore,
        getPokeByID
    }}>

        {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider
