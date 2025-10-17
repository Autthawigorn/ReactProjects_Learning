import React, { useState } from "react";
import ReactDOM from "react-dom/client"; // 👈 note the "/client" part!

const App = () => {
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setColor("blue");
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
};

// ✅ Correct for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
