import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
function TradingForm() {
  return (
    <Card>
      <form>
        <h2>Please add player details!</h2>
        <div className="input-group">
          <label>
            <span>First Name : </span>
          </label>
          <input type="text" placeholder="Enter First Name" />
        </div>
        <div className="input-group">
          <label>
            <span>Last Name : </span>
          </label>
          <input type="text" placeholder="Enter Last Name" />
        </div>
        <div className="input-group">
          <label>
            <span>Team Name : </span>
          </label>
          <input type="text" placeholder="Enter Team Name" />
        </div>
        <div className="input-group">
          <label>
            <span>Player Number : </span>
          </label>
          <input type="text" placeholder="Enter Player Number" />
        </div>
        <div className="input-group">
          <label>
            <span>Estimated Value : </span>
          </label>
          <input type="text" placeholder="Enter Estimated Value" />
        </div>
        <Button type="submit">Add to list</Button>

        {/* {message && <div className="message">{message}</div>} */}
      </form>
    </Card>
  );
}

export default TradingForm;
