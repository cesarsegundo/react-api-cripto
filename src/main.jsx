import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import CryptoPage from "./components/sections/PageCrypto/CryptoPage";
import CryptosGrid from "./components/sections/CryptosGrid";
import Home from "./components/sections/Home";
import "./index.css";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<CryptosGrid />} />
          <Route path=":id" element={<CryptoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
