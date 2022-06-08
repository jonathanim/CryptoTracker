import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayList from "./components/DisplayList";
import DisplayTicker from "./components/DisplayTicker";
import Favorites from "./components/Favorites";

import { Route, Routes } from "react-router-dom";

function App() {
  const [coins, setCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [displayCoin, setDisplayCoin] = useState({});

  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    getCoin();
  }, [searchCoin]);

  const getCoins = async () => {
    const result = await fetch("https://api.coincap.io/v2/assets?limit=20");
    let data = await result.json();
    setCoins(data.data);
  };

  const getCoin = async () => {
    if (searchCoin) {
      const result = await fetch(
        `https://api.coincap.io/v2/assets/${searchCoin}`
      );

      let data = await result.json();
      setDisplayCoin(data);
    }
  };

  const handleClick = (e) => {
    let firstStr = e.target.innerHTML;
    let arr = firstStr.split(" ");
    const target = arr[0].toLowerCase();
    setSearchCoin(target);
  };

  console.log(displayCoin);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<DisplayList coins={coins} handleClick={handleClick} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
        <Route
          path="/ticker/:id"
          element={<DisplayTicker coin={displayCoin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
