import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomIndexOf(array) {
  return Math.floor(Math.random() * array.length);
}

export default function Header() {
  const randomWord = reactDescriptions[genRandomIndexOf(reactDescriptions)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}