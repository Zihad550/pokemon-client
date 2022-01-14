import { useState } from "react";
import "./App.css";
import Header from "./Pages/Header/Header";
import MainContent from "./Pages/MainContent/MainContent";

function App() {
  /* states */
  const [pokemons, setPokemons] = useState([]);
  return (
    <div className="App">
      <Header setPokemons={setPokemons} />
      <MainContent pokemons={pokemons} />
    </div>
  );
}

export default App;
