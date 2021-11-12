import React from "react";
import "styles/modules/cardContainer/menuCardContainer.css";

const MenuCardContainer = () => {
  return (
    <ul className="menu-card-container">
      <li>
        <span>Sitios</span>
      </li>
      <li>
        <span>Hospedaje</span>
      </li>
      <li>
        <span>Restaurants</span>
      </li>
      <li>
        <span>Bares</span>
      </li>
    </ul>
  );
};

export default MenuCardContainer;
