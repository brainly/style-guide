import * as React from 'react';
import {StoryVariant} from '../../_docs/utils';
import Rating, {RATING_SIZE} from './Rating';
import ComponentTop from 'blocks/ComponentTop';

export default {
  title: 'Components/Rating',
  component: Rating,
  args: {
    rate: 2.4,
    counterText: '34 votes',
    activeText: 'Rate!',
  },
};

export const Default = args => <Rating {...args} />;

export const Sizes = args => (
  <div>
    {Object.values(RATING_SIZE).map(size => {
      return (
        <StoryVariant label={`size - ${size}`} key={size}>
          <Rating {...args} size={size} />
        </StoryVariant>
      );
    })}
  </div>
);

export const Active = args => <Rating {...args} active />;

export const NoLabels = args => <Rating {...args} noLabel counterText="" />;
