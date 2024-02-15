import reactImg from "./assets/components.png";
import JSXimg from "./assets/jsx-ui.png";
import PropsImg from "./assets/config.png";
import StateImg from "./assets/state-mgmt.png";

const reactDescription = ["Fundamental", "crucial", "core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img
        src={require(`./assets/react-core-concepts.png`)}
        alt="Stylized atom"
      />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function Cards(props) {
  return (
    <li>
      <img src={props.img} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <Cards
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
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
