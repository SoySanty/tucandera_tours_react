import React from "react";
import MAIN_URL from "scripts/mainUrl";
import "styles/modules/site/gallery-site.css";

const GallerySite = ({ gallery }) => {
  return (
    <div className="gallery-site scroll-bar">
      {gallery ? (
        gallery.map((e, index) => (
          <div className="img-site" key={"img" + index + e.id}>
            <img src={MAIN_URL + e.img} alt="" />
          </div>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default GallerySite;
