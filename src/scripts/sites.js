import MAIN_URL from "./mainUrl";

const getIndexes = async ({ callback }) => {
  const URL = MAIN_URL + "?show=indexes&target=index-list";
  const request = await fetch(URL);
  const response = await request.json();
  callback(response);
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

export { getIndexes, getSite };
