import React from "react";
import { useContext, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import TradingContext from "../context/TradingContext";
function TradingForm() {
  const { addTradingData } = useContext(TradingContext);
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
    if (
      inputs.firstName === "" ||
      inputs.lastName === "" ||
      inputs.teamName === "" ||
      inputs.playerNo === ""
    ) {
      alert("Please fill all the required values");
    } else {
      addTradingData(inputs);
      setInputs({
        firstName: "",
        lastName: "",
        teamName: "",
        playerNo: "",
        estimatedValue: "",
      });
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Please add player details!</h2>
        <div className="input-group">
          <label>
            <span>First Name* : </span>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
            value={inputs.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            <span>Last Name* : </span>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
            value={inputs.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            <span>Team Name* : </span>
          </label>
          <input
            type="text"
            placeholder="Enter Team Name"
            name="teamName"
            required
            value={inputs.teamName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            <span>Player Number* : </span>
          </label>
          <input
            type="number"
            placeholder="Enter Player Number"
            name="playerNo"
            required
            value={inputs.playerNo}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>
            <span>Estimated Value : </span>
          </label>
          <input
            type="number"
            placeholder="Enter Estimated Value of Card"
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
