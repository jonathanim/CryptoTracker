import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const DisplayList = ({ coins }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="th-coins">Rank</th>
            <th className="th-coins">Name/Symbol</th>

            <th className="th-coins">Price</th>
          </tr>
        </thead>
        <tbody className="hoverTable">
          {coins.map((coin, i) => {
            return (
              <tr key={i} className="tr-coins">
                <td className="td-coins">{coin.rank}</td>
                <td className="td-coins symbol-text">
                  <Link
                    to={`/ticker/${coin.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {coin.name} ({coin.symbol})
                  </Link>
                </td>
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
