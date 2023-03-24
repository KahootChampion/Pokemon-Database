import React, { ReactNode } from "react";
import LayoutComponentCss from "./LayoutComponent.module.css";

interface ILayoutComponentProps {
  children: ReactNode;
}

const LayoutComponent = ({ children }: ILayoutComponentProps) => {
  return (
    <div className={LayoutComponentCss.layout}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/pokemon/1">Pokemon</a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      {/* Your footer */}
    </div>
  );
};
export default LayoutComponent;
