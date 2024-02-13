import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "styles/modules/menu.css";
import {
  HomeIcon,
  HikingIcon,
  BellIcon,
  AddressIcon,
  ArrowDown,
} from "./Icons";
import { SUBMENU_ITEM_ENUM } from "scripts/constants";

const Menu = () => {
  const sites = useSelector((store) => store.sitesAndBusiness.siteList);
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(0);

  const handleActive = () => setActive(!active);

  const handleDropdown = (target) => {
    switch (target) {
      case 1:
        dropdown === 0 ? setDropdown(target) : setDropdown(0);
        break;

      case 2:
        dropdown === 0 ? setDropdown(target) : setDropdown(0);
        break;

      default:
        setDropdown(0);
        break;
    }
  };

  return (
    <>
      <Element name="top" />
      <header className={`menu title-font ${active && "menu-active"}`}>
        <div className="logo">
          <Link to="/">TUCANDERA TOURS</Link>
        </div>
        <div className={`burguer-menu`} onClick={handleActive}>
          <div className="burguer-bar"></div>
          <div className="burguer-bar"></div>
          <div className="burguer-bar"></div>
        </div>
        <nav className="menu-container">
          <h2 className="menu-title">MENÚ</h2>
          <ul className="menu-list">
            <Link to="/" className="menu-item--anim" onClick={handleActive}>
              <li className="menu-item">
                <HomeIcon className="menu-item-icon" />
                <span>inicio</span>
              </li>
            </Link>
            <li
              className={`menu-item menu-item--anim ${
                dropdown === 1 && "menu-item--active"
              }`}
              onClick={() => handleDropdown(1)}
            >
              <HikingIcon className="menu-item-icon" />
              <span>atractivos</span>
              <ArrowDown className="menu-item-icon-down" />
              <ul className="dropdown">
                {sites &&
                  sites.map((site) => (
                    <Link to={`/sitios/${site.key_name}`} key={site.id}>
                      <li className="menu-item" onClick={handleActive}>
                        <span>{site.name}</span>
                      </li>
                    </Link>
                  ))}
              </ul>
            </li>
            <li
              className={`menu-item menu-item--anim ${
                dropdown === 2 && "menu-item--active"
              }`}
              onClick={() => handleDropdown(2)}
            >
              <BellIcon className="menu-item-icon" />
              <span>servicios</span>
              <ArrowDown className="menu-item-icon-down" />
              <ul className="dropdown">
                {Object.keys(SUBMENU_ITEM_ENUM)
                  .filter((e) => e !== "site")
                  .map((menuKey) => (
                    <Link to={`/${menuKey}`} key={menuKey}>
                      <li className="menu-item" onClick={handleActive}>
                        <span>{SUBMENU_ITEM_ENUM[menuKey]}</span>
                      </li>
                    </Link>
                  ))}
              </ul>
            </li>
            <Link
              to="/contacto"
              className="menu-item--anim"
              onClick={handleActive}
            >
              <li className="menu-item">
                <AddressIcon className="menu-item-icon" />
                <span>contacto</span>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Menu;
