//Push indexer sites
const refreshIndexers = (payload) => ({
  type: "REFRESH_INDEXERS",
  payload,
});

//Push an element to siteList
const setSite = (payload) => ({
  type: "SET_SITE",
  payload,
});

export { refreshIndexers, setSite };
