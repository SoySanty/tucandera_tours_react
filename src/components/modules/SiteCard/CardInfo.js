import React, { useState } from "react";
import "styles/modules/site/card-info.css";
import DataCard from "./DataCard";
import GallerySite from "./GallerySite";
import MenuSite from "./MenuSite";
import { get } from "lodash";

const CardInfo = ({ siteInfo, gallery }) => {
  const [showInfo, setShowInfo] = useState("data");

  return (
    <div className="card-section">
      <div className="card-section--section1">
        <header className="card-title-container">
          <h1 className="card-title-container__title title-font">
            {get(siteInfo, "name")}
          </h1>
          <p className="card-title-container__subtitle">
            {get(siteInfo, "slogan")}
          </p>
        </header>
      </div>
      <div className="card-section--section2">
        <MenuSite setShowInfo={setShowInfo} show={showInfo} />
        <DataCard data={siteInfo} show={showInfo} />
      </div>
      <GallerySite gallery={gallery} />
    </div>
  );
};

export default CardInfo;
