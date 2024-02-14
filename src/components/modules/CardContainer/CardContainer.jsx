import React from "react";
import { useParams } from "react-router";
import "../../../styles/modules/cardContainer/card-content.css";
import CardPlace from "./CardPlace";
import { BUSINESS_IMG_URL, SITES_IMG_URL } from "scripts/mainUrl";
import useSites from "./hooks/useSites";
import useBusiness from "./hooks/useBusiness";
import { PATHS_ENUM } from "scripts/constants";

const CardContainer = () => {
  const { placeType } = useParams(); //Parámetros de la URL
  const { siteList } = useSites();
  const { businessList } = useBusiness();

  if (Object.keys(PATHS_ENUM).includes(placeType) && placeType !== "sitios") {
    if (businessList.length <= 0) return <p>Cargando...</p>;
    return (
      <div className="place-container">
        {businessList
          .filter((businessCard) => businessCard.type === placeType)
          .map((businessCard) => (
            <CardPlace
              key={businessCard.id}
              name={businessCard.name}
              slogan={businessCard.slogan}
              img={`${BUSINESS_IMG_URL}${businessCard.id}/images/${businessCard.profile_url}`}
              type={businessCard.category}
              link={businessCard.google_map_url || businessCard.website_url}
            />
          ))}
      </div>
    );
  }
  if (siteList.length <= 0) return <p>Cargando...</p>;
  return (
    <div className="place-container">
      {siteList.map((cardItem) => (
        <CardPlace
          key={cardItem.id}
          name={cardItem.name}
          slogan={cardItem.slogan}
          img={`${SITES_IMG_URL}${cardItem.id}/images/${cardItem.profile_url}-min`}
          type={cardItem.plan}
          link={"/sitios/" + cardItem.key_name}
          linkType="site"
        />
      ))}
    </div>
  );
};

// export default CardContent;
export default CardContainer;
