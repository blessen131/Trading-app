import TradingForm from "../TradingForm";
import TradingLists from "../TradingLists";
import TradingStatus from "../TradingStatus";
import { useContext, useEffect } from "react";
import TradingContext from "../../context/TradingContext";
function Home() {
  const { fetchTradingData } = useContext(TradingContext);
  useEffect(() => {
    fetchTradingData();
  }, []);
  return (
    <>
      <TradingForm />
      <TradingStatus />
      <TradingLists />
    </>
  );
}

export default Home;
