import React from "react";
import { Link } from "react-router-dom";
import "styles/modules/cardContainer/menuCardContainer.css";
import { BarIcon, HikingIcon, HotelIcon, RestaurantIcon } from "../Icons";

const MenuCardContainer = ({ param }) => {
  return (
    <ul className="menu-card-container title-font">
      <Link
        to="/sitios"
        className={param === "sitios" || !param ? "menu-active-item" : ""}
      >
        <HikingIcon className="icon-card-list" />
        <span>SITIOS</span>
      </Link>
      <Link
        to="/hospedaje"
        className={param === "hospedaje" ? "menu-active-item" : ""}
      >
        <HotelIcon className="icon-card-list" />
        <span>HOSPEDAJE</span>
      </Link>
      <Link
        to="/restaurantes"
        className={param === "restaurantes" ? "menu-active-item" : ""}
      >
        <RestaurantIcon className="icon-card-list" />
        <span>RESTAURANTES</span>
      </Link>
      <Link to="/bares" className={param === "bares" ? "menu-active-item" : ""}>
        <BarIcon className="icon-card-list" />
        <span>BARES</span>
      </Link>
    </ul>
  );
};

export default MenuCardContainer;
