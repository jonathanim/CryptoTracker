import React, { createContext, useState, useEffect } from "react";

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [topFive, setTopFive] = useState([]);
  const [limit, setLimit] = useState(20);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    getCoins();
  }, [limit]);

  useEffect(() => {
    getCoins();
    getTopFive();
  }, []);

  const getCoins = async () => {
    const result = await fetch(
      `https://api.coincap.io/v2/assets?limit=${limit}`
    );
    let data = await result.json();
    setCoins(data.data);
  };

  const getTopFive = async () => {
    const result = await fetch("https://api.coincap.io/v2/assets?limit=5");
    let data = await result.json();
    setTopFive(data.data);
  };

  const addTwenty = () => {
    setLimit(limit + 20);
  };

  const removeTwenty = () => {
    setLimit(limit - 20);
  };

  return (
    <CoinContext.Provider value={{ coins, topFive, addTwenty, removeTwenty }}>
      {children}
    </CoinContext.Provider>
  );
};
