import * as React from 'react';
import FileHandler, {FILE_HANDLER_COLORS_SET} from './FileHandler';
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
  'https://m.natemat.pl/2f2a60ad79764b5466234d249d17adc8,800,450,1,0.jpg';

export const Default = args => (
  <FileHandler {...args} src={src} thumbnailSrc={src} />
);

export const Colors = args => (
  <div>
    {Object.values(FILE_HANDLER_COLORS_SET).map(color => (
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

export const Loading = args => <FileHandler {...args} loading />;
