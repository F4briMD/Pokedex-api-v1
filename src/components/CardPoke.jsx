import { Link } from "react-router-dom";

const CardPoke = ({ pokemon }) => {
    
    
  
    // URL de los sprites de Black and White
    const blackAndWhiteSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemon.id}.png`;
  
    return (
      <>
        <Link to={`/pokemon/${pokemon.id}`} className="flex flex-col items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="">
            <img src={blackAndWhiteSpriteUrl} alt={`Pokemon ${pokemon.name}`} />
          </div>
          <div className="">
            <span className="">N# {pokemon.id}</span>
            <h2>{pokemon.name}</h2>
            <div className="" id="cardtype">
                {pokemon.types.map(type=>(
                    <span key={type.type.name} 
                        className={type.type.name}            
                    >
                {type.type.name}
              </span>
                ))}
              
            </div>
          </div>
        </Link>
      </>
    );
  };
  
  export default CardPoke;
  