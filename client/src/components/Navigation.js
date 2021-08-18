import React, { useState } from "react";

const aqua = { color: "#56E39F" };
const darkGreen = { color: "#5B6C5D" };
const ocean = { color: "#59C9A5" };
const coffee = { color: "#3B2C35" };

const navStyle = {
  display: "flex",
  color: aqua,
  padding: "20px",
  margin: "20px",
  flexDirection: "reverse-row",
  flexWrap: "wrap",
  listStyleType: "none",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid #5EB1BF",
  borderRadius: "25px",
  width: "69%",
};

const btnStyle = {
  backgroundColor: "#5EB1BF",
  padding: "15px",
  fontSize: "200%",
  color: "#121211",
  borderRadius: "25px",
  border: "3px solid #FFFCFF",
  width: "100%",
};

function Navigation(props) {
  const tabs = ["About Me", "Portfolio"];
  return (
    <>
      <ul className="navbar navbar-expand-lg" style={navStyle}>
        {tabs.map((tab) => (
          <li key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              <button style={btnStyle}>{tab}</button>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navigation;
