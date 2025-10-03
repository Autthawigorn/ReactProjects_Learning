import { useState } from "react";
import { EXAMPLES, TOPICS } from "../data.js";
import TabButton from "../components/TabButton.jsx";

export default function Examples() {
 const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    // selectedButton holds the key of the EXAMPLES object ("components", "jsx", "props", "state")
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {/* <TabButton label = "Dummy"></TabButton> */}
        <TabButton
          isSelected={selectedTopic === TOPICS.COMPONENTS}
          onSelect={() => handleSelect(TOPICS.COMPONENTS)}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === TOPICS.JSX}
          onSelect={() => handleSelect(TOPICS.JSX)}
        >
          {" "}
          JSX{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === TOPICS.PROPS}
          onSelect={() => handleSelect(TOPICS.PROPS)}
        >
          {" "}
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === TOPICS.STATE}
          onSelect={() => handleSelect(TOPICS.STATE)}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
