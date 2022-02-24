import React from "react";
import Card from "../shared/Card";
function About() {
  return (
    <Card>
      <h1>Trading cards app</h1>
      <br />
      <h4 className="about-scope">Scope</h4>
      <br />
      <div className="about-scope">
        <p>
          Create an inventory of Sports trading cards. To inventory the trading
          cards, user will input a player’s first and last name, player number,
          and estimated value of the card. It will sum all total values and
          provide a list of entered cards.
        </p>
        <br />
        <h4 className="about-scope">Functional Requirements</h4>
        <br />
        <ol>
          <li>
            A user should be able to enter the first name, last name, player
            number, team name, and estimated value of the card.
            <ul className="scope-bullets">
              <li>Estimated value is optional.</li>
              <li>All other fields are required.</li>
              <li>Each field should be properly labeled.</li>
            </ul>
          </li>
          <li>
            A user will be able to click button to add the trading card.
            <ul className="scope-bullets">
              <li>All fields are cleared when the trading card is added.</li>
              <li>
                The information immediately appears in a list below the input
                fields.
              </li>
              <li>Each field should be properly labeled.</li>
            </ul>
          </li>
          <li>
            A user should be able to view the list of trading cards that had
            been added.
            <ul className="scope-bullets">
              <li>
                The list should scroll to the last trading card when the list
                exceeds the view.
              </li>
            </ul>
          </li>
          <li>
            A total estimated value is displayed in the top right corner of the
            screen.
            <ul className="scope-bullets">
              <li>
                This value is the summation of all estimated values of the
                trading cards (if provided).
              </li>
            </ul>
          </li>
          <li>
            There is an about page with a brief description of the application.
            <ul className="scope-bullets">
              <li>
                The about page link is displayed in the bottom of the screen.
              </li>
            </ul>
          </li>
        </ol>
        <br />
        <h4 className="about-scope">Additional Features</h4>
        <br />
        <ol>
          <li>
            A Mock Json Server added in the application
            <ul className="scope-bullets">
              <li>
                Instead of storing data in the state, data added in the json
                file
              </li>
              <li>Dynamically add/delete trading list</li>
            </ul>
          </li>
          <li>
            A search feature added in the list page
            <ul className="scope-bullets">
              <li>
                User can filter data based on the first name,last name,team
                name,player no or estimated value (player no or estimated value
                greater than or equal to search value)
              </li>
              <li>
                Onchange function added in seach (if the user type character
                greater than 2 )
              </li>
            </ul>
          </li>
          <li>
            Report feature added in the Home and List page
            <ul className="scope-bullets">
              <li>
                User can generate pdf report from home page
                (report_currentdate_currentyear.pdf)
              </li>
              <li>
                User can generate pdf report based on the filter in list page
                (report_currentdate_currentyear.pdf)
              </li>
              <li>Validation added if the list is empty</li>
            </ul>
          </li>
          <li>Not found Page add for the unknown path</li>
        </ol>
      </div>
    </Card>
  );
}

export default About;
