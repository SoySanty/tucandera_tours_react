import React, { useEffect } from "react";
import { connect } from "react-redux";
import { refreshIndexers } from "actions";
import { getIndexes } from "scripts/sites";
import "../../../styles/modules/cardContainer/card-content.css";
import CardPlace from "./CardPlace";
import MAIN_URL from "scripts/mainUrl";

const CardContent = (props) => {
  const { sites = null, business = null, refreshIndexers, param } = props;

  useEffect(() => {
    getIndexes({ callback: refreshIndexers });
  }, [refreshIndexers]);

  const ShowCards = ({ target }) => {
    switch (target) {
      case "sitios": {
        return sites ? (
          sites.map((e, index) => (
            <CardPlace
              key={param + index}
              name={e.nombre}
              slogan={e.introduccion}
              img={`${MAIN_URL}view/img/sitios/${e.index}/profile/profile.jpg`}
              type={e.tiposervicio}
              link={"/sitios/" + e.index}
              linkType="site"
            />
          ))
        ) : (
          <p>Cargando...</p>
        );
      }

      case "hospedaje": {
        const PLACES = business
          ? business.filter((e) => e.area === "hospedaje")
          : null;
        return PLACES ? (
          PLACES.map((e, index) => (
            <CardPlace
              key={param + index}
              name={e.nombre}
              slogan={e.introduccion}
              img={`${MAIN_URL}view/img/hospedaje/${e.index}/profile/profile.jpg`}
              type={e.categoria}
              link={e.link}
            />
          ))
        ) : (
          <p>Cargando...</p>
        );
      }

      case "restaurantes": {
        const PLACES = business
          ? business.filter((e) => e.area === "restaurante")
          : null;
        return PLACES ? (
          PLACES.map((e, index) => (
            <CardPlace
              key={param + index}
              name={e.nombre}
              slogan={e.introduccion}
              img={`${MAIN_URL}view/img/restaurante/${e.index}/profile/profile.jpg`}
              type={e.categoria}
              link={e.link}
            />
          ))
        ) : (
          <p>Cargando...</p>
        );
      }

      case "bares": {
        const PLACES = business
          ? business.filter((e) => e.area === "bar")
          : null;
        return PLACES ? (
          PLACES.map((e, index) => (
            <CardPlace
              key={param + index}
              name={e.nombre}
              slogan={e.introduccion}
              img={`${MAIN_URL}view/img/bar/${e.index}/profile/profile.jpg`}
              type={e.categoria}
              link={e.link}
            />
          ))
        ) : (
          <p>Cargando...</p>
        );
      }

      default:
        return <p>Cargando...</p>;
    }
  };

  return (
    <div className="place-container">
      <ShowCards target={param} />
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    sites: store.placeIndexer.sites,
    business: store.placeIndexer.business,
  };
};

const mapDispatchToProps = {
  refreshIndexers,
};

// export default CardContent;
export default connect(mapStateToProps, mapDispatchToProps)(CardContent);
