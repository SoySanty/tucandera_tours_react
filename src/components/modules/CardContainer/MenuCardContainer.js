import React from "react";
import { Link } from "react-router-dom";
import "styles/modules/cardContainer/menuCardContainer.css";

const MenuCardContainer = ({ param }) => {
  return (
    <ul className="menu-card-container">
      <Link
        to="/sitios"
        className={param === "sitios" || !param ? "menu-active-item" : ""}
      >
        <span>Sitios</span>
      </Link>
      <Link
        to="/hospedaje"
        className={param === "hospedaje" ? "menu-active-item" : ""}
      >
        <span>Hospedaje</span>
      </Link>
      <Link
        to="/restaurantes"
        className={param === "restaurantes" ? "menu-active-item" : ""}
      >
        <span>Restaurants</span>
      </Link>
      <Link to="/bares" className={param === "bares" ? "menu-active-item" : ""}>
        <span>Bares</span>
      </Link>
    </ul>
  );
};

export default MenuCardContainer;
