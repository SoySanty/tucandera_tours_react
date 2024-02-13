import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import Home from "./components/screens/Home";
import { Provider } from "react-redux";
import Site from "components/screens/Site";
import sitesAndBusiness from "slices/sitesAndBusiness";

export const store = configureStore({
  reducer: {
    sitesAndBusiness,
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:placeType" element={<Home />} />
          <Route path="/sitios/:site" element={<Site />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
