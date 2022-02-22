import React from "react";
import TradingListItem from "./TradingListItem";

function TradingLists({ tradingLists }) {
  return (
    <div>
      {tradingLists.map((item) => (
        <TradingListItem key={item.key} item={item} />
      ))}
    </div>
  );
}

export default TradingLists;
