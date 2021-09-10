import * as React from 'react';
import Breadcrumb from './Breadcrumb';

const elements = ['Comments (9)', 'Report', 'Follow'];
const longElements = [
  'Laboris fugiat anim dolore ipsum amet enim eiusmod',
  'Ea anim proident quis est Lorem dolore',
  'Ullamco dolore officia eiusmod aute id proident eiusmod dolor enim occaecat duis duis.',
];

export default {
  title: 'Components/Breadcrumbs',
  parameters: {
    component: Breadcrumb,
  },
  argTypes: {
    elements: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    elements,
  },
};

export const Default = args => <Breadcrumb {...args} />;

export const Compact = args => (
  <div style={{maxWidth: '400px'}}>
    <Breadcrumb {...args} short />
  </div>
);

Compact.args = {
  elements: longElements,
};

export const InheritedColor = args => (
  <div
    style={{
      color: 'blue',
    }}
  >
    <div>Parent</div>
    <Breadcrumb {...args} adaptive />
  </div>
);

export const FullLines = args => (
  <div style={{maxWidth: '400px'}}>
    <Breadcrumb {...args} inlineItems />
  </div>
);

FullLines.args = {
  elements: longElements,
};
