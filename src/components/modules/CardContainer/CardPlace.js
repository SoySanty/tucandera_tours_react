import React from "react";
import "styles/modules/cardContainer/card-place.css";

const CardPlace = (props) => {
  const { name, slogan, className = "", img } = props;
  return (
    <article className={`place-box ${className}`}>
      <img src={img} alt={name} className="profile-place" loading="lazy" />
      <div className="data-box">
        <h3>{name}</h3>
        <p>{slogan}</p>
      </div>
    </article>
  );
};

export default CardPlace;
