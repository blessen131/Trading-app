import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import TradingContext from "../context/TradingContext";
function TradingLists() {
  const { deleteTradingData, currentData } = useContext(TradingContext);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Team Name</th>
            <th>Player No</th>
            <th>Estimated Value</th>
            <th>Action</th>
          </tr>
          {currentData?.map((item) => (
            <tr key={item.id}>
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
              {/* <td>
                <FaEdit color="purple" />
              </td> */}
            </tr>
          ))}
          {currentData.length === 0 && (
            <tr key="nodata">
              <td colSpan={5}>No Data </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TradingLists;
