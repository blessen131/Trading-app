import React, { useContext, useState } from "react";
import Button from "../shared/Button";
import TradingContext from "../../context/TradingContext";
import Card from "../shared/Card";
import ListStatus from "../ListStatus";

function List() {
  const { tradingData, searchResults, fetchTradingData } =
    useContext(TradingContext);
  const [text, setText] = useState();
  const handleTextChange = ({ target: { value } }) => {
    if (value.length > 2) {
      searchResults(value);
    } else {
      fetchTradingData();
    }
    setText(value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (text) {
      searchResults(text);
    } else {
      fetchTradingData();
    }
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Keyword"
              value={text}
            />
            <Button type="submit">Search</Button>
          </div>
        </form>
      </Card>
      <ListStatus />
      <Card>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Team Name</th>
              <th>Player No</th>
              <th>Estimated Value</th>
            </tr>
            {tradingData.map((item) => (
              <tr key={item.id}>
                <td>{item.firstName + " " + item.lastName}</td>
                <td>{item.teamName}</td>
                <td>{item.playerNo}</td>
                <td>{item.estimatedValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}

export default List;
