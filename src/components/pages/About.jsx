import React from "react";
import Card from "../shared/Card";
function About() {
  return (
    <Card>
      Your task is to create an inventory of Sports trading cards. To inventory
      the trading cards, you will input a player’s first and last name, player
      number, and estimated value of the card. It will sum all total values and
      provide a list of entered cards. Functional Requirements: • A user should
      be able to enter the first name, last name, player number, team name, and
      estimated value of the card. o Estimated value is optional. o All other
      fields are required. o Each field should be properly labeled. • A user
      will be able to click button to add the trading card. o All fields are
      cleared when the trading card is added. o The information immediately
      appears in a list below the input fields. • A user should be able to view
      the list of trading cards that had been added. o The list should scroll to
      the last trading card when the list exceeds the view. • A total estimated
      value is displayed in the top right corner of the screen. o This value is
      the summation of all estimated values of the trading cards (if provided).
      • There is an about page with a brief description of the application. o
      The about page link is displayed in the bottom of the screen.
    </Card>
  );
}

export default About;
