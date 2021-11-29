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
  smooth: "easeOutQuad",
  offset: -48,
};
//List of possible parameters of URL
const ROUTES_LIST = [
  "sitios",
  "restaurantes",
  "bares",
  "hospedaje",
  "contacto",
];

const Home = () => {
  const param = useParams(); //Parámetros de la URL

  //Auto scroll on load page and when the url parameters are changed
  useEffect(() => {
    if (ROUTES_LIST.includes(param.placeType)) {
      scroller.scrollTo("menu-card-container", SCROLL_TYPE);
    }
    window.addEventListener("load", () => {
      if (ROUTES_LIST.includes(param.placeType)) {
        scroller.scrollTo("menu-card-container", SCROLL_TYPE);
      }
    });
    return () => {
      window.removeEventListener("load", () => {
        if (ROUTES_LIST.includes(param.placeType)) {
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
          ROUTES_LIST.includes(param.placeType) ? param.placeType : "sitios"
        }
      />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
