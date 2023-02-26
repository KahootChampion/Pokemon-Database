import React from "react";
import "./Type_Component.css";
import { capitalizeWord } from "../Utils/TextUtils/TextUtils";

type IType_Component = {
  firstType: string;
  secondType?: string;
};

export default function Type_Component({
  firstType,
  secondType,
}: IType_Component) {
  return (
    <h4>
      {capitalizeWord(firstType)} {secondType ? <span>*</span> : null}{" "}
      {secondType ? capitalizeWord(secondType) : null}
    </h4>
  );
}
