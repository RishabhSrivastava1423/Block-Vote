import "regenerator-runtime/runtime";
import React, { useState } from "react";
import { login, logout } from "./utils";
import "./global.css";
import Candidate from "./Components/Candidate.js";
import Manifest from "./Components/Manifest.js";
import navImg from "./images/Navbar.jpg";
import canImg1 from "./images/candidate1.jpg";
import canImg2 from "./images/candidate2.jpg";

import getConfig from "./config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {

  const [buttonState, changeButtonState] = useState(true);

  const modBtn = ()=>{
    changeButtonState(
      !buttonState
    )
  };

  let canTitle1, canTitle2, canDesc1, canDesc2;

  canTitle1 = "Lionel Messi";
  canDesc1 =
    "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.";

  canTitle2 = "Cristiano Ronaldo";
  canDesc2 =
    "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team.";

  let manSubject = "Who is the best?";
  let manDesc =
    "The Messi–Ronaldo rivalry is a sporting rivalry in football encouraged by the media and fans that involves footballers Lionel Messi and Cristiano Ronaldo, mainly for being contemporaries and for their similar records and sporting success. Together they have achieved various historical milestones in the sport, coming to be considered as two of the best players of all time. They are two of the most decorated footballers ever, having won a combined 69 trophies (Messi 35, Ronaldo 34)during their senior careers thus far, and have regularly broken the 50-goal barrier in a single season. They are amongst the eight players to score over 700 goals each in their careers for club and country. ";

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={navImg}
              alt=""
              style={{ width: "48px", height: "36px" }}
              className="d-inline-block align-text-top"
            />{" "}
            Block-vote
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <a
                className="nav-link active "
                aria-current="page"
                onClick={window.accountId === "" ? login : logout}
                eventKey={2}
              >
                {window.accountId === "" ? "Login" : "Logout"}
              </a>
            </span>
          </div>
        </div>
      </nav>
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col">
          <Candidate
            picture={canImg1}
            title={canTitle1}
            description={canDesc1}
            buttonState = {buttonState}
            modBtn = {modBtn}
          />
        </div>
        <div className="col">
          <Manifest
            subject={manSubject}
            description={manDesc}
            can1={canTitle1}
            can2={canTitle2}
          />
        </div>
        <div className="col">
          <Candidate
            picture={canImg2}
            title={canTitle2}
            description={canDesc2}
            buttonState = {buttonState}
            modBtn = {modBtn}
          />
        </div>
      </div>
    </div>
  );
}
