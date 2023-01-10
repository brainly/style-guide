import * as React from 'react';
import CodeBlock from 'components/CodeBlock';
import DocsBlock from 'components/DocsBlock';
import DocsActiveBlock from 'components/DocsActiveBlock';

const pointerSettings = [
  {
    name: 'className',
    values: {
      'sg-cursor-pointer': 'sg-cursor-pointer',
    },
  },
];

const Cursor = () => (
  <div>
    <DocsBlock info="Pointer">
      Use pointer cursor to show that element can be clicked
      <CodeBlock type="css">.sg-cursor-pointer</CodeBlock>
      <DocsActiveBlock topSpace settings={pointerSettings}>
        <div>Hover over me</div>
      </DocsActiveBlock>
    </DocsBlock>
  </div>
);

export default Cursor;
