import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Rating, {RATING_SIZE} from '../Rating';

const ratings = () => (
  <div>
    <DocsBlock info="Default (XS)">
      <Rating rate={3} counter={34} />
    </DocsBlock>

    <DocsBlock info="Active">
      <Rating rate={3} active counter={34} />
    </DocsBlock>

    <DocsBlock info="Active with counters">
      <Rating
        rate={3}
        active
        counter={34}
        counterText="Hover to rate"
        activeText="Rate me!"
      />
    </DocsBlock>

    <DocsBlock info="Active without label">
      <Rating rate={3} active counter={34} noLabel />
    </DocsBlock>

    <DocsBlock info="S">
      <Rating rate={3} size={RATING_SIZE.S} counter={34} />
    </DocsBlock>

    <DocsBlock info="S Active with alt labels">
      <Rating
        rate={3}
        size={RATING_SIZE.S}
        altLabels
        active
        counter={34}
        counterText="Hover to rate"
        activeText="Rate me!"
      />
    </DocsBlock>
  </div>
);

export default ratings;
