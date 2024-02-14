import LoadingSvg from "img/vectors/LoadingSvg";
import React, { useEffect, useRef, useState } from "react";
import { SITES_IMG_URL } from "scripts/mainUrl";
import "styles/modules/site/gallery-site.css";
import PhotoViewer from "./PhotoViewer";
import { ImageIcon } from "../Icons";

const GallerySite = ({ gallery = [] }) => {
  const container = useRef();
  const [showModal, setShowModal] = useState(false);

  const [nroImage, setNroImage] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  //Validation of change image
  useEffect(() => {
    const MAX_IMG = gallery.length - 1;
    if (nroImage < 0) {
      setNroImage(MAX_IMG);
    } else if (nroImage > MAX_IMG) {
      setNroImage(0);
    }
    setModalImage(gallery[nroImage]);

    //Scroll X at gallery
    const NUM_ELEMENTS = gallery.length;
    const WIDTH_PER_ELEM = container.current.scrollWidth / NUM_ELEMENTS;
    const SCROLL_X = WIDTH_PER_ELEM * nroImage;
    const OFFSET = container.current.clientWidth / 2 - WIDTH_PER_ELEM / 2;
    container.current.scrollTo(SCROLL_X - OFFSET, 0);
  }, [gallery, nroImage]);

  //Event click modal
  const handleModal = (image) => {
    setShowModal(true);
    setNroImage(image);
  };

  const prevImgNum = () => setNroImage(nroImage - 1);
  const nextImgNum = () => setNroImage(nroImage + 1);

  return (
    <>
      <h3 className="gallery-site--title">
        <ImageIcon className="details-card--icon" />
        &nbsp;FOTOS:
      </h3>
      <div className="gallery-site  scroll-bar" ref={container}>
        <div className="gallery-site--container">
          {gallery ? (
            gallery.map((image, index) => (
              <div
                className="img-site"
                key={image.id}
                onClick={() => handleModal(index)}
              >
                <img
                  src={`${SITES_IMG_URL}${image.site_id}/images/${image.id}-min`}
                  alt={image.label}
                />
              </div>
            ))
          ) : (
            <LoadingSvg />
          )}
        </div>
      </div>
      <PhotoViewer
        gallery={gallery}
        image={modalImage}
        show={showModal}
        close={() => setShowModal(false)}
        prev={prevImgNum}
        next={nextImgNum}
      />
    </>
  );
};

export default GallerySite;
