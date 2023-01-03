import * as React from "react";
import CodeBlock from "components/CodeBlock";
import DocsBlock from "components/DocsBlock";
import DocsActiveBlock from "components/DocsActiveBlock";
const hiddenSettings = [
  {
    name: "className",
    values: {
      "sg-visually-hidden": "sg-visually-hidden",
    },
  },
];

const VisuallyHidden = () => (
  <div>
    <DocsBlock info="Screen readers only">
      Use to hide element visually but leave it accessible
      <CodeBlock type="css">.sg-visually-hidden</CodeBlock>
      <DocsActiveBlock topSpace settings={hiddenSettings}>
        <div>I am visible</div>
      </DocsActiveBlock>
    </DocsBlock>
  </div>
);

export default VisuallyHidden;