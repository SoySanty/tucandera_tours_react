import { SITE_LIST_URL, BUSINESS_LIST_URL } from "./mainUrl";

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

const getSiteDetails = async ({ keyName }) => {
  try {
    const request = await fetch(`${SITE_LIST_URL}${keyName}/`);
    const response = await request.json();
    return response;
  } catch (e) {
    return {};
  }
};

export { getSiteList, getBusinessList, getSiteDetails };
