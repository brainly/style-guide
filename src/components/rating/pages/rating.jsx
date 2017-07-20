import React from 'react';
import DocsBlock from 'DocsBlock';
import Rating from '../Rating';

const ratings = () => <div>
  <DocsBlock info="Default">
    <Rating rate={3} counter={34}/>
  </DocsBlock>

  <DocsBlock info="Active">
    <Rating rate={3} active={true} counter={34}/>
  </DocsBlock>

  <DocsBlock info="Small">
    <Rating rate={3} small={true} counter={34}/>
  </DocsBlock>

  <DocsBlock info="Small Active">
    <Rating rate={3} small={true} active={true} counter={34}/>
  </DocsBlock>

</div>;

export default ratings;
