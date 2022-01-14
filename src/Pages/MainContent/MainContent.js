import React from "react";
import Pokemon from "../Pokemon/Pokemon";

const MainContent = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-5 my-5">
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default MainContent;
