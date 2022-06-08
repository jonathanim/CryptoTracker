import React from "react";
import "../App.css";

const DisplayList = ({ coins }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="th-coins">Rank</th>
            <th className="th-coins">Symbol</th>
            <th className="th-coins">Name</th>
            <th className="th-coins">Price</th>
          </tr>
        </thead>
        <tbody className="hoverTable">
          {coins.map((coin, i) => {
            return (
              <tr key={i} className="tr-coins">
                <td className="td-coins">{coin.rank}</td>
                <td className="td-coins">{coin.symbol}</td>
                <td className="td-coins">{coin.name}</td>
                <td className="td-coins">
                  {parseFloat(coin.priceUsd).toFixed(6)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayList;
