import React from "react";
import "styles/modules/banner.css";

import BannerImg from "img/banner1/banner.png";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <img src={BannerImg} alt="Tucanadera Tours" loading="lazzy" />
        <div className="banner__title">
          <h1 className="title-font">¿QUE HACER EN SAMAIPATA?</h1>
          <p>Todo lo que puedes hacer en Samaipata</p>
        </div>
      </section>
      <section className="banner2">
        <h3 className="title-font">¡HOLA! BIENVENIDO A SAMAIPATA... </h3>
        <p>
          En esta plataforma encontrarás <b>información de todos los sitios </b>
          que puedes visitar en Samaipata, además de una recopilación de sólo
          los mejores servicios de <b>hospedaje, restaurantes y bares.</b> Con
          la finalidad de ofrecer una mejor experiencia a nuestros visitantes.
        </p>
      </section>
    </>
  );
};

export default Banner;
