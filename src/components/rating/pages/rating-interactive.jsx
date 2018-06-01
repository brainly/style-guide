import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Rating, {RATING_SIZE} from '../Rating';

const Ratings = () => {
  const settings = [
    {
      name: 'active',
      values: Boolean
    },
    {
      name: 'size',
      values: RATING_SIZE
    },
    {
      name: 'altLabels',
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
    },
    {
      name: 'noLabel',
      value: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Rating rate={2.4} counterText="34 votes" activeText="Rate!" />
      </DocsActiveBlock>
    </div>
  );
};

export default Ratings;
