import { useParams } from "react-router";
import { Element } from "react-scroll";
import CardContent from "./CardContainer";
import MenuCardContainer from "./MenuCardContainer";
import "styles/modules/cardContainer/index.css";
import useScroll from "./hooks/useScroll";

const CardContainer = () => {
  const urlParam = useParams(); //Parámetros de la URL
  const { elementName } = useScroll({ param: urlParam });

  return (
    <Element name={elementName} className="card-container">
      <MenuCardContainer param={urlParam} />
      <CardContent />
    </Element>
  );
};

export default CardContainer;
