import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import { Provider } from "react-redux";
import reducer from "reducers";
import { createStore } from "redux";

const initialState = {
  isLoading: false,
  siteIndexer: [],
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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
