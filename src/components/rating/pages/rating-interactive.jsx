import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Rating from '../Rating';

const Ratings = () => {
  const settings = [
    {
      name: 'active',
      values: Boolean
    },
    {
      name: 'small',
      values: Boolean
    },
    {
      name: 'rate',
      values: Number
    },
    {
      name: 'metricSize',
      values: Number
    },
    {
      name: 'counterText',
      values: String
    },
    {
      name: 'activeText',
      values: String
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Rating rate={3} counterText="34 votes" activeText="Vote!" />
      </DocsActiveBlock>
    </div>
  );
};

export default Ratings;
