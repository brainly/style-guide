// @ts-nocheck
import * as React from 'react';
import CodeBlock from 'components/CodeBlock';
import DocsBlock from 'components/DocsBlock';

const Animations = () => (
  <div>
    <DocsBlock info="Fade-in">
      Use fade-in effect in 2 variants: fast and slow
      <CodeBlock type="css">.sg-animation-fade-in-fast</CodeBlock>
      <CodeBlock type="css">.sg-animation-fade-in-slow</CodeBlock>
    </DocsBlock>
  </div>
);

export default Animations;
