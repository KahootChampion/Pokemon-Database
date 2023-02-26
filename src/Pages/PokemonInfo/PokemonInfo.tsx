import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonInfoCss from "./PokemonInfo.module.css";
import StatComponent from "./Components/StatComponent";

type Props = {};

interface IPokemonInfo {
  abilities: Object[];
}

const PokemonInfo = (props: Props) => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) =>
      response.json().then((data: IPokemonInfo) => {})
    );
  }, []);

  return (
    <div className={PokemonInfoCss.overall_container}>
      <div className={PokemonInfoCss.pokemon_tile}>
        <img
          className={PokemonInfoCss.pokemon_image}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        />
      </div>
      <div className={PokemonInfoCss.stats_and_defense_container}>
        <div className={PokemonInfoCss.stats_tile}>
          <h1>Base Stats</h1>
          <StatComponent></StatComponent>
        </div>
        <div className={PokemonInfoCss.defense_tile}>
          <h1>Type defenses</h1>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
