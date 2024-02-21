import { CORE_CONCEPTS } from "./data.js";
import { Cards } from "./Cards.js";
export function Cardfeature() {
  return (
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
  );
}
