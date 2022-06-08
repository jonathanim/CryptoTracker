import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayList from "./components/DisplayList";
import Header from "./components/Header";

function App() {
  const [coins, setCoins] = useState([]);

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
    <div className="App">
      <Header />
      <div className="container">
        <DisplayList coins={coins} />
      </div>
    </div>
  );
}

export default App;
