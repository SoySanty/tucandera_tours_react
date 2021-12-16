import { useEffect } from "react";
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
import LoadingSvg from "img/vectors/LoadingSvg";
import { MailIcon, WhatsappIcon } from "../Icons";
import { useState } from "react";

const DataCard = ({ data, show }) => {
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (data.detalles) {
      setDetails(data.detalles.split("<br>"));
    }
  }, [data]);

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
            {details && details.map((e, index) => <p key={index}>{e}</p>)}
          </div>
        );
      case "reservations":
        return (
          <div className="details-card scroll-bar">
            <div className="details-card__reservation-options">
              <a
                href="https://api.whatsapp.com/send?phone=59173167735&text=Hola,%20ví%20su%20web%20y%20tengo%20una%20consulta:"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
              >
                <WhatsappIcon />
                OPCIÓN 1
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=59176339435&text=Hola,%20ví%20su%20web%20y%20tengo%20una%20consulta:"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
              >
                <WhatsappIcon />
                OPCIÓN 2
              </a>
              <a
                href="mailto:tucandera.tours@hotmail.com"
                className="contact-option"
              >
                <MailIcon />
                EMAIL
              </a>
            </div>
          </div>
        );

      default:
        return <LoadingSvg />;
    }
  };

  return <ShowTarget data={data} show={show} />;
};

export default DataCard;
