import React from "react";
import "styles/modules/cardContainer/card-place.css";

const CardPlace = (props) => {
  const { name, slogan, className = "", img, type, link = null } = props;

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <article className={`place-box ${className}`} onClick={handleClick}>
      <img src={img} alt={name} className="profile-place" loading="lazy" />
      <div className="tag-place">
        <p className="title-font type-place">{type}</p>
      </div>
      <div className="data-box">
        <h3 className="title-font title-place">{name}</h3>
        <p className="description-place">{slogan}</p>
      </div>
    </article>
  );
};

export default CardPlace;
