const MAIN_URL =
  process.env.REACT_APP_BACKEND_URL === "prod"
    ? "https://api.tucanderatours.com/"
    : "http://localhost/projects/tucandera/tucandera_remake/";
const THIS_URL = "https://tucanderatours.com/";

export { THIS_URL };
export default MAIN_URL;
