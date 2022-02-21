import React from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function TradingListItem({ item }) {
  return (
    <Card>
      <div className="num-display">{item.estimatedValue}</div>
      <button className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">
        <table>
          <tr>
            <th>Name</th>
            <th>Player No</th>
            <th>Team name</th>
          </tr>
          <tr>
            <td>{item.firstName + item.lastName}</td>
            <td>{item.playerNo}</td>
            <td>{item.teamName}</td>
          </tr>
        </table>
      </div>
    </Card>
  );
}

export default TradingListItem;
