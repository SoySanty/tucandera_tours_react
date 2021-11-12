import React, { useState } from "react";
import "styles/modules/menu.css";
import {
  HomeIcon,
  HikingIcon,
  BellIcon,
  AddressIcon,
  ArrowDown,
} from "./Icons";

const Menu = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={`menu ${active && "menu-active"}`}>
      <div className="logo">
        <p>TUCANDERA TOURS</p>
      </div>
      <div className={`burguer-menu`} onClick={(e) => setActive(!active)}>
        <div className="burguer-bar"></div>
        <div className="burguer-bar"></div>
        <div className="burguer-bar"></div>
      </div>
      <nav className="menu-container">
        <ul className="menu-list">
          <li className="menu-item">
            <HomeIcon className="menu-item-icon" />
            <span>INICIO</span>
          </li>
          <li className="menu-item">
            <HikingIcon className="menu-item-icon" />
            <span>ATRACTIVOS</span>
            <ArrowDown className="menu-item-icon-down" />
          </li>
          <li className="menu-item">
            <BellIcon className="menu-item-icon" />
            <span>SERVICIOS</span>
            <ArrowDown className="menu-item-icon-down" />
          </li>
          <li className="menu-item">
            <AddressIcon className="menu-item-icon" />
            <span>CONTACTO</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
