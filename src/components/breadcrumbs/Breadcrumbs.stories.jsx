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

export const Default = args => {
  const {elements} = args;

  return <Breadcrumb {...args} elements={elements} />;
};

Default.args = {
  elements,
};

Default.argTypes = {
  elements: {control: {type: 'object'}},
};

export const WithInlineItems = () => (
  <div style={{maxWidth: '400px'}}>
    <Breadcrumb inlineItems elements={longElements} />
  </div>
);
