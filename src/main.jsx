import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import CryptosGrid from "./components/sections/CryptosGrid";
import Home from "./components/sections/Home";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/criptomonedas" element={<App />}>
        <Route index element={<CryptosGrid />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
