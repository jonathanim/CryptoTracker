
import React, { useContext } from 'react'
import "./App.css";
import DisplayList from "./components/DisplayList";
import DisplayTicker from "./components/DisplayTicker";
import { CoinContext } from './context/coinContext';

import { Route, Routes } from "react-router-dom";

function App() {

  const { coins } = useContext(CoinContext)


  return (
    <div className="container">
      <Routes>

        <Route path="/" element={<DisplayList coins={coins} />} />

        <Route path="/ticker/:name" element={<DisplayTicker />} />
      </Routes>
    </div>
  );
}

export default App;
