import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import { createStore } from "redux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sites" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
