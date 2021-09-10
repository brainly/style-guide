import * as React from 'react';
import {StoryVariant} from '../../../.storybook/utils';
import Flex from '../flex/Flex';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from './Spinner';

export default {
  title: 'Components/Spinner',
  parameters: {
    component: Spinner,
  },
};

export const Default = args => <Spinner {...args} />;

export const Sizes = () => (
  <div>
    {Object.values(SPINNER_SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <Spinner size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const Colors = () => (
  <Flex>
    {Object.values(SPINNER_COLOR).map(color => (
      <StoryVariant label={color} width={200} key={color}>
        {color === SPINNER_COLOR.WHITE ? (
          <div className="sg-story-variant-dark-box">
            <Spinner color={color} />
          </div>
        ) : (
          <Spinner color={color} />
        )}
      </StoryVariant>
    ))}
  </Flex>
);
