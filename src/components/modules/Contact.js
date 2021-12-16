import { useState } from "react";
import { Element } from "react-scroll";
import Email from "scripts/Email";
import "styles/modules/contact.css";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  WhatsappIcon,
  YouTubeIcon,
} from "./Icons";

const Contact = () => {
  const [mail, setEmail] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setEmail({
      ...mail,
      name: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setEmail({
      ...mail,
      email: e.target.value,
    });
  };
  const handleMessage = (e) => {
    setEmail({
      ...mail,
      message: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const email = new Email({
      name: mail.name,
      email: mail.email,
      message: mail.message,
    });
    email.validateAll() ? email.sendEmail() : setError(true);
  };

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
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            defaultValue={mail.name}
            onChange={handleName}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            defaultValue={mail.email}
            onChange={handleEmail}
          />
          <textarea
            name="msg"
            placeholder="Escribe tu mensaje"
            required
            defaultValue={mail.message}
            onChange={handleMessage}
          ></textarea>
          {error && (
            <span style={{ color: "red" }}>
              Verifique que haya ingresado los datos correctamente
            </span>
          )}
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
          <a href="https://api.whatsapp.com/send?phone=59176339435&text=Hola,%20ví%20su%20web%20y%20tengo%20una%20consulta:">
            <WhatsappIcon />
            Elva Villegas Nuñez
          </a>
          <a href="https://api.whatsapp.com/send?phone=59173167735&text=Hola,%20ví%20su%20web%20y%20tengo%20una%20consulta:">
            <WhatsappIcon />
            Saúl Arias Cossio
          </a>
          <a href="mailto:tucandera.tours@hotmail.com">
            <MailIcon />
            tucandera.tours@hotmail.com
          </a>
        </div>
        <div className="contact-social-icons">
          <a
            href="https://www.facebook.com/tucandera.tours"
            rel="noreferrer"
            target="_blank"
          >
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
          <a
            href="https://www.instagram.com/tucandera.tours/"
            rel="noreferrer"
            target="_blank"
          >
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
