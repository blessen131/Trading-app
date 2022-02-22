import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import TradingContext from "../context/TradingContext";
function TradingLists() {
  const { tradingData, deleteTradingData } = useContext(TradingContext);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Team Name</th>
            <th>Player No</th>
            <th>Estimated Value</th>
            <th colSpan={2}>Action</th>
          </tr>
          {tradingData.map((item) => (
            <tr>
              <td>{item.firstName + " " + item.lastName}</td>
              <td>{item.teamName}</td>
              <td>{item.playerNo}</td>
              <td>{item.estimatedValue}</td>
              <td>
                <FaTimes
                  color="purple"
                  onClick={() => deleteTradingData(item.id)}
                />
              </td>
              <td>
                <FaEdit color="purple" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradingLists;
