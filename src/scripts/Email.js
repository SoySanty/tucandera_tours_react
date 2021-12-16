import MAIN_URL from "./mainUrl";

class Email {
  constructor({ name = null, email = null, message = null }) {
    this.name = name.toLowerCase();
    this.email = email.toLowerCase();
    this.message = message.toLowerCase();
    this.expRegName = /[&/\\#,+(!)$~%.'":*<>{}]/g;
    this.regExpEmail = /^[^@'"><;:, ]+@[^@'"><;:, ]+\.[a-zA-Z]{2,}$/;
  }

  validateAll = () => {
    console.log(
      this.validateName() && this.validateEmail() && this.validateMessage()
    );
    return this.validateName() && this.validateEmail() && this.validateMessage()
      ? true
      : false;
  };

  validateName = () => {
    this.name = this.name.replace(this.expRegName, "");
    return !this.expRegName.test(this.name) ? true : false;
  };

  validateEmail = () => {
    return this.expRegName.test(this.email);
  };

  validateMessage = () => {
    this.message = this.message.replace(this.expRegName, ".");
    return !this.expRegName.test(this.message) ? true : false;
  };

  //SEND EMAIL
  sendEmail = async () => {
    const URL = MAIN_URL + "?show=mail&target=send-email";
    const body = new FormData();
    body.append("name", this.name);
    body.append("email", this.email);
    body.append("message", this.message);
    const DATA = { method: "POST", body };
    const request = await fetch(URL, DATA);
    const response = await request.json();
    console.log(response);
  };
}

export default Email;
