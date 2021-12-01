import React, { useEffect } from "react";
import Banner from "components/modules/Banner";
import Menu from "../modules/Menu";
import CardContainer from "components/modules/CardContainer";
import Footer from "components/modules/Footer";
import Contact from "components/modules/Contact";
import { useParams } from "react-router";
import { scroller } from "react-scroll";

//Scroll Parameters
const SCROLL_TYPE = {
  duration: 1000,
  delay: 100,
  smooth: "easeInOutQuint",
  offset: -48,
};
//List of possible parameters of URL
const MENU_ROUTES = ["sitios", "restaurantes", "bares", "hospedaje"];

const Home = () => {
  const param = useParams(); //Parámetros de la URL

  //Auto scroll on load page or when the url parameters are changed
  useEffect(() => {
    if (MENU_ROUTES.includes(param.placeType)) {
      scroller.scrollTo("menu-card-container", SCROLL_TYPE);
    } else if (param.placeType === "contacto") {
      scroller.scrollTo("contacto", SCROLL_TYPE);
    } else {
      scroller.scrollTo("top", SCROLL_TYPE);
    }
    window.addEventListener("load", () => {
      if (MENU_ROUTES.includes(param.placeType)) {
        scroller.scrollTo("menu-card-container", SCROLL_TYPE);
      }
      if (param.placeType === "contacto") {
        scroller.scrollTo("top", SCROLL_TYPE);
      }
    });
    return () => {
      window.removeEventListener("load", () => {
        if (MENU_ROUTES.includes(param.placeType)) {
          scroller.scrollTo("menu-card-container", SCROLL_TYPE);
        }
      });
    };
  }, [param]);
  return (
    <>
      <Menu />
      <Banner />
      <CardContainer
        param={
          MENU_ROUTES.includes(param.placeType) ? param.placeType : "sitios"
        }
      />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
