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
      name: 'counter',
      values: Number
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Rating rate={3} counter={34}/>
    </DocsActiveBlock>
  </div>;
};


export default Ratings;
