import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import { Provider } from "react-redux";
import reducer from "reducers";
import { createStore } from "redux";
import Site from "components/screens/Site";

const initialState = {
  isLoading: false,
  placeIndexer: [],
  siteList: [],
  businessList: [],
};
const store = createStore(reducer, initialState);

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
