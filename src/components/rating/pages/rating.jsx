import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Rating from '../Rating';

const ratings = () => (
  <div>

    <DocsBlock info="Default">
      <Rating rate={3} counter={34} />
    </DocsBlock>

    <DocsBlock info="Active">
      <Rating rate={3} active counter={34} />
    </DocsBlock>

    <DocsBlock info="Small">
      <Rating rate={3} small counter={34} />
    </DocsBlock>

    <DocsBlock info="Small Active">
      <Rating rate={3} small active counter={34} />
    </DocsBlock>

  </div>
);

export default ratings;
