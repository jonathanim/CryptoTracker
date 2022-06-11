import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CenterDiv, Container } from "../GlobalStyles";
import { BsSuitHeart } from "react-icons/bs";
import { CoinContext } from "../context/coinContext";

const DisplayTicker = () => {
  const [coin, setCoin] = useState({});
  const { favorite, addToFavorites } = useContext(CoinContext);
  const [inFavorite, setInFavorite] = useState(false);
  const param = useParams();

  useEffect(() => {
    getCoin();
  }, []);

  useEffect(() => {
    handleFavorite(favorite, coin.id);
  });

  const getCoin = async () => {
    const searchCoin = param.name;

    if (searchCoin !== null || undefined) {
      const result = await fetch(
        `https://api.coincap.io/v2/assets/${searchCoin}`
      );
      let data = await result.json();

      setCoin(data.data);
    }
  };

  const handleClick = (e) => {
    addToFavorites(favorite, coin.id);
  };

  const handleFavorite = (currentArray, favoriteItem) => {
    const found = currentArray.includes(favoriteItem);
    setInFavorite(found);
  };

  console.log(favorite);
  return (
    <Container>
      <CenterDiv>
        <div style={{ display: "flex" }}>
          <h4 style={{ margin: "0px 20px" }}>
            {inFavorite ? (
              <BsSuitHeart color="red" onClick={(e) => handleClick()} />
            ) : (
              <BsSuitHeart color="white" onClick={(e) => handleClick()} />
            )}
          </h4>
        </div>
        <h1>
          {coin.name} / {coin.symbol}
        </h1>
        <h2>Ranked: {coin.rank}</h2>
        <h3>Price:${parseFloat(coin.priceUsd)}</h3>
      </CenterDiv>
      <CenterDiv>
        <h3>Market Supply:</h3>
        <p>{!coin.maxSupply ? "Unknown" : coin.maxSupply}</p>
        <h3>Market Cap:</h3>
        <p>{coin.marketCapUsd}</p>
        <h3>Supply:</h3>
        <p>{coin.supply}</p>
        <h3>24 hour Volume:</h3>
        <p>{coin.volumeUsd24Hr}</p>
      </CenterDiv>

      <CenterDiv>
        <h3>
          <a href={coin.explorer} target="_blank" rel="noreferrer">
            More Info
          </a>
        </h3>
      </CenterDiv>
    </Container>
  );
};

export default DisplayTicker;
