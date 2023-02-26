import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import "./App.css";
import Pokemon_Tile from "./Components/Pokemon_Tile";
import { findPokemonNumber, capitalizeWord } from "./Utils/TextUtils/TextUtils";

interface Pokemon {
  name: string;
  url: string;
  types: PokemonType[];
}

interface PokemonType {
  type: { name: string };
}

interface PokemonResponse {
  results: Pokemon[];
}

interface PokemonDetails {
  id: number;
  types: PokemonType[];
}

function App() {
  const POKEMON_LIMIT = 1500;
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [data, setData] = useState<PokemonResponse>({ results: [] });
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${POKEMON_LIMIT}`).then(
      (response) =>
        response.json().then((data: PokemonResponse) => {
          const PokemonPromises = data.results.map((singleResponse) =>
            fetch(`${singleResponse.url}`)
              .then((response) => response.json())
              .then((newData: PokemonDetails) => {
                return { id: newData.id, types: newData.types };
              })
          );
          Promise.all(PokemonPromises).then((finalData) => {
            const mergedData = data.results.map((pokemon, index) => ({
              ...pokemon,
              ...finalData[index],
            }));
            console.log(mergedData);
            setData({ results: mergedData });
          });
        })
    );
  }, []);

  const filteredResults =
    searchTerm === ""
      ? data.results
      : data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="overall-container">
      <div className="display-right">
        <input
          className="input-field"
          type={"text"}
          placeholder="Search For a Pokemon Here"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
      </div>

      <div className="pokemon-tile-container">
        {filteredResults.map((pokemon) => (
          <Pokemon_Tile
            key={pokemon.url}
            imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${findPokemonNumber(
              pokemon.url
            )}.png`}
            pokemonNum={findPokemonNumber(pokemon.url)}
            pokemonName={capitalizeWord(pokemon.name)}
            pokemonFirstType={pokemon.types[0].type["name"]}
            pokemonSecondType={
              pokemon.types[1] ? pokemon.types[1].type["name"] : undefined
            }
          ></Pokemon_Tile>
        ))}
      </div>
    </div>
  );
}

export default App;
