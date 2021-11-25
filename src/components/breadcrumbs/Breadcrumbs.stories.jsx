import * as React from 'react';
import Breadcrumb from './Breadcrumb';
import hex from '../colors/hex';

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

export const Short = args => (
  <div style={{maxWidth: '400px'}}>
    <Breadcrumb {...args} short />
  </div>
);

Short.args = {
  elements: longElements,
};

export const Adaptive = args => (
  <div
    style={{
      color: hex['indigo-40'],
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
