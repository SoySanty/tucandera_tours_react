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
import { MailIcon, MountainIcon, MessageIcon, WhatsappIcon } from "../Icons";
import { get } from "lodash";

const DataCard = ({ data }) => {
  // Build the watsapp and email message
  const contactMessage = `https://api.whatsapp.com/send?phone=PHONE_NUMBER&text=Hola,%20ví%20su%20web%20y%20tengo%20una%20consulta%20sobre%20${get(
    data,
    "name",
    ""
  ).replace(" ", "%20")}:`;
  const emailSubject = `Consulta%20sobre%20${get(data, "name", "").replace(
    " ",
    "%20"
  )}`;

  return (
    <>
      <div className="details-card">
        <ParameterCard
          icon={
            <FontAwesomeIcon className="details-card--icon" icon={faClock} />
          }
          title="DURACIÓN"
          description={get(data, "tours_duration")}
        />
        <ParameterCard
          icon={
            <FontAwesomeIcon
              className="details-card--icon"
              icon={faMapMarkerAlt}
            />
          }
          title="UBICACIÓN"
          description={get(data, "location_site")}
        />
        <ParameterCard
          icon={<FontAwesomeIcon className="details-card--icon" icon={faCar} />}
          title="DISTANCIA"
          description={
            Number(get(data, "car_time_from")) <= 0
              ? "Menos de una hora"
              : `Entre ${get(data, "car_time_from")} y ${get(
                  data,
                  "car_time_to"
                )}horas`
          }
        />
        <ParameterCard
          icon={
            <FontAwesomeIcon className="details-card--icon" icon={faHiking} />
          }
          title="CAMINATA"
          description={
            Number(get(data, "hike_time_to")) <= 0
              ? "Menos de una hora"
              : `Entre ${get(data, "hike_time_from")} y ${get(
                  data,
                  "hike_time_to"
                )}horas`
          }
        />
        <ParameterCard
          icon={
            <FontAwesomeIcon
              className="details-card--icon"
              icon={faExclamationCircle}
            />
          }
          title="GUÍA"
          description={get(data, "with_guide") ? "Necesario" : "Opcional"}
        />
        <ParameterCard
          icon={<MountainIcon className="details-card--icon" />}
          title="ALTITUD"
          description={`${get(data, "altitude")} msnm`}
        />
      </div>
      <div className="details-card-reservation">
        <h3 className="details-card-text__title">
          <MessageIcon className="details-card--icon" />
          &nbsp;RESERVAS:
        </h3>
        <div className="details-card__reservation-options">
          <a
            href={contactMessage.replace("PHONE_NUMBER", "59173167735")}
            target="_blank"
            rel="noreferrer"
            className="contact-option contact-option--wp"
          >
            <WhatsappIcon className="contact-option--icon" />
            OPCIÓN 1
          </a>
          <a
            href={contactMessage.replace("PHONE_NUMBER", "59176339435")}
            target="_blank"
            rel="noreferrer"
            className="contact-option contact-option--wp"
          >
            <WhatsappIcon className="contact-option--icon" />
            OPCIÓN 2
          </a>
          <a
            href={`mailto:tucandera.tours@hotmail.com?subject=${emailSubject};body=${contactMessage}`}
            className="contact-option contact-option--gm"
          >
            <MailIcon className="contact-option--icon" />
            EMAIL
          </a>
        </div>
      </div>
    </>
  );
};

export default DataCard;
