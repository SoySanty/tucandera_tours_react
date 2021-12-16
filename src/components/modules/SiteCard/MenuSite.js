import { useRef } from "react";
import "styles/modules/site/menu-site.css";

const MenuSite = ({ show, setShowInfo }) => {
  const TARGET_SCROLL = useRef();
  const scroller = (x) => {
    TARGET_SCROLL.current.scrollTo(
      (x / 10) * TARGET_SCROLL.current.scrollWidth,
      0
    );
  };

  return (
    <ul className="menu-site" ref={TARGET_SCROLL}>
      <li
        className={`menu-site__item ${
          show === "data" && "menu-site__item--active"
        }`}
        onClick={() => {
          setShowInfo("data");
          scroller(0);
        }}
      >
        DATOS
      </li>
      <li
        className={`menu-site__item ${
          show === "details" && "menu-site__item--active"
        }`}
        onClick={() => {
          setShowInfo("details");
          scroller(1);
        }}
      >
        DETALLES
      </li>
      <li
        className={`menu-site__item ${
          show === "reservations" && "menu-site__item--active"
        }`}
        onClick={() => {
          setShowInfo("reservations");
          scroller(2);
        }}
      >
        RESERVAS
      </li>
    </ul>
  );
};

export default MenuSite;
