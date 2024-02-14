import LoadingSvg from "img/vectors/LoadingSvg";
import React from "react";
import "styles/modules/site/banner-site.css";
import CardInfo from "./CardInfo";
import { isEmpty } from "lodash";
import { useParams } from "react-router";
import useSiteDetails from "./hooks/useSiteDetails";

const BannerSite = () => {
  const { site } = useParams(); //Parámetros de la URL
  const { siteDetails } = useSiteDetails({ keyName: site });

  if (isEmpty(siteDetails)) return <LoadingSvg color="white" />;
  return (
    <section className="banner-site">
      <CardInfo siteInfo={siteDetails} />
    </section>
  );
};

export default BannerSite;
