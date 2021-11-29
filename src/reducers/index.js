const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_INDEXERS":
      return {
        ...state,
        placeIndexer: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
