const reducer = (state, action) => {
  switch (action.type) {
    //Refresh all indexes
    case "REFRESH_INDEXERS": {
      return {
        ...state,
        placeIndexer: action.payload,
      };
    }

    //Set a place in siteList
    case "SET_SITE": {
      const NEW_ITEM = state.siteList.findIndex(
        (e) => e.detalles.nro === action.payload.detalles.nro
      );
      return NEW_ITEM < 0
        ? {
            ...state,
            siteList: [...state.siteList, action.payload],
          }
        : state;
    }

    //Refresh metadata
    case "REFRESH_METADATA": {
      return {
        ...state,
        metaData: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
