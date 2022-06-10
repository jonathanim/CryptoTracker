import React, { createContext, useState, useEffect } from "react";


export const CoinContext = createContext()


export const CoinProvider = ({ children }) => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        getCoins();
    }, []);

    const getCoins = async () => {
        const result = await fetch("https://api.coincap.io/v2/assets?limit=20");
        let data = await result.json();
        setCoins(data.data);
    };



    return (
        <CoinContext.Provider value={{ coins }}>
            {children}
        </CoinContext.Provider>
    )
}


