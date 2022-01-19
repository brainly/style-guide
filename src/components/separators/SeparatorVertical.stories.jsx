import * as React from 'react';
import SeparatorVertical, {SIZE, COLORS_MAP} from './SeparatorVertical';
import Flex from '../flex/Flex';
import {StoryVariant, StoryVariantBorderBox} from '../../_docs/utils';

export default {
  title: 'Components/separators/SeparatorVertical',
  component: SeparatorVertical,
};

export const Default = args => (
  <div>
    left
    <SeparatorVertical {...args} />
    right
  </div>
);

export const Sizes = args => {
  return (
    <div>
      {Object.values(SIZE).map(size => (
        <StoryVariant label={`size - ${size}`} key={size}>
          {size === SIZE.FULL ? (
            <StoryVariantBorderBox height={200}>
              <Flex alignItems="center" fullHeight>
                left
                <SeparatorVertical {...args} size={size} />
                right
              </Flex>
            </StoryVariantBorderBox>
          ) : (
            <Flex alignItems="center" fullHeight>
              left
              <SeparatorVertical {...args} size={size} />
              right
            </Flex>
          )}
        </StoryVariant>
      ))}
    </div>
  );
};

export const Colors = args => (
  <div>
    {Object.values(COLORS_MAP).map(color => (
      <StoryVariant label={`color - ${color}`} key={color}>
        {color === 'white' ? (
          <div className="sg-story-variant-dark-box">
            above
            <SeparatorVertical {...args} color={color} />
            below
          </div>
        ) : (
          <div>
            above
            <SeparatorVertical {...args} color={color} />
            below
          </div>
        )}
      </StoryVariant>
    ))}
  </div>
);
