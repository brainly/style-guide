import React from 'react';
import Breadcrumb from './Breadcrumb';

const elements = ['Comments (9)', 'Report', 'Follow'];
const longElements = [
  "I'm so long and there is so little space there",
  'The second element is also very talkative',
  'Lorem ipsum has many many words',
];

export default {
  title: 'Components/Breadcrumbs',
  parameters: {
    component: Breadcrumb,
  },
};

export const Default = args => <Breadcrumb {...args} elements={longElements} />;

Default.args = {};

Default.argTypes = {
  short: {control: 'boolean'},
  adaptive: {control: 'boolean'},
  inlineItems: {control: 'boolean'},
  elements: {control: null},
};

export const WithSmallLineHeight = () => (
  <div style={{maxWidth: '400px'}}>
    <Breadcrumb short elements={longElements} />
  </div>
);

export const WithInlineItems = () => (
  <div style={{maxWidth: '400px'}}>
    <Breadcrumb inlineItems elements={longElements} />
  </div>
);

export const Adaptive = () => (
  <div style={{color: '#ff604b'}}>
    <Breadcrumb adaptive elements={elements} />
  </div>
);
