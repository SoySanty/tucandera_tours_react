import LoadingSvg from "img/vectors/LoadingSvg";
import React from "react";
import MAIN_URL from "scripts/mainUrl";
import "styles/modules/site/banner-site.css";
import CardInfo from "./CardInfo";

const BannerSite = (props) => {
  const { data = null, profile = null } = props;

  return data ? (
    <section className="banner-site">
      <img
        src={MAIN_URL + profile}
        alt={data.detalles.nombre}
        className="banner-site__banner-img"
      />
      <CardInfo data={data.detalles} gallery={data.imagenes} />
    </section>
  ) : (
    <LoadingSvg color="white" />
  );
};

export default BannerSite;
