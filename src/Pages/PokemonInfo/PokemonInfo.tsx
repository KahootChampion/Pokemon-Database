import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonInfoCss from "./PokemonInfo.module.css";
import StatComponent from "./Components/StatComponent";
import { capitalizeWord } from "../../Utils/TextUtils/TextUtils";

type Props = {};

interface IPokemonInfo {
  stats: { base_stat: number; effort: number; stat: { name: string } }[] | null;
}

const PokemonInfo = (props: Props) => {
  const { id } = useParams<{ id: string }>();

  const [pokemonInfoObject, setPokemonInfoObject] = useState<IPokemonInfo>({
    stats: null,
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response) =>
      response.json().then((data: IPokemonInfo) => {
        console.log(data); // Add this line
        setPokemonInfoObject({ stats: data.stats });
      })
    );
  }, [id]);

  return (
    <div className={PokemonInfoCss.overall_container}>
      <div className={PokemonInfoCss.pokedex_data_container}>
        <img
          className={PokemonInfoCss.pokemon_image}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        />
      </div>
      <div className={PokemonInfoCss.base_stats_container}>
        <h1>Base Stats</h1>
        {pokemonInfoObject.stats?.map((pokemonStat) => {
          return (
            <StatComponent
              statName={capitalizeWord(pokemonStat.stat.name)}
              baseStat={pokemonStat.base_stat}
            ></StatComponent>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonInfo;
