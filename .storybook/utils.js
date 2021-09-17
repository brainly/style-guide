import * as React from 'react';
import Text from '../src/components/text/Text';

export const StoryVariantBorderBox = ({children, height = 'auto'}) => (
  <div>
    <Text size="xsmall">parent container</Text>
    <div className="sg-story-variant-border-box" style={{height}}>
      {children}
    </div>
  </div>
);

export const StoryVariant = ({
  children,
  height = 'auto',
  width = 'auto',
  label,
}) => (
  <div className="sg-story-variant" style={{height, width}}>
    <div className="sg-story-variant__name">{label}</div>
    {children}
  </div>
);
