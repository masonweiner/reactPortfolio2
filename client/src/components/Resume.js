import React from "react";
import resume from "./assets/resume.pdf";

const btnStyle = {
  backgroundColor: "#5EB1BF",
  padding: "15px",
  fontSize: "30px",
  color: "#121211",
  borderRadius: "25px",
  border: "3px solid #FFFCFF",
};

function Resume() {
  return (
    <div>
      <a href={resume} download="mason-weiner-resume">
        <button style={btnStyle}>Download my resume</button>
      </a>
    </div>
  );
}

export default Resume;
