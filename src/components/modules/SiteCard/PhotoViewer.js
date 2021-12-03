import React, { useState } from "react";
import MAIN_URL from "scripts/mainUrl";
import "styles/modules/site/photo-viewer.css";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSvg from "img/vectors/LoadingSvg";

const PhotoViewer = (props) => {
  const { image, close, show = false, prev, next } = props;
  const [showIcons, setShowIcons] = useState(false);

  const handleClick = (e) => {
    if (e.target.classList.contains("close-modal")) {
      close();
    } else if (e.target.classList.contains("buttons__btn--prev")) {
      prev();
    } else if (e.target.classList.contains("buttons__btn--next")) {
      next();
    } else {
      setShowIcons(!showIcons);
    }
  };

  return (
    <div
      className={`photo-viewer ${show && "photo-viewer--active"}`}
      onClick={handleClick}
    >
      <div
        className={`close-modal ${showIcons && "buttons_btn--hide"}`}
        onClick={close}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="modal-buttons">
        <div
          className={`buttons__btn buttons__btn--prev ${
            showIcons && "buttons_btn--hide"
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div
          className={`buttons__btn buttons__btn--next ${
            showIcons && "buttons_btn--hide"
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className={`img-target`}>
        {image ? (
          <img src={MAIN_URL + image.img} alt={image.nombre} />
        ) : (
          <LoadingSvg />
        )}
      </div>
    </div>
  );
};

export default PhotoViewer;
