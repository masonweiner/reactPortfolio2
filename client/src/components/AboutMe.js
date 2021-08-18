import React from "react";
import mason from "./assets/mason.jpg";

const aqua = { color: "#56E39F" };
const darkGreen = { color: "#5B6C5D" };
const ocean = { color: "#59C9A5" };
const coffee = { color: "#3B2C35" };

const cardStyle = {
  display: "flex",
  margin: "40px",
  border: "4px solid #5EB1BF",
  width: "269px",
  height: "300px",
  backgroundColor: "#121211",
  color: "#FFFCFF",
  fontSize: "19px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
};

const aboutStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#121211",
  color: "#5EB1BF",
  margin: "auto",
};

const imgStyle = {
  maxWidth: "269px",
  maxHeight: "300px",
};

const titleStyle = {
  display: "flex",
  margin: "15px",
  borderBottom: "1px solid #FFFCFF",
};

function AboutMe() {
  return (
    <>
      <div style={aboutStyle}>
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
          <img className="card-body" src={mason} style={imgStyle}></img>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Technical Skills
          </p>
          <p className="card-body">
            HTML, CSS, Javascript, jQuery, React, Express, Java, MySQL, NoSQL,
            MongoDB, GraphQL, bcrypt, Bootstrap, and more npm packages
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
