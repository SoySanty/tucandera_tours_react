import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Menu from "components/modules/Menu";
import SiteCard from "components/modules/SiteCard";
import useSites from "components/modules/CardContainer/hooks/useSites";
import useBusiness from "components/modules/CardContainer/hooks/useBusiness";

const Site = () => {
  const [place, setPlace] = useState([]);
  const param = useParams().site;
  const { siteList } = useSites();
  const { businessList } = useBusiness();

  useEffect(() => {
    const placeToSet = [...siteList, ...businessList].find(
      (place) => place.key_name === param
    );
    if (placeToSet) setPlace(placeToSet);
  }, [siteList, businessList, param]);

  return (
    <>
      <Menu />
      <SiteCard
        siteInfo={place}
        profile={`/view/img/sitios/${param}/cover/cover.jpg`}
      />
    </>
  );
};

export default Site;
