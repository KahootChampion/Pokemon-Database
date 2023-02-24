import React from "react";
import "./Type_Component.css";

type IType_Component = {
  firstType?: string;
  secondType?: string;
};

export default function Type_Component({}: IType_Component) {
  return <div>Type_Component</div>;
}
