import React, { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import TradingContext from "../context/TradingContext";

function TradingListItem() {
  const { tradingData, handleTrading } = useContext(TradingContext);
  const [item] = tradingData;
  return (
    <Card>
      <div className="num-display">{item.playerNo}</div>
      <button className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Team Name</th>
              <th>Estimated Value</th>
            </tr>
            <tr>
              <td>{item.firstName + " " + item.lastName}</td>
              <td>{item.teamName}</td>
              <td>{item.estimatedValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default TradingListItem;
