const reactDescription = ["Fundamental", "crucial", "core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  return (
    <header>
      <img
        src={require(`../assets/react-core-concepts.png`)}
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
