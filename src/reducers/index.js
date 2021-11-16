const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SITE_INDEXER":
      return {
        ...state,
        siteIndexer: [...state.siteIndexer, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
