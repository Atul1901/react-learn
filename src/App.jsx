// import reactImg from "./assets/components.png";
// import JSXimg from "./assets/jsx-ui.png";
// import PropsImg from "./assets/config.png";
// import StateImg from "./assets/state-mgmt.png";
import { Header } from "./components/Header.js";
import { Cards } from "./components/Cards.js";
import { TabButton } from "./components/TabButton.js";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./components/data.js";

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
  const [selectedTopic, setSelectedTopic] = useState("components");

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  console.log("selectedTopic >> ", selectedTopic);

  console.log(
    "{EXAMPLES[selectedTopic].title} > ",
    EXAMPLES[selectedTopic].title
  );

  console.log("EXAMPLES > ", EXAMPLES);

  console.log("EXAMPLES[selectedTopic] > ", EXAMPLES[selectedTopic]);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {/* <Cards
              title="Components"
              description="The core UI building block"
              img={reactImg}
            />
            <Cards
              title="JSX"
              description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
              img={JSXimg}
            />
            <Cards
              title="props"
              description="Make components configurable (and therefore reusable) by passing input data to them."
              img={PropsImg}
            />
            <Cards
              title="State"
              description="React-managed data which, when changed, causes the component to re-render & the UI to update."
              img={StateImg}
            /> */}
            {CORE_CONCEPTS.map((CardItem, index) => (
              <Cards key={index} {...CardItem}></Cards>
            ))}

            {/* <Cards pro {CORE_CONCEPTS[0]}></Cards> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic ? (
            <p>please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic]?.title}</h3>
              <p>{EXAMPLES[selectedTopic]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic]?.code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
