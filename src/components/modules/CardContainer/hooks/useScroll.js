import { useEffect } from "react";
import { scroller } from "react-scroll";
import { MENU_CATEGORIES_ENUM } from "scripts/constants";

const elementName = "menu-card-container";

//Scroll Parameters
const SCROLL_TYPE = {
  duration: 1000,
  delay: 100,
  smooth: "easeInOutQuint",
  offset: -48,
};
//List of possible parameters of URL
const MENU_ROUTES = MENU_CATEGORIES_ENUM.map((item) => item.key);

const useScroll = ({ param }) => {
  //Auto scroll on load page or when the url parameters are changed
  useEffect(() => {
    if (MENU_ROUTES.includes(param.placeType)) {
      scroller.scrollTo(elementName, SCROLL_TYPE);
    } else if (param.placeType === "contacto") {
      scroller.scrollTo("contacto", SCROLL_TYPE);
    } else {
      scroller.scrollTo("top", SCROLL_TYPE);
    }
    window.addEventListener("load", () => {
      if (MENU_ROUTES.includes(param.placeType)) {
        scroller.scrollTo(elementName, SCROLL_TYPE);
      }
      if (param.placeType === "contacto") {
        scroller.scrollTo("top", SCROLL_TYPE);
      }
    });
    return () => {
      window.removeEventListener("load", () => {
        if (MENU_ROUTES.includes(param.placeType)) {
          scroller.scrollTo(elementName, SCROLL_TYPE);
        }
      });
    };
  }, [param]);

  return {
    elementName,
  };
};

export default useScroll;
