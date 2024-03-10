const MAIN_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8000/";

const SITE_LIST_URL = MAIN_URL + "api/sites/";
const BUSINESS_LIST_URL = MAIN_URL + "api/business/";
const SITES_IMG_URL = MAIN_URL + "api/sites/image/";
const BUSINESS_IMG_URL = MAIN_URL + "api/business/image/";

export { SITE_LIST_URL, BUSINESS_LIST_URL, BUSINESS_IMG_URL, SITES_IMG_URL };
export default MAIN_URL;
