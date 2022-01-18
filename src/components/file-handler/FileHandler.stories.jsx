import * as React from 'react';
import FileHandler, {COLORS_MAP} from './FileHandler';
import {TYPE} from '../icons/Icon';
import Flex from '../flex/Flex';
import {StoryVariant} from '../../_docs/utils';

export default {
  title: 'Components/FileHandler',
  component: FileHandler,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    textRef: {
      control: {
        disable: true,
      },
    },
    iconType: {
      control: {
        type: 'select',
        options: TYPE,
      },
    },
  },
  args: {
    children: 'text',
  },
};

const src =
  // eslint-disable-next-line max-len
  'https://images.unsplash.com/photo-1558349699-1e1c38c05eeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80';

export const Default = args => <FileHandler {...args} />;

export const Colors = args => (
  <div>
    {Object.values(COLORS_MAP).map(color => (
      <StoryVariant label={`color - ${color}`} key={color}>
        {color === 'white' ? (
          <div className="sg-story-variant-dark-box">
            <FileHandler {...args} color={color} />
          </div>
        ) : (
          <FileHandler {...args} color={color} />
        )}
      </StoryVariant>
    ))}
  </div>
);

export const Icons = args => (
  <Flex wrap>
    {Object.values(TYPE).map(icon => (
      <StoryVariant label={`icon - ${icon}`} width={200} key={icon}>
        <FileHandler {...args} iconType={icon} />
      </StoryVariant>
    ))}
  </Flex>
);

export const WithThumbnail = args => (
  <FileHandler {...args} thumbnailSrc={src} />
);

export const Loading = args => <FileHandler {...args} loading />;
