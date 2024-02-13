import MAIN_URL, { SITE_LIST_URL, BUSINESS_LIST_URL } from "./mainUrl";

// Fetch the list of sites
const getSiteList = async () => {
  try {
    const request = await fetch(SITE_LIST_URL);
    const response = await request.json();
    return response;
  } catch (e) {
    return [];
  }
};

// Fetch the list of businesses
const getBusinessList = async () => {
  try {
    const request = await fetch(BUSINESS_LIST_URL);
    const response = await request.json();
    return response;
  } catch (e) {
    return [];
  }
};

const getSite = async ({ id, callback }) => {
  const body = new FormData();
  body.append("nro", id);
  const data = { method: "POST", body };
  const URL = MAIN_URL + "?show=site&target=filter-site";

  const request = await fetch(URL, data);
  const response = await request.json();
  callback(response);
};

export { getSiteList, getBusinessList, getSite };
