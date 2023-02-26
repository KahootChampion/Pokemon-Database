import React from "react";
import TypeComponentCss from "./Type_Component.module.css";
import { capitalizeWord } from "../../../Utils/TextUtils/TextUtils";

type IType_Component = {
  firstType: string;
  secondType?: string | undefined;
};

interface ITypeColorMap {
  [key: string]: string;
}

const typeColorMap: ITypeColorMap = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

const getTypeColorMapping = (
  typeName: string | undefined
): string | undefined => {
  const color: string | undefined = typeName
    ? typeColorMap[typeName]
    : undefined;
  if (color) {
    return color;
  }
  return undefined;
};

export default function Type_Component({
  firstType,
  secondType,
}: IType_Component) {
  return (
    <h5 className={TypeComponentCss.type_styling}>
      <span style={{ color: getTypeColorMapping(firstType) }}>
        {" "}
        {capitalizeWord(firstType)}
      </span>{" "}
      {secondType ? <span>·</span> : null}{" "}
      <span style={{ color: getTypeColorMapping(secondType) }}>
        {secondType ? capitalizeWord(secondType) : null}
      </span>{" "}
    </h5>
  );
}
