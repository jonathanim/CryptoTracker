import React, { useContext } from "react";
import DisplayList from "./components/DisplayList";
import DisplayTicker from "./components/DisplayTicker";
import { CoinContext } from "./context/coinContext";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Favorites from "./components/Favorites";

function App() {
  const { coins, removeTwenty, addTwenty } = useContext(CoinContext);

  return (
    <div className="container">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <DisplayList
              coins={coins}
              addTwenty={addTwenty}
              removeTwenty={removeTwenty}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/ticker/:name" element={<DisplayTicker />} />
      </Routes>
    </div>
  );
}

export default App;
