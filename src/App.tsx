import { useEffect, useState } from "react";
import "./App.css";
import Pokemon_Tile from "./Components/Pokemon_Tile";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

function App() {
  const POKEMON_LIMIT = 20;

  const [data, setData] = useState<PokemonResponse>({ results: [] });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_LIMIT}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(`From useEffect Hook`);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const findPokemonNumber = (url: string): string => {
    const urlWithoutFinalSlash: string = url.slice(0, -1);
    const number: string = urlWithoutFinalSlash.substring(
      urlWithoutFinalSlash.lastIndexOf("/") + 1
    );
    return number;
  };

  const capitalizeWord = (word: string): string => {
    const wordToReturn = word.charAt(0).toUpperCase() + word.slice(1);
    return wordToReturn;
  };

  return (
    <div className="App">
      {data.results.map((pokemon) => (
        <Pokemon_Tile
          key={pokemon.url}
          imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${findPokemonNumber(
            pokemon.url
          )}.png`}
          pokemonNum={findPokemonNumber(pokemon.url)}
          pokemonName={capitalizeWord(pokemon.name)}
        ></Pokemon_Tile>
      ))}
    </div>
  );
}

export default App;
