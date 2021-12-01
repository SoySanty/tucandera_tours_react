import React, { useState } from "react";
import "styles/modules/site/card-info.css";
import DataCard from "./DataCard";
import GallerySite from "./GallerySite";
import MenuSite from "./MenuSite";

const CardInfo = ({ data, gallery }) => {
  const [showInfo, setShowInfo] = useState("data");

  return (
    <div className="card-section">
      <div className="card-section--section1">
        <header className="card-title-container">
          <h1 className="card-title-container__title title-font">
            {data.nombre}
          </h1>
          <p className="card-title-container__subtitle">{data.introduction}</p>
        </header>
      </div>
      <div className="card-section--section2">
        <MenuSite setShowInfo={setShowInfo} show={showInfo} />
        <DataCard data={data} show={showInfo} />
      </div>
      <GallerySite gallery={gallery} />
    </div>
  );
};

export default CardInfo;
