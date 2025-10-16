import React from "react";
import ReactDOM from "react-dom/client";

const name = "Autthawigorn";
const currentDate = new Date().toLocaleDateString();
const year = new Date().getFullYear();

function App() {
  return (
    <>
      <h1>Hi {Math.round(Math.random() * 10)}</h1>;<p>My name is {name}</p>
      <p>Today's date is {currentDate}</p>
      <p>Copyright {year}</p>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
