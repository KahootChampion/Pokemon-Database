import React from "react";
import "./Type_Component.css";

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
      {firstType} {secondType ? <span>*</span> : null}{" "}
      {secondType ? secondType : null}
    </h4>
  );
}
