import React from "react";
import Header from "./components/Header";

// import Footer from "./components/Footer";

// coffee: #3B2C35
// darkGreen: #5B6C5D
// ocean: #59C9A5
// aqua: #56E39F
const bodyStyle = {
  background: "#121211",
  border: "5px solid #FFFCFF",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  margin: "0",
  height: "100%",
};

const headerStyle = {
  height: "85%",
  flexWrap: "wrap",
  margin: "auto 0",
};

// const footerStyle = {
//   backgroundColor: "#121211",
//   display: "flex",
//   borderRadius: "5px",
//   justifyContent: "center",
// };

function App() {
  return (
    <>
      <body style={bodyStyle}>
        <Header style={headerStyle} />
        {/* <Footer
          className="footer container-fluid fixed-bottom"
          style={footerStyle}
        /> */}
      </body>
    </>
  );
}

export default App;
