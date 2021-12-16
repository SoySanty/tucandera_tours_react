import { useRef } from "react";
import { Link } from "react-router-dom";
import "styles/modules/cardContainer/menuCardContainer.css";
import { BarIcon, HikingIcon, HotelIcon, RestaurantIcon } from "../Icons";

const MenuCardContainer = ({ param }) => {
  const MENU = useRef();

  const handleScroll = (target) => {
    const X = MENU.current.scrollWidth;
    const SCROLL = X * (target / 4);
    MENU.current.scrollTo(SCROLL - X * 0.2, 0);
  };

  return (
    <ul className="menu-card-container title-font" ref={MENU}>
      <Link
        to="/sitios"
        className={param === "sitios" || !param ? "menu-active-item" : ""}
        onClick={() => handleScroll(0)}
      >
        <HikingIcon className="icon-card-list" />
        <span>SITIOS</span>
      </Link>
      <Link
        to="/hospedaje"
        className={param === "hospedaje" ? "menu-active-item" : ""}
        onClick={() => handleScroll(1)}
      >
        <HotelIcon className="icon-card-list" />
        <span>HOSPEDAJE</span>
      </Link>
      <Link
        to="/restaurantes"
        className={param === "restaurantes" ? "menu-active-item" : ""}
        onClick={() => handleScroll(2)}
      >
        <RestaurantIcon className="icon-card-list" />
        <span>RESTAURANTES</span>
      </Link>
      <Link
        to="/bares"
        className={param === "bares" ? "menu-active-item" : ""}
        onClick={() => handleScroll(3)}
      >
        <BarIcon className="icon-card-list" />
        <span>BARES</span>
      </Link>
    </ul>
  );
};

export default MenuCardContainer;
