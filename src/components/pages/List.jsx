import React, { useContext } from "react";
import TradingContext from "../../context/TradingContext";
function List() {
  const { tradingData } = useContext(TradingContext);
  console.log(tradingData);
  return <div>List Page</div>;
}

export default List;
