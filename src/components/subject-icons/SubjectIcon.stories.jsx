import * as React from 'react';
import SubjectIcon, {TYPE, ICON_COLOR, SIZE} from './SubjectIcon';
import hex from '../colors/hex';
import Flex from '../flex/Flex';
import {StoryVariant} from '../../_docs/utils';
import A11yDocs from './SubjectIcon.a11y.md';

export default {
  title: 'Components/SubjectIcon',
  component: SubjectIcon,
  argTypes: {
    monoColor: {
      control: {
        type: 'select',
        options: ICON_COLOR,
      },
    },
  },
  args: {
    type: TYPE.ACCOUNTANCY,
  },
  parameters: {
    a11yDocs: A11yDocs,
  },
};

export const Default = args => <SubjectIcon {...args} />;

export const Types = args => (
  <Flex wrap>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} width={200} key={type}>
        <SubjectIcon {...args} type={type} />
      </StoryVariant>
    ))}
  </Flex>
);

export const Sizes = args => (
  <div>
    {Object.values(SIZE).map(size => (
      <StoryVariant label={`size - ${size}`} key={size}>
        <SubjectIcon {...args} size={size} />
      </StoryVariant>
    ))}
  </div>
);

export const MonoColor = args => (
  <div>
    <Flex wrap>
      {Object.values(ICON_COLOR).map(color => (
        <StoryVariant
          width={200}
          label={`color - ${color}`}
          style={{
            width: '200px',
            background:
              color === ICON_COLOR['icon-white']
                ? hex['gray-50']
                : 'transparent',
          }}
          key={color}
        >
          {color === ICON_COLOR['icon-white'] ? (
            <div className="sg-story-variant-dark-box">
              <SubjectIcon {...args} monoColor={color} />
            </div>
          ) : (
            <SubjectIcon {...args} monoColor={color} />
          )}
        </StoryVariant>
      ))}
    </Flex>
    <Flex wrap>
      {Object.values(TYPE).map(type => (
        <StoryVariant label={type} width={200} key={type}>
          <SubjectIcon
            {...args}
            monoColor={ICON_COLOR['icon-blue-50']}
            type={type}
          />
        </StoryVariant>
      ))}
    </Flex>
  </div>
);
