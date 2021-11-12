import Banner from "components/modules/Banner";
import React from "react";
import Menu from "../modules/Menu";
import CardContainer from "components/modules/CardContainer";

const Home = () => {
  return (
    <>
      <Menu />
      <Banner />
      <CardContainer />
    </>
  );
};

export default Home;
