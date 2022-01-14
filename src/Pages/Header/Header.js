import React, { useEffect, useState } from "react";
import Select from "react-select";

const Header = ({ setPokemons }) => {
  /* states */
  const [option, setOption] = useState("");

  /* all option */
  const options = [
    { value: 1, label: "Pikachu" },
    { value: 2, label: "Charizard" },
    { value: 3, label: "Eevee" },
    { value: 4, label: "Snorlax" },
    { value: 5, label: "Lucario" },
    { value: 6, label: "Garchomp" },
  ];

  useEffect(() => {
    option &&
      fetch(`https://pokedex2.p.rapidapi.com/pokedex/uk/${option}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "pokedex2.p.rapidapi.com",
          "x-rapidapi-key":
            "2b671826bdmshecaaab6a75a61b2p1b7118jsn4d72b7d5fc1a",
        },
      })
        .then((res) => res.json())
        .then((data) => setPokemons(data));
  }, [option]);
  return (
    <div className="bg-orange-200 flex justify-center py-5">
      <Select
        className=" pl-2 w-1/2 "
        defaultValue={options[0]}
        name="color"
        options={options}
        onChange={(e) => setOption(e.label)}
      />

      <button className="border-2 bg-white px-5  border-l-0 hover:bg-red-300">
        Search
      </button>
    </div>
  );
};

export default Header;
