import LoadingSvg from "img/vectors/LoadingSvg";
import React from "react";
import "styles/modules/site/banner-site.css";
import CardInfo from "./CardInfo";
import { get, isEmpty } from "lodash";
import { SITES_IMG_URL } from "scripts/mainUrl";

const BannerSite = ({ siteInfo = null }) => {
  if (isEmpty(siteInfo)) return <LoadingSvg color="white" />;

  console.log(siteInfo);

  return (
    <section className="banner-site">
      <img
        src={`${SITES_IMG_URL}${siteInfo.id}/images/${siteInfo.profile_url}`}
        alt={get(siteInfo, "name") || "Nombre del sitio"}
        className="banner-site__banner-img"
      />
      <CardInfo siteInfo={siteInfo} gallery={siteInfo.imagenes} />
    </section>
  );
};

export default BannerSite;
