import React from "react";
import { Link } from "react-router-dom";
import "styles/modules/cardContainer/card-place.css";

const CardPlace = (props) => {
  const {
    name,
    slogan,
    className = "",
    img,
    type,
    link = "/",
    linkType = "business",
  } = props;

  return linkType === "site" ? (
    <Link to={link} className="place-link">
      <article className={`place-box ${className}`}>
        <img src={img} alt={name} className="profile-place" loading="lazy" />
        <div className="tag-place">
          <p className="title-font type-place">{type}</p>
        </div>
        <div className="data-box">
          <h3 className="title-font title-place">{name}</h3>
          <p className="description-place">{slogan}</p>
        </div>
      </article>
    </Link>
  ) : (
    <a href={link} target="_blank" rel="noreferrer">
      <article className={`place-box ${className}`}>
        <img src={img} alt={name} className="profile-place" loading="lazy" />
        <div className="tag-place">
          <p className="title-font type-place">{type}</p>
        </div>
        <div className="data-box">
          <h3 className="title-font title-place">{name}</h3>
          <p className="description-place">{slogan}</p>
        </div>
      </article>
    </a>
  );
};

export default CardPlace;
