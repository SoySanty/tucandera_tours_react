import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  placeIndexer: [],
  siteList: [],
  businessList: [],
  metaData: {
    title: "Tucandera Tours",
    description:
      "Informacion turística de todos los sitios que puedes visitar en Samaipata, además de recomendaciones de solo los mejores servicios que Samaipata tiene para ofrecer.",
    imgUrl: "http://api.tucanderatours.com/view/img/banner.png",
  },
};

export const counterSlice = createSlice({
  name: "sitesAndBusiness",
  initialState,
  reducers: {
    setSiteList: (state, action) => {
      state.siteList = action.payload;
    },
    setBusinessList: (state, action) => {
      state.businessList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSiteList, setBusinessList } = counterSlice.actions;

export default counterSlice.reducer;
