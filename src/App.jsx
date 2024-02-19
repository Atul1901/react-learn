// import reactImg from "./assets/components.png";
// import JSXimg from "./assets/jsx-ui.png";
// import PropsImg from "./assets/config.png";
// import StateImg from "./assets/state-mgmt.png";
import { Header } from "./components/Header.js";
// import { TabButton } from "./components/TabButton.js";
// import { useState } from "react";
// import { EXAMPLES } from "./components/data.js";
import { Cardfeature } from "./components/Cards-feature.jsx";
import { Examples } from "./components/Examples.jsx";

// const reactDescription = ["Fundamental", "crucial", "core"];

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }
// function Header() {
//   return (
//     <header>
//       <img
//         src={require(`./assets/react-core-concepts.png`)}
//         alt="Stylized atom"
//       />
//       <h1>React Essentials</h1>
//       <p>
//         {reactDescription[genRandomInt(2)]} React concepts you will need for
//         almost any app you are going to build!
//       </p>
//     </header>
//   );
// }

// function Cards(props) {
//   return (
//     <li>
//       <img src={props.img} alt={props.title}></img>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function App() {
  // const [selectedTopic, setSelectedTopic] = useState("components");

  // const handleSelect = (selectedButton) => {
  //   setSelectedTopic(selectedButton);
  // };

  // console.log(
  //   "{EXAMPLES[selectedTopic].title} > ",
  //   EXAMPLES[selectedTopic]?.title
  // );

  // console.log("EXAMPLES > ", EXAMPLES);

  // console.log("EXAMPLES[selectedTopic] > ", EXAMPLES[selectedTopic]);

  return (
    <>
      <Header />

      <main>
        <Cardfeature></Cardfeature>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
