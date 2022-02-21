import TradingForm from "../TradingForm";
import { useState } from "react";
import TradingLists from "../TradingLists";
function Home() {
  const [tradingData, setTradingData] = useState([]);
  const handleTrading = (inputs) => {
    setTradingData([...tradingData, inputs]);
  };
  return (
    <>
      <TradingForm addTrading={(inputs) => handleTrading(inputs)} />
      <TradingLists tradingLists={tradingData} />
    </>
  );
}

export default Home;
