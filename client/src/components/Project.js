import React from "react";
import ford from "./assets/fordFinder.jpg";
const path = require("path");

const projectStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#121211",
  color: "#5EB1BF",
  margin: "auto",
};

const cardStyle = {
  display: "flex",
  margin: "40px",
  border: "4px solid #FFFCFF",
  width: "269px",
  height: "300px",
  backgroundColor: "#121211",
  color: "#FFFCFF",
  fontSize: "19px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
};

const imgStyle = {
  maxWidth: "350px",
  maxHeight: "300px",
};

const titleStyle = {
  display: "flex",
  margin: "15px",
  borderBottom: "1px solid #FFFCFF",
};

const cardSt = {
  display: "flex",
  margin: "40px",
  border: "4px solid #FFFCFF",
  width: "350px",
  height: "220px",
  backgroundColor: "#121211",
  color: "#FFFCFF",
  fontSize: "19px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
};

function Project() {
  return (
    <>
      <div style={projectStyle}>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Ford Finder 2021
          </p>
          <p className="card-body">
            This is an app that allows a user to arrive at the site, either log
            in or register for an account, then look through data stored in a
            database to see all 2021 Ford models.
          </p>
        </div>
        <a
          className="card"
          href="https://whispering-fortress-31426.herokuapp.com/"
          style={cardSt}
        >
          <img
            src={ford}
            className="card-img-top"
            alt="Ford Finder App"
            style={imgStyle}
          ></img>
        </a>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            About Me
          </p>
          <p className="card-body">
            I am a full stack web developer looking to begin my software
            development career. I recently graduated the University of Denver
            full stack web development program.
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            About Me
          </p>
          <p className="card-body">
            I am a full stack web developer looking to begin my software
            development career. I recently graduated the University of Denver
            full stack web development program.
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            About Me
          </p>
          <p className="card-body">
            I am a full stack web developer looking to begin my software
            development career. I recently graduated the University of Denver
            full stack web development program.
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            About Me
          </p>
          <p className="card-body">
            I am a full stack web developer looking to begin my software
            development career. I recently graduated the University of Denver
            full stack web development program.
          </p>
        </div>
      </div>
    </>
  );
}

export default Project;
