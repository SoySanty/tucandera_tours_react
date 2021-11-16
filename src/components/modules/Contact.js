import React from "react";
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
    <div className="contact">
      <div className="contact-form">
        <h2>
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
        <h2>
          OTRAS DE <br />
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
          <a href="www.facebook.com">
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
    </div>
  );
};

export default Contact;
