import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "styles/modules/menu.css";
import {
  HomeIcon,
  HikingIcon,
  BellIcon,
  AddressIcon,
  ArrowDown,
} from "./Icons";

const Menu = ({ sites }) => {
  const [active, setActive] = useState(false);
  const [dropdown, setDropdown] = useState(0);

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
    <header className={`menu ${active && "menu-active"}`}>
      <div className="logo">
        <Link to="/">TUCANDERA TOURS</Link>
      </div>
      <div className={`burguer-menu`} onClick={() => setActive(!active)}>
        <div className="burguer-bar"></div>
        <div className="burguer-bar"></div>
        <div className="burguer-bar"></div>
      </div>
      <nav className="menu-container">
        <h2 className="menu-title">Menú</h2>
        <ul className="menu-list">
          <li className="menu-item">
            <HomeIcon className="menu-item-icon" />
            <span>inicio</span>
          </li>
          <li
            className={`menu-item ${dropdown === 1 && "menu-item--active"}`}
            onClick={() => handleDropdown(1)}
          >
            <HikingIcon className="menu-item-icon" />
            <span>atractivos</span>
            <ArrowDown className="menu-item-icon-down" />
            <ul className="dropdown">
              {sites &&
                sites.map((e, index) => (
                  <Link to={`/${e.index}`} key={e.nro}>
                    <li
                      className="menu-item"
                      onClick={() => setActive(!active)}
                    >
                      <span>{e.nombre}</span>
                    </li>
                  </Link>
                ))}
            </ul>
          </li>
          <li
            className={`menu-item ${dropdown === 2 && "menu-item--active"}`}
            onClick={() => handleDropdown(2)}
          >
            <BellIcon className="menu-item-icon" />
            <span>servicios</span>
            <ArrowDown className="menu-item-icon-down" />
            <ul className="dropdown">
              <Link to="/hospedaje">
                <li className="menu-item" onClick={() => setActive(!active)}>
                  <span>hospedaje</span>
                </li>
              </Link>
              <Link to="/restaurantes">
                <li className="menu-item" onClick={() => setActive(!active)}>
                  <span>restaurantes</span>
                </li>
              </Link>
              <Link to="/bares">
                <li className="menu-item" onClick={() => setActive(!active)}>
                  <span>bares</span>
                </li>
              </Link>
            </ul>
          </li>
          <li className="menu-item">
            <AddressIcon className="menu-item-icon" />
            <span>contacto</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (store) => ({ sites: store.placeIndexer.sites });

// export default Menu;
export default connect(mapStateToProps, null)(Menu);
