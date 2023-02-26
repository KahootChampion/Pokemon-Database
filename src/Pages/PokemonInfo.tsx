import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      />
    </>
  );
};

export default PokemonInfo;
