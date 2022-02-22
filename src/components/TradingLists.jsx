import React, { useContext } from "react";
import TradingListItem from "./TradingListItem";
import TradingContext from "../context/TradingContext";
function TradingLists() {
  const { tradingData } = useContext(TradingContext);
  return (
    <div>
      {tradingData.map((item) => (
        <TradingListItem key={item.key} item={item} />
      ))}
    </div>
  );
}

export default TradingLists;
