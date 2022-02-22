import { createContext, useState, useEffect } from "react";

const TradingContext = createContext();

export const TradingProvider = ({ children }) => {
  const [tradingData, setTradingData] = useState([]);

  const handleTrading = (inputs) => {
    setTradingData([inputs, ...tradingData]);
  };

  return (
    <TradingContext.Provider
      value={{
        tradingData,
        handleTrading,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export default TradingContext;
