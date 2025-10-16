
import React, { useState } from "react";
import ReactDOM from "react-dom";



const App = () => {
  const [color, setColor] = useState("red"); // initial color

  const handleClick = () => {
    setColor("blue"); // change color on click
  };

  const customStyle = {
    color: color,
    fontSize: "20px",
    border: "1px solid black",
    cursor: "pointer",
  };

  return (
    <h1 style={customStyle} onClick={handleClick}>
      Hello World!
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
