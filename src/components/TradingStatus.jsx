import React, { useContext } from "react";
import TradingContext from "../context/TradingContext";

function TradingStatus() {
  const { tradingData, handleTrading } = useContext(TradingContext);

  const initialValue = 0;
  const sumWithInitial = tradingData.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue.estimatedValue),
    initialValue
  );

  return (
    <div>
      <div className="trading-stats">
        <h4>Total : {sumWithInitial ?? 0}</h4>
      </div>
    </div>
  );
}

export default TradingStatus;
