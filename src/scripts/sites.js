import MAIN_URL from "./mainUrl";

const getIndexes = async ({ callback }) => {
  const URL = MAIN_URL + "?show=indexes&target=index-list";
  const request = await fetch(URL);
  const response = await request.json();
  callback(response);
};

export { getIndexes };
