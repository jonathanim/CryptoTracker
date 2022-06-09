import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayList from "./components/DisplayList";
import DisplayTicker from "./components/DisplayTicker";
import Favorites from "./components/Favorites";

import { Route, Routes } from "react-router-dom";

function App() {
  const [coins, setCoins] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [displayCoin, setDisplayCoin] = useState({});

  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = async () => {
    const result = await fetch("https://api.coincap.io/v2/assets?limit=20");
    let data = await result.json();
    setCoins(data.data);
  };

  console.log(coins);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<DisplayList coins={coins} />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
        <Route path="/ticker/:name" element={<DisplayTicker />} />
      </Routes>
    </div>
  );
}

export default App;
