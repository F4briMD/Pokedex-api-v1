import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";

import ball from "../assets/img/ball.png";
import grassIcon from "../assets/img/typeicons/grass.svg";
import bugIcon from "../assets/img/typeicons/bug.svg";
import darkIcon from "../assets/img/typeicons/dark.svg";
import dragonIcon from "../assets/img/typeicons/dragon.svg";
import electricIcon from "../assets/img/typeicons/electric.svg";
import fairyIcon from "../assets/img/typeicons/fairy.svg";
import fightingIcon from "../assets/img/typeicons/fighting.svg";
import fireIcon from "../assets/img/typeicons/fire.svg";
import flyingIcon from "../assets/img/typeicons/flying.svg";
import ghostIcon from "../assets/img/typeicons/ghost.svg";
import groundIcon from "../assets/img/typeicons/ground.svg";
import iceIcon from "../assets/img/typeicons/ice.svg";
import normalIcon from "../assets/img/typeicons/normal.svg";
import poisonIcon from "../assets/img/typeicons/poison.svg";
import psychicIcon from "../assets/img/typeicons/psychic.svg";
import rockIcon from "../assets/img/typeicons/rock.svg";
import steelIcon from "../assets/img/typeicons/steel.svg";
import waterIcon from "../assets/img/typeicons/water.svg";

