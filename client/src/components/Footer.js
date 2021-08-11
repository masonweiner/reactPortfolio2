import React from "react";
import resume from "./assets/resume.pdf";
// const footerStyle = {
//   backgroundColor: "#121211",
//   display: "flex",
//   flexWrap: "wrap",
//   borderRadius: "5px",
//   justifyContent: "center",
// };
const btnStyle = {
  backgroundColor: "#FFFCFF",
  border: "3px solid #5EB1BF",
  padding: "20px",
  margin: "30px",
  fontSize: "20px",
  color: "#121211",
  borderRadius: "25px",
  width: "200px",
};
function Footer() {
  return (
    <>
      <div>
        <a href="https://github.com/masonweiner" className="container-fluid">
          <button style={btnStyle}>GitHub</button>
        </a>
        <a
          href="https://www.linkedin.com/in/mason-weiner-64ab0220a/"
          className="container-fluid"
        >
          <button style={btnStyle}>LinkedIn</button>
        </a>
        <a
          href={resume}
          download="mason-weiner-resume"
          className="container-fluid"
        >
          <button style={btnStyle}>Resume</button>
        </a>
      </div>
    </>
  );
}

export default Footer;
