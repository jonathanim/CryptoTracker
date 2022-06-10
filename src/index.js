import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CoinProvider } from './context/coinContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CoinProvider>
      <App />
    </CoinProvider>
  </Router>
);
