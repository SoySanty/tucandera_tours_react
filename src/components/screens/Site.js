import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { refreshIndexers, setSite } from "actions";
import { getIndexes, getSite } from "scripts/sites";
import Menu from "components/modules/Menu";
import BannerSite from "components/modules/SiteCard";

const Site = (props) => {
  const param = useParams().site;
  const { places, indexes, refreshIndexers, setSite } = props;
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (indexes && indexes.length > 0) {
      const PLACE_INDEX = indexes.find((e) => e.index === param) || null;
      if (places && places.length > 0) {
        setPlace(places.find((e) => e.detalles.nro === PLACE_INDEX.nro));
      }
    }
  }, [indexes, param, places]);

  //Load sites and indexes
  useEffect(() => {
    if (!indexes) {
      getIndexes({ callback: refreshIndexers });
    }
    if (indexes && indexes.length > 0) {
      const PLACE_INDEX =
        indexes.length > 0 ? indexes.find((e) => e.index === param) : null;
      PLACE_INDEX && getSite({ id: PLACE_INDEX.nro, callback: setSite });
    }
  }, [indexes, param, refreshIndexers, setSite]);

  return (
    <>
      <Menu indexes={indexes} />
      <BannerSite
        data={place}
        profile={`/view/img/sitios/${param}/cover/cover.jpg`}
      />
    </>
  );
};

const mapStateToProps = (store) => ({
  places: store.siteList,
  indexes: store.placeIndexer.sites,
});
const mapDispatchToProps = {
  refreshIndexers,
  setSite,
};
// export default Site;
export default connect(mapStateToProps, mapDispatchToProps)(Site);
