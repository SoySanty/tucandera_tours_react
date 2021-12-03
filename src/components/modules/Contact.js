import React from "react";
import { Element } from "react-scroll";
import "styles/modules/contact.css";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  WhatsappIcon,
  YouTubeIcon,
} from "./Icons";

const Contact = () => {
  return (
    <Element className="contact" name="contacto">
      <div className="contact-form">
        <h2 className="title-font">
          ENVÍANOS <br />
          UN MENSAJE
        </h2>
        <form
          action="#"
          className="contact-form-content"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" name="name" placeholder="Nombre" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="msg" placeholder="Escribe tu mensaje"></textarea>
          <button type="submit">
            <p>ENVIAR</p>
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h2 className="title-font">
          OTRAS <br />
          FORMAS DE CONTACTO
        </h2>
        <div className="dir-list">
          <a href="www.facebook.com">
            <WhatsappIcon />
            Elva Villegas Nuñez
          </a>
          <a href="www.facebook.com">
            <WhatsappIcon />
            Saúl Arias Cossio
          </a>
          <a href="www.facebook.com">
            <MailIcon />
            tucandera.tours@hotmail.com
          </a>
        </div>
        <div className="contact-social-icons">
          <a href="www.facebook.com">
            <div className="icon-social">
              <FacebookIcon className="icon" />
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCoBSQ8GRhbPugnWwbB6IrUA"
            rel="noreferrer"
            target="_blank"
          >
            <div className="icon-social">
              <YouTubeIcon className="icon" />
            </div>
          </a>
          <a href="www.facebook.com">
            <div className="icon-social">
              <InstagramIcon className="icon" />
            </div>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
