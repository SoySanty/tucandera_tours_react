import React from "react";
import {
  faCar,
  faClock,
  faExclamationCircle,
  faHiking,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "styles/modules/site/data-card.css";
import ParameterCard from "./ParameterCard";

const DataCard = ({ data, show }) => {
  console.log(data);

  const ShowTarget = ({ data, show }) => {
    switch (show) {
      case "data":
        return (
          <div className="details-card scroll-bar">
            <ParameterCard
              icon={<FontAwesomeIcon icon={faClock} />}
              title="DURACIÓN"
              description={data.duracionTours}
            />
            <ParameterCard
              icon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
              title="UBICACIÓN"
              description={data.ubicacion}
            />
            <ParameterCard
              icon={<FontAwesomeIcon icon={faCar} />}
              title="DISTANCIA"
              description={
                Number(data.llegadaAuto1) <= 0
                  ? "Menos de una hora"
                  : `Entre ${data.llegadaAuto1} y ${data.llegadaAuto2}horas`
              }
            />
            <ParameterCard
              icon={<FontAwesomeIcon icon={faHiking} />}
              title="CAMINATA"
              description={
                Number(data.caminata1) <= 0
                  ? "Menos de una hora"
                  : `Entre ${data.caminata1} y ${data.caminata2}horas`
              }
            />
            <ParameterCard
              icon={<FontAwesomeIcon icon={faExclamationCircle} />}
              title="GUÍA"
              description={
                data.necesidadGuia === "2"
                  ? "Necesario"
                  : `${
                      data.necesidadGuia === "1" ? "Recomendable" : "Opcional"
                    }`
              }
            />
            <ParameterCard
              icon={<FontAwesomeIcon icon={faHiking} />}
              title="ALTITUD"
              description={`Entre ${data.altitud1} y ${data.altitud2} msnm`}
            />
          </div>
        );
      case "details":
        return (
          <div className="details-card scroll-bar">
            <p>{data.detalles}</p>
          </div>
        );

      default:
        return <p>Cargando...</p>;
    }
  };

  return <ShowTarget data={data} show={show} />;
};

export default DataCard;
