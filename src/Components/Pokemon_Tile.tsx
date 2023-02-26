import React from "react";
import "./Pokemon_Tile.css";
import Type_Component from "./Type_Component";

type IPokemon_Tile = {
  imageSrc: string;
  pokemonNum: string;
  pokemonName: string;
  pokemonFirstType: string;
  pokemonSecondType?: string;
};

export default function Pokemon_Tile(props: IPokemon_Tile) {
  return (
    <div className="tile-wrapper">
      <img src={props.imageSrc} className="pokemon-sprite" />
      <h6 className="pokemon-number">#{props.pokemonNum.padStart(4, "0")}</h6>
      <h4 className="pokemon-name">{props.pokemonName}</h4>
      <Type_Component
        firstType={props.pokemonFirstType}
        secondType={props.pokemonSecondType ?? undefined}
      ></Type_Component>
    </div>
  );
}
