import { useRef } from "react";
import { Link } from "react-router-dom";
import "styles/modules/cardContainer/menuCardContainer.css";
import { MENU_CATEGORIES_ENUM } from "scripts/constants";

const MenuCardContainer = ({ param }) => {
  const MENU = useRef();

  const handleScroll = (target) => {
    const X = MENU.current.scrollWidth;
    const SCROLL = X * (target / 4);
    MENU.current.scrollTo(SCROLL - X * 0.2, 0);
  };

  return (
    <ul className="menu-card-container title-font" ref={MENU}>
      {MENU_CATEGORIES_ENUM.map((menuItem, index) => (
        <Link
          key={menuItem.key}
          to={`/${menuItem.key}`}
          className={param === menuItem.key ? "menu-active-item" : ""}
          onClick={() => handleScroll(index + 1)}
        >
          {menuItem.Icon}
          <span>{menuItem.label.toUpperCase()}</span>
        </Link>
      ))}
    </ul>
  );
};

export default MenuCardContainer;
