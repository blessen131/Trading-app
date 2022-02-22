import TradingForm from "../TradingForm";
import { useState } from "react";
import TradingLists from "../TradingLists";
import TradingStatus from "../TradingStatus";
function Home() {
  const [tradingData, setTradingData] = useState([]);

  const handleTrading = (inputs) => {
    setTradingData([inputs, ...tradingData]);
  };

  return (
    <>
      <TradingForm addTrading={(inputs) => handleTrading(inputs)} />
      <TradingStatus tradingLists={tradingData} />
      <TradingLists tradingLists={tradingData} />
    </>
  );
}

export default Home;
