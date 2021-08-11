import React from "react";
import ford from "./assets/ford.jpg";
import yoda from "./assets/yoda.jpg";
import dayPlanner from "./assets/day-planner.jpg";
const path = require("path");

const projectStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const cardStyle = {
  display: "flex",
  margin: "40px",
  border: "3px solid #FFFCFF",
  width: "400px",
  height: "300px",
  backgroundColor: "#121211",
  color: "#5EB1BF",
};

const imgStyle = {
  width: "100%",
  height: "80%",
};

function Project() {
  return (
    <>
      <div style={projectStyle}>
        <a href="https://whispering-fortress-31426.herokuapp.com/">
          <div className="card" style={cardStyle}>
            <div className="card-header">Ford Finder</div>
            <img
              src={ford}
              className="card-img-top"
              alt="Ford Finder App"
              style={imgStyle}
            ></img>
          </div>
        </a>
        <a href="https://masonweiner.github.io/Yoda_Speak_Quiz/">
          <div className="card" style={cardStyle}>
            <p className="card-header">Yoda Speak Quiz</p>
            <img
              src={yoda}
              className="card-img-top"
              alt="Yoda Speak Quiz"
              style={imgStyle}
            ></img>
          </div>
        </a>
        <a href="https://masonweiner.github.io/workday-scheduler/">
          <div className="card" style={cardStyle}>
            <div className="card-header">Work Day Scheduler</div>
            <img
              src={dayPlanner}
              className="card-img-top"
              alt="Ford Finder App"
              style={imgStyle}
            ></img>
          </div>
        </a>
      </div>
    </>
  );
}

export default Project;
