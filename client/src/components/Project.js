import React from "react";
import ford from "./assets/fordFinder.jpg";
import envelopes from "./assets/Envelopes.jpg";
import yoda from "./assets/Yoda.jpg";
import workout from "./assets/workout.jpg";
import day from "./assets/day.jpg";
import readme from "./assets/readme.jpg";
const path = require("path");

const projectStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#121211",
  color: "#5EB1BF",
  margin: "auto",
};

const a = {
  color: "#FFFCFF",
};

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
  flexBasis: "25%",
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

function Project() {
  return (
    <>
      <div style={projectStyle}>
        {/* ford */}
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Ford Finder 2021
          </p>
          <p className="card-body">
            Ford Finder is an app that allows a user to arrive at the site,
            either log in or register for an account, then look through data
            stored in a database to see all 2021 Ford models.
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <a
            style={a}
            href="https://whispering-fortress-31426.herokuapp.com/"
            className="card-header"
            target="_blank"
            rel="noreferrer noopener"
          >
            Deployed
          </a>
          <a
            href="https://whispering-fortress-31426.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={ford}
              className="card-img-top"
              alt="Ford Finder App"
              style={imgStyle}
            ></img>
          </a>
          <a
            style={a}
            href="https://github.com/strong-one/Ford-Finder-2021"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repository
          </a>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Technologies Used
          </p>
          <p className="card-body">
            Bcrypt, Heroku, Sequelize, dotenv, Express.js, Handlebars.js, mysql,
            CSS, Bootstrap, and Bootswatch
          </p>
        </div>
        {/* envelopes */}
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Envelopes
          </p>
          <p className="card-body">
            Envelopes is a service that allows you to keep track of your budget
            using virtual enveloping system. Users can login and sign up for
            accounts that pull up envelope cards and update transactions in the
            database.
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <a
            style={a}
            href="https://shielded-badlands-79819.herokuapp.com/"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Deployed
          </a>
          <a
            href="https://shielded-badlands-79819.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={envelopes}
              className="card-img-top"
              alt="Envelopes App"
              style={imgStyle}
            ></img>
          </a>
          <a
            style={a}
            href="https://github.com/forbegos/Envelopes"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repository
          </a>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Technologies Used
          </p>
          <p className="card-body">
            React, GraphQL, Node.js and Express.js server, MongoDB, Mongoose ODM
            database, Heroku deployment, JSON Web Token authentication
          </p>
        </div>
        {/* yoda */}
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Yoda Speak Quiz
          </p>
          <p className="card-body">
            The project allows customers to collect the user’s data for
            marketing and research purposes. Also, provides users a chance to
            know what Yoda has to say about them based on their input.
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <a
            style={a}
            href="https://tibegex.github.io/Yoda_Speak_Quiz/"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Deployed
          </a>
          <a
            href="https://tibegex.github.io/Yoda_Speak_Quiz/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={yoda}
              className="card-img-top"
              alt="Envelopes App"
              style={imgStyle}
            ></img>
          </a>
          <a
            style={a}
            href="https://github.com/Tibegex/Yoda_Speak_Quiz"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repository
          </a>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Technologies Used
          </p>
          <p className="card-body">
            HTML, CSS, vanilla Javascript, jQuery, Bootstrap, multiple third
            party APIs
          </p>
        </div>
        {/* workout */}
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Workout Tracker
          </p>
          <p className="card-body">
            Using already created front end elements, I created the routes and
            the schema to perform CRUD operations on a mongodb database. I used
            the aggregate function to add up and return the workout time
            dynamically.
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <a
            style={a}
            href="https://floating-ocean-41077.herokuapp.com/?id=60da876b2eeb1d00158d1902"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Deployed
          </a>
          <a
            href="https://floating-ocean-41077.herokuapp.com/?id=60da876b2eeb1d00158d1902"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={workout}
              className="card-img-top"
              alt="Workout Tracker App"
              style={imgStyle}
            ></img>
          </a>
          <a
            style={a}
            href="https://github.com/masonweiner/workout-tracker"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repository
          </a>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Technologies Used
          </p>
          <p className="card-body">
            Node.js, Express.js, Mongoose, Morgan, MongoDB, Heroku
          </p>
        </div>
        {/* day planner */}
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Day Planner
          </p>
          <p className="card-body">
            This is an app that allows you to schedule activities for the
            current day while saving data to local storage
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <a
            style={a}
            href="https://masonweiner.github.io/workday-scheduler/"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Deployed
          </a>
          <a
            href="https://masonweiner.github.io/workday-scheduler/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={day}
              className="card-img-top"
              alt="Workout Tracker App"
              style={imgStyle}
            ></img>
          </a>
          <a
            style={a}
            href="https://github.com/masonweiner/workout-tracker"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repository
          </a>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Technologies Used
          </p>
          <p className="card-body">
            jQuery, Bootstrap, moment.js, local storage
          </p>
        </div>
        {/* readme */}
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            README.md Generator
          </p>
          <p className="card-body">
            This is a command line application that asks for user input and uses
            it to create a professional README.md file.
          </p>
        </div>
        <div className="card" style={cardStyle}>
          <img
            src={readme}
            className="card-img-top"
            alt="Workout Tracker App"
            style={imgStyle}
          ></img>

          <a
            style={a}
            href="https://github.com/masonweiner/readme-generator"
            className="card-footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Repository
          </a>
        </div>
        <div className="card" style={cardStyle}>
          <p className="card-title" style={titleStyle}>
            Technologies Used
          </p>
          <p className="card-body">Javascript, Inquirer, File System</p>
        </div>
      </div>
    </>
  );
}

export default Project;
