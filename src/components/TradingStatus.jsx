import React from "react";

function TradingStatus({ tradingLists }) {
  const initialValue = 0;
  const sumWithInitial = tradingLists.reduce(
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
