import React from "react";

const DisplayList = ({ coins }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, i) => {
            return (
              <tr key={i}>
                <td>{coin.rank}</td>
                <td>{coin.symbol}</td>
                <td>{coin.name}</td>
                <td>{parseFloat(coin.priceUsd).toFixed(6)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayList;
