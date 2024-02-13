import LoadingSvg from "img/vectors/LoadingSvg";
import React from "react";
import "styles/modules/site/banner-site.css";
import CardInfo from "./CardInfo";
import { get, isEmpty } from "lodash";
import { SITES_IMG_URL } from "scripts/mainUrl";
import { useParams } from "react-router";
import useSiteDetails from "./hooks/useSiteDetails";

const BannerSite = () => {
  const { site } = useParams(); //Parámetros de la URL
  const { siteDetails } = useSiteDetails({ keyName: site });

  if (isEmpty(siteDetails)) return <LoadingSvg color="white" />;
  return (
    <section className="banner-site">
      <img
        src={`${SITES_IMG_URL}${siteDetails.id}/images/${siteDetails.profile_url}`}
        alt={get(siteDetails, "name") || "Nombre del sitio"}
        className="banner-site__banner-img"
      />
      <CardInfo siteInfo={siteDetails} gallery={siteDetails.imagenes} />
    </section>
  );
};

export default BannerSite;
