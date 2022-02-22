import { createContext, useState, useEffect } from "react";

const TradingContext = createContext();

export const TradingProvider = ({ children }) => {
  const [tradingData, setTradingData] = useState([]);
  useEffect(() => {
    fetchTradingData();
  }, []);

  // Fetch inital data
  const fetchTradingData = async () => {
    const response = await fetch(`/tradingdata?_sort=id&_order=desc`);
    const data = await response.json();
    setTradingData(data);
  };

  // Add data to list
  const addTradingData = async (inputs) => {
    const response = await fetch("/tradingdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const data = await response.json();
    setTradingData([data, ...tradingData]);
  };
  // Delete Trading data
  const deleteTradingData = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/tradingdata/${id}`, { method: "DELETE" });

      setTradingData(tradingData.filter((item) => item.id !== id));
    }
  };
  return (
    <TradingContext.Provider
      value={{
        tradingData,
        addTradingData,
        deleteTradingData,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export default TradingContext;
