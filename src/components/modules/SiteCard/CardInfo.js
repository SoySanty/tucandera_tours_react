import React, { useEffect, useState } from "react";
import "styles/modules/site/card-info.css";
import DataCard from "./DataCard";
import GallerySite from "./GallerySite";
import { get, isEmpty } from "lodash";
import LoadingSvg from "img/vectors/LoadingSvg";
import { DetailsIcon } from "../Icons";

const CardInfo = ({ siteInfo }) => {
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (get(siteInfo, "description")) {
      setDetails(get(siteInfo, "description").split("<br>"));
    }
  }, [siteInfo]);

  if (isEmpty(siteInfo)) return <LoadingSvg />;
  return (
    <div className="card-section scroll-bar">
      <div className="card-section--section1 scroll-bar">
        <header className="card-title-container">
          <h1 className="card-title-container__title title-font">
            {get(siteInfo, "name")}
          </h1>
          <p className="card-title-container__subtitle">
            {get(siteInfo, "slogan")}
          </p>
        </header>
        <DataCard data={siteInfo} />
        <GallerySite gallery={get(siteInfo, "images") || []} />
      </div>
      <div className="card-section--section2 scroll-bar">
        <div className="details-card-text">
          <h3 className="details-card-text__title">
            <DetailsIcon className="details-card--icon" />
            &nbsp;DETALLES:
          </h3>
          {details &&
            details.map((e, index) => (
              <p className="details-card-text__paragraph" key={index}>
                {e}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
