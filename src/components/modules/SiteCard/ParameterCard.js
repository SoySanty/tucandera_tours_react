import React from "react";

const ParameterCard = ({ icon, title, description }) => {
  return (
    <article className="details-card__container">
      <header className="details-card__title">
        {icon}
        <h4 className="title-font">{title}</h4>
      </header>
      <p>{description}</p>
    </article>
  );
};

export default ParameterCard;
