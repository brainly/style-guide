import * as React from 'react';
import Rating from './Rating';

export default {
  title: 'Components/Rating',
  parameters: {
    component: Rating,
  },
};

export const Default = () => (
  <Rating rate={2.4} counterText="34 votes" activeText="Rate!" />
);
