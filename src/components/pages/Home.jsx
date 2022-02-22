import TradingForm from "../TradingForm";
import { useState } from "react";
import TradingLists from "../TradingLists";
import TradingStatus from "../TradingStatus";
import { TradingProvider } from "../../context/TradingContext";
function Home() {
  return (
    <TradingProvider>
      <TradingForm />
      <TradingStatus />
      <TradingLists />
    </TradingProvider>
  );
}

export default Home;
