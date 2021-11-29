import React from "react";
import { Element } from "react-scroll";
import CardContent from "./CardContent";
import MenuCardContainer from "./MenuCardContainer";
import "styles/modules/cardContainer/index.css";

const index = ({ param }) => {
  return (
    <Element name="menu-card-container" className="card-container">
      <MenuCardContainer param={param} />
      <CardContent param={param} />
    </Element>
  );
};

export default index;
