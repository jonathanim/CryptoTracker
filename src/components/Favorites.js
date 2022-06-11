import React, { useContext } from "react";
import { CoinContext } from "../context/coinContext";
import { Link } from "react-router-dom";
const Favorites = () => {
  const { favorite } = useContext(CoinContext);

  return (
    <div>
      <ul>
        {favorite.map((favItem) => {
          return (
            <li key={favItem}>
              <Link to={`/ticker/${favItem}`}>{favItem}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
