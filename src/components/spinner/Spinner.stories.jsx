import * as React from 'react';
import {StoryVariant} from '../../docs/utils';
import Flex from '../flex/Flex';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
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
        {color === 'white' ? (
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
