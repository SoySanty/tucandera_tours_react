import React from "react";
import CardContent from "./CardContent";
import MenuCardContainer from "./MenuCardContainer";

const index = () => {
  return (
    <section className="card-container">
      <MenuCardContainer />
      <CardContent />
    </section>
  );
};

export default index;
