import { Link } from "react-router-dom";
import {firstMayus} from '../helper/helper'
const CardPoke = ({ pokemon }) => {
    
    
  
    // URL de los sprites de Black and White
    const blackAndWhiteSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemon.id}.png`;
  
    return (
      <>
        <Link to={`/pokemon/${pokemon.id}`} className="relative flex flex-col items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[5px] rounded-lg hover:bg-slate-200 transition duration-300">
          <div className={`mt-2`}>
            <img src={blackAndWhiteSpriteUrl} alt={`Pokemon ${pokemon.name}`} className=""/>
            
          </div>
          <span className="absolute left-0 right-0 mx-1 text-xs text-gray-400">#{pokemon.id}</span>
          <div className="flex flex-col items-center justify-between mx-auto">
            
            <h2 className="font-medium">{firstMayus(pokemon.name)}</h2>
            <div className="flex flex-row justify-center w-full text-center card-types max-sm:flex-col " id="">
                {pokemon.types.map(type=>(
                    <span key={type.type.name} 
                        className={`${type.type.name} min-w-[60px]  text-sm px-[5px] py-[5px] rounded-full text-white font-semibold`}            
                    >
                {firstMayus(type.type.name)}
              </span>
                ))}
              
            </div>
          </div>
        </Link>
      </>
    );
  };
  
  export default CardPoke;
  