import React from 'react';
import {StoryVariant} from '../../_docs/utils';
import Box, {PADDING, COLOR} from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    description:
      'Container for grouping elements. It provides padding, background color, border and shadow.',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
    border: {
      description: '(Responsive)',
      // table: {
      //   type: {
      //     summary: 'boolean',
      //   },
      // },
      // control: {
      //   type: 'boolean',
      // },
    },
    padding: {
      control: {
        type: 'select',
        options: PADDING,
      },
    },
    shadow: {
      description: '(Responsive)',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
    noBorderRadius: {
      description: '(Responsive)',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    children: 'Text inside Box',
  },
};

export const Default = args => <Box {...args} />;

export const Colors = args => (
  <div>
    {Object.values(COLOR).map(color => (
      <StoryVariant key={color} label={`color - ${color}`}>
        <Box {...args} color={color} />
      </StoryVariant>
    ))}
  </div>
);

export const Paddings = args => (
  <div>
    {Object.values(PADDING).map(padding => (
      <StoryVariant label={`padding - ${padding}`} key={padding}>
        <Box {...args} color="blue-40" padding={padding} />
      </StoryVariant>
    ))}
  </div>
);

export const Borders = args => {
  return (
    <div>
      {Object.values(COLOR).map(color => (
        <StoryVariant label={`border color - ${color}`} key={color}>
          {color === COLOR.white ? (
            <div className="sg-story-variant-dark-box">
              <Box
                {...args}
                color="blue-40"
                border
                borderColor={COLOR[color]}
              />
            </div>
          ) : (
            <Box {...args} border borderColor={color} />
          )}
        </StoryVariant>
      ))}
    </div>
  );
};

export const Shadow = args => <Box {...args} color="blue-40" shadow />;
