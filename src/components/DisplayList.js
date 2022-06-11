import React from "react";
import { Link } from "react-router-dom";
import { Container, CenterDiv } from "../GlobalStyles";
import TopFive from "./TopFive";

const DisplayList = ({ coins, addTwenty, removeTwenty }) => {
  return (
    <Container>
      <CenterDiv>
        <TopFive />
        <table>
          <thead>
            <tr>
              <th className="th-coins">Rank</th>
              <th className="th-coins">Name / Symbol</th>

              <th className="th-coins">Price / USD</th>
            </tr>
          </thead>
          <tbody className="hoverTable">
            {coins.map((coin, i) => {
              return (
                <tr key={i} className="tr-coins">
                  <td className="td-coins">{coin.rank}</td>
                  <td className="td-coins">
                    <Link
                      to={`/ticker/${coin.id}`}
                      style={{
                        textDecoration: "none",
                        color: "#2c416c",
                      }}
                    >
                      <div>
                        {coin.name} ({coin.symbol})
                      </div>
                    </Link>
                  </td>
                  <td className="td-coins">
                    {"$ " + parseFloat(coin.priceUsd).toFixed(6)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <h3 style={{ textAlign: "center" }}>Displaying: {coins.length}</h3>

          <button onClick={addTwenty}>Next 20</button>
          {coins.length > 1 ? (
            <button onClick={removeTwenty}>Previous</button>
          ) : null}
        </div>
      </CenterDiv>
    </Container>
  );
};

export default DisplayList;
