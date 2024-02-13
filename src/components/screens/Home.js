import React from "react";
import Banner from "components/modules/Banner";
import Menu from "../modules/Menu";
import CardContainer from "components/modules/CardContainer";
import Footer from "components/modules/Footer";
import Contact from "components/modules/Contact";

const Home = () => {
  return (
    <>
      <Menu />
      <Banner />
      <CardContainer />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
