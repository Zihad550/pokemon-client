import React from "react";

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  const {
    name,
    category,
    abilities,
    height,
    thumbnailimage,
    type,
    weaknesses,
    weight,
  } = pokemon;
  return (
    <div className="p-3 border-2 m-1 rounded-lg">
      <img className="bg-slate-400" src={thumbnailimage} alt="" />
      <h2 className="text-lg text-center my-1">Name: {name}</h2>

      <div className="flex justify-between mb-1">
        <p>Abilities: {abilities}</p>
        <p>Category: {category}</p>
      </div>
      <div className="flex justify-between">
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </div>
      <div className="flex my-1">
        Types:
        {type.map((t) => (
          <p className="text-lime-600 ml-1">{t},</p>
        ))}
      </div>
      <div className="flex ">
        Weaknesses:
        {weaknesses.map((weakness) => (
          <p className="text-red-600 ml-1">{weakness},</p>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
