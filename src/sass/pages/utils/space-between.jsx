import React from 'react';
import DocsBlock from 'components/DocsBlock';
import DocsActiveBlock from 'components/DocsActiveBlock';
import CodeBlock from 'components/CodeBlock';

const horizontalSettings = [
  {
    name: 'className',
    values: {
      'sg-space-x-xxs': 'sg-space-x-xxs',
      'sg-space-x-xs': 'sg-space-x-xs',
      'sg-space-x-s': 'sg-space-x-s',
      'sg-space-x-m': 'sg-space-x-m',
      'sg-space-x-l': 'sg-space-x-l',
      'sg-space-x-xl': 'sg-space-x-xl',
      'sg-space-x-xxl': 'sg-space-x-xxl',
      'sg-space-x-xxxl': 'sg-space-x-xxxl',
      'sg-space-x-xxxxl': 'sg-space-x-xxxxl',
    },
  },
];

const verticalSettings = [
  {
    name: 'className',
    values: {
      'sg-space-y-xxs': 'sg-space-y-xxs',
      'sg-space-y-xs': 'sg-space-y-xs',
      'sg-space-y-s': 'sg-space-y-s',
      'sg-space-y-m': 'sg-space-y-m',
      'sg-space-y-l': 'sg-space-y-l',
      'sg-space-y-xl': 'sg-space-y-xl',
      'sg-space-y-xxl': 'sg-space-y-xxl',
      'sg-space-y-xxxl': 'sg-space-y-xxxl',
      'sg-space-y-xxxxl': 'sg-space-y-xxxxl',
    },
  },
];

const pseudoEmptySettings = [
  {
    name: 'className',
    values: {
      'empty:sg-space-y-xxs': 'empty:sg-space-y-xxs',
      'empty:sg-space-y-xs': 'empty:sg-space-y-xs',
      'empty:sg-space-y-s': 'empty:sg-space-y-s',
      'empty:sg-space-y-m': 'empty:sg-space-y-m',
      'empty:sg-space-y-l': 'empty:sg-space-y-l',
      'empty:sg-space-y-xl': 'empty:sg-space-y-xl',
      'empty:sg-space-y-xxl': 'empty:sg-space-y-xxl',
      'empty:sg-space-y-xxxl': 'empty:sg-space-y-xxxl',
      'empty:sg-space-y-xxxxl': 'empty:sg-space-y-xxxxl',
    },
  },
];

const responsiveSettings = [
  {
    name: 'className',
    values: {
      'md:sg-space-x-xxl': 'md:sg-space-x-xl',
      'lg:sg-space-x-xxxl': 'lg:sg-space-x-xl',
    },
  },
];

const SpaceBetween = () => (
  <div>
    <DocsBlock info="General">
      Control the space between child elements.
      <CodeBlock type="css">
        {'.sg-space-{x, y}-{xxs, xs, s, m, l, xl, xxl, xxxl, xxxxl}'}
      </CodeBlock>
    </DocsBlock>
    <DocsBlock info="Horizontal">
      Control the horizontal space between children.
      <DocsActiveBlock topSpace settings={horizontalSettings}>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </DocsActiveBlock>
    </DocsBlock>
    <DocsBlock info="Vertical">
      Control the vertical space between children.
      <DocsActiveBlock topSpace settings={verticalSettings}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </DocsActiveBlock>
    </DocsBlock>
    <DocsBlock info="Ignore empty">
      <p>
        Applying <code>empty</code> variant results in ignoring empty nodes from
        layout modification. The same result you can achieve by using{' '}
        <code>.sg-space-ignore</code> class on particular child elements. In
        below example child 3. is empty and child 4. has{' '}
        <code>.sg-space-ignore</code> class applied.
      </p>
      <DocsActiveBlock topSpace settings={pseudoEmptySettings}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li />
          <li className="sg-space-ignore">4</li>
          <li>5</li>
        </ul>
      </DocsActiveBlock>
    </DocsBlock>
    <DocsBlock info="Responsive">
      Control the space between children depending on screen size. Change
      browser window to see effect of selected classes.
      <DocsActiveBlock topSpace settings={responsiveSettings}>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </DocsActiveBlock>
    </DocsBlock>
  </div>
);

export default SpaceBetween;
