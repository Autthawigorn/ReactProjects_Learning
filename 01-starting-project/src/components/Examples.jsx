import { useState } from "react";

import { EXAMPLES, TOPICS } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import TabButton from "../components/TabButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    // selectedButton holds the key of the EXAMPLES object ("components", "jsx", "props", "state")
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic. </p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3> {EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
      // ButtonsContainer
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === TOPICS.COMPONENTS}
              onClick={() => handleSelect(TOPICS.COMPONENTS)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === TOPICS.JSX}
              onClick={() => handleSelect(TOPICS.JSX)}
            >
              {" "}
              JSX{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === TOPICS.PROPS}
              onClick={() => handleSelect(TOPICS.PROPS)}
            >
              {" "}
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === TOPICS.STATE}
              onClick={() => handleSelect(TOPICS.STATE)}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
