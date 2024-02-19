import { TabButton } from "./TabButton.js";
import { EXAMPLES } from "./data.js";
import { useState } from "react";
import { Section } from "./Sections.jsx";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };
  return (
    <Section id="examples">
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
    </Section>
  );
}
