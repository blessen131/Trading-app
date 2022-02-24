import { createContext, useState, useEffect } from "react";

const TradingContext = createContext();

export const TradingProvider = ({ children }) => {
  const [tradingData, setTradingData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
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
    setCurrentData([...currentData, inputs]);
  };
  // Delete Trading data
  const deleteTradingData = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/tradingdata/${id}`, { method: "DELETE" });

      setTradingData(tradingData.filter((item) => item.id !== id));
    }
  };
  const searchResults = async (text) => {
    const data = tradingData;
    const filteredData = data.filter(
      (e) =>
        e.firstName.toLowerCase().includes(text.toLowerCase()) ||
        e.lastName.toLowerCase().includes(text.toLowerCase()) ||
        e.teamName.toLowerCase().includes(text.toLowerCase()) ||
        e.playerNo >= text ||
        e.estimatedValue >= text
    );
    setTradingData(filteredData);
  };
  return (
    <TradingContext.Provider
      value={{
        tradingData,
        addTradingData,
        deleteTradingData,
        searchResults,
        fetchTradingData,
        currentData,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export default TradingContext;
