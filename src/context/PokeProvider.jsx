import { PokeContext } from "./PokeContext"

const PokeProvider = ({children}) => {
  return (
    <PokeContext.Provider value={{
        numero:0
    }}>

        {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider
