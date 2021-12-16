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

//Push indexer sites
const refreshMetadata = (payload) => ({
  type: "REFRESH_METADATA",
  payload,
});

export { refreshIndexers, setSite, refreshMetadata };
