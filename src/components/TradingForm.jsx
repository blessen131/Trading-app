import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
function TradingForm({ addTrading }) {
  function handleChange(evt) {
    const value = evt.target.value;
    setInputs({
      ...inputs,
      [evt.target.name]: value,
    });
  }

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    teamName: "",
    playerNo: "",
    estimatedValue: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addTrading(inputs);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please add player details!</h2>
        <div className="input-group">
          <label>
            <span>First Name : </span>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            <span>Last Name : </span>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            <span>Team Name : </span>
          </label>
          <input
            type="text"
            placeholder="Enter Team Name"
            name="teamName"
            value={inputs.teamName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            <span>Player Number : </span>
          </label>
          <input
            type="text"
            placeholder="Enter Player Number"
            name="playerNo"
            value={inputs.playerNo}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            <span>Estimated Value : </span>
          </label>
          <input
            type="text"
            placeholder="Enter Estimated Value"
            name="estimatedValue"
            value={inputs.estimatedValue}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Add to list</Button>

        {/* {message && <div className="message">{message}</div>} */}
      </form>
    </Card>
  );
}

export default TradingForm;