const FilterBarra = () => {
  const { handleCheckbox, typedSelect } = useContext(PokeContext);

  return (
    <>
      
     
        <div className=" filter-check grass hover:bg-lime-600">
          <input
            type="checkbox"
            id="grass"
            name="grass"
            checked={typedSelect.grass}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck " htmlFor="grass">
            {typedSelect.grass ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={grassIcon} alt="Grass Icon" />
            )}
            <p className="pl-1">Planta</p>
          </label>
        </div>

        <div className=" filter-check fire hover:bg-orange-600">
          <input
            type="checkbox"
            id="fire"
            name="fire"
            checked={typedSelect.fire}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck " htmlFor="fire">
            {typedSelect.fire ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={fireIcon} alt="Fire Icon" />
            )}
            <p className="pl-1">Fuego</p>
          </label>
        </div>
       
        
        <div className="filter-check water hover:bg-sky-600 ">
          <input
            type="checkbox"
            id="water"
            name="water"
            checked={typedSelect.water}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="water">
            {typedSelect.water ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={waterIcon} alt="Water Icon" />
            )}
            <p className="pl-1">Agua</p>
          </label>
        </div>
        <div className="filter-check bug hover:bg-lime-700 ">
          <input
            type="checkbox"
            id="bug"
            name="bug"
            checked={typedSelect.bug}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="bug">
            {typedSelect.bug ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={bugIcon} alt="Bug Icon" />
            )}
            <p className="pl-1">Bicho</p>
          </label>
        </div>
        <div className="filter-check fairy hover:bg-pink-300">
          <input
            type="checkbox"
            id="fairy"
            name="fairy"
            checked={typedSelect.fairy}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="fairy">
            {typedSelect.fairy ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={fairyIcon} alt="Fairy Icon" />
            )}
            <p className="pl-1">Hada</p>
          </label>
        </div>
        <div className="filter-check dragon hover:bg-indigo-800">
          <input
            type="checkbox"
            id="dragon"
            name="dragon"
            checked={typedSelect.dragon}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="dragon">
            {typedSelect.dragon ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={dragonIcon} alt="Dragon Icon" />
            )}
            <p className="pl-1">Dragón</p>
          </label>
        </div>
        <div className="filter-check ghost hover:bg-gray-700">
          <input
            type="checkbox"
            id="ghost"
            name="ghost"
            checked={typedSelect.ghost}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="ghost">
            {typedSelect.ghost ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={ghostIcon} alt="Ghost Icon" />
            )}
            <p className="pl-1">Fantasma</p>
          </label>
        </div>
        <div className="filter-check ground hover:bg-[#9b8027] ">
          <input
            type="checkbox"
            id="ground"
            name="ground"
            checked={typedSelect.ground}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="ground">
            {typedSelect.ground ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={groundIcon} alt="Ground Icon" />
            )}
            <p className="pl-1">Tierra</p>
          </label>
        </div>
        <div className="filter-check normal hover:bg-gray-400 ">
          <input
            type="checkbox"
            id="normal"
            name="normal"
            checked={typedSelect.normal}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="normal">
            {typedSelect.normal ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={normalIcon} alt="Normal Icon" />
            )}
            <p className="pl-1">Normal</p>
          </label>
        </div>
        <div className="filter-check psychic hover:bg-pink-500">
          <input
            type="checkbox"
            id="psychic"
            name="psychic"
            checked={typedSelect.psychic}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="psychic">
            {typedSelect.psychic ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={psychicIcon} alt="Psychic Icon" />
            )}
            <p className="pl-1">Psíquico</p>
          </label>
        </div>
        <div className="filter-check steel hover:bg-[#91adb9]">
          <input
            type="checkbox"
            id="steel"
            name="steel"
            checked={typedSelect.steel}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="steel">
            {typedSelect.steel ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={steelIcon} alt="Steel Icon" />
            )}
            <p className="pl-1">Acero</p>
          </label>
        </div>
        <div className="filter-check dark hover:bg-zinc-600">
          <input
            type="checkbox"
            id="dark"
            name="dark"
            checked={typedSelect.dark}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="dark">
            {typedSelect.dark ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={darkIcon} alt="Dark Icon" />
            )}
            <p className="pl-1">Siniestro</p>
          </label>
        </div>
        <div className="filter-check electric hover:bg-yellow-500">
          <input
            type="checkbox"
            id="electric"
            name="electric"
            checked={typedSelect.electric}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="electric">
            {typedSelect.electric ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={electricIcon} alt="Electric Icon" />
            )}
            <p className="pl-1">Eléctrico</p>
          </label>
        </div>
        <div className="filter-check fighting hover:bg-orange-700">
          <input
            type="checkbox"
            id="fighting"
            name="fighting"
            checked={typedSelect.fighting}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="fighting">
            {typedSelect.fighting ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={fightingIcon} alt="Fighting Icon" />
            )}
            <p className="pl-1">Lucha</p>
          </label>
        </div>
		
		<div className="filter-check flying hover:bg-[#6698a5]">
          <input
            type="checkbox"
            id="flying"
            name="flying"
            checked={typedSelect.flying}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="flying">
            {typedSelect.flying ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={flyingIcon} alt="flying Icon" />
            )}
            <p className="pl-1">Volador</p>
          </label>
        </div>

        <div className="filter-check ice hover:bg-sky-500">
          <input
            type="checkbox"
            id="ice"
            name="ice"
            checked={typedSelect.ice}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="ice">
            {typedSelect.ice ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={iceIcon} alt="Ice Icon" />
            )}
            <p className="pl-1">Hielo</p>
          </label>
        </div>
        <div className="filter-check poison hover:bg-[#6b0c4d]">
          <input
            type="checkbox"
            id="poison"
            name="poison"
            checked={typedSelect.poison}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="poison">
            {typedSelect.poison ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={poisonIcon} alt="Poison Icon" />
            )}
            <p className="pl-1">Veneno</p>
          </label>
        </div>
        <div className="filter-check rock hover:bg-[#97874d]">
          <input
            type="checkbox"
            id="rock"
            name="rock"
            checked={typedSelect.rock}
            onChange={handleCheckbox}
            className="checkbox-hidden"
          />
          <label className="iconcheck" htmlFor="rock">
            {typedSelect.rock ? (
              <img src={ball} alt="Pokebola" />
            ) : (
              <img src={rockIcon} alt="Rock Icon" />
            )}
            <p className="pl-1">Roca</p>
          </label>
        </div>
      
    </>
  );
};

export default FilterBarra;
