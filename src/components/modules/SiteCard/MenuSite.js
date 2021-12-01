import React from "react";
import "styles/modules/site/menu-site.css";

const MenuSite = ({ show, setShowInfo }) => {
  return (
    <ul className="menu-site">
      <li
        className={`menu-site__item ${
          show === "data" && "menu-site__item--active"
        }`}
        onClick={() => setShowInfo("data")}
      >
        DATOS
      </li>
      <li
        className={`menu-site__item ${
          show === "details" && "menu-site__item--active"
        }`}
        onClick={() => setShowInfo("details")}
      >
        DETALLES
      </li>
    </ul>
  );
};

export default MenuSite;
