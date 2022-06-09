import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DisplayTicker = () => {
  const [coin, setCoin] = useState({});

  const param = useParams();

  useEffect(() => {
    getCoin();
  }, []);

  const getCoin = async () => {
    const searchCoin = param.name;
    console.log(param.name);

    const result = await fetch(
      `https://api.coincap.io/v2/assets/${searchCoin}`
    );
    let data = await result.json();
    console.log(data.data);
    setCoin(data.data);
  };

  return (
    <div className="container mt-5" style={{ flexDirection: "column" }}>
      <div>
        <h1>
          {coin.name} / {coin.symbol}
        </h1>
        <h2>Ranked: {coin.rank}</h2>
        <h3>Price:${parseFloat(coin.priceUsd)}</h3>
      </div>
      <div>
        <h3>Market Supply:</h3>
        <p>{!coin.maxSupply ? "Unknown" : coin.maxSupply}</p>
        <h3>Market Cap:</h3>
        <p>{coin.marketCapUsd}</p>
        <h3>Supply:</h3>
        <p>{coin.supply}</p>
        <h3>24 hour Volume:</h3>
        <p>{coin.volumeUsd24Hr}</p>
      </div>

      <div>
        <h3>
          <a href={coin.explorer} target="_blank" rel="noreferrer">
            More Info
          </a>
        </h3>
      </div>
    </div>
  );
};

export default DisplayTicker;
