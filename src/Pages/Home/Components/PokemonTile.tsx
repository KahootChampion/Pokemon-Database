import React from "react";
import PokemonTileCss from "./PokemonTile.module.css";
import Type_Component from "./TypeComponent";

type IPokemon_Tile = {
  imageSrc: string;
  pokemonNum: string;
  pokemonName: string;
  pokemonFirstType: string;
  pokemonSecondType?: string;
};

export default function Pokemon_Tile(props: IPokemon_Tile) {
  return (
    <div className={PokemonTileCss.tile_wrapper}>
      <img src={props.imageSrc} className={PokemonTileCss.pokemon_sprite} />
      <h6 className={PokemonTileCss.pokemon_number}>
        #{props.pokemonNum.padStart(4, "0")}
      </h6>
      <h4 className={PokemonTileCss.pokemon_name}>{props.pokemonName}</h4>
      <Type_Component
        firstType={props.pokemonFirstType}
        secondType={props.pokemonSecondType ?? undefined}
      ></Type_Component>
    </div>
  );
}
