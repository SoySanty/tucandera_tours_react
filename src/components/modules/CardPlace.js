import React from "react";

const CardPlace = (props) => {
  const { name, slogan, className, img } = props;
  return (
    <div className={`place-box`}>
      <img src="#" alt="" />
      <div className="data-box">
        <h3>Nombre del sitio</h3>
        <p>Slogan del sitio</p>
      </div>
    </div>
  );
};

export default CardPlace;
