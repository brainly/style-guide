import * as React from 'react';
import SpinnerContainer, {
  SPINNER_COLOR,
  SPINNER_SIZE,
} from './SpinnerContainer';
import Box from '../box/Box';
import {StoryVariant, StoryVariantBorderBox} from '../../_docs/utils';

export default {
  title: 'Components/SpinnerContainer',
  parameters: {
    component: SpinnerContainer,
  },
  args: {
    children: (
      <Box color="mint-secondary-light">
        Any component could be wrapped into spinner container.
      </Box>
    ),
  },
};

export const Default = args => <SpinnerContainer {...args} />;

export const LoadingStates = args => (
  <StoryVariant label="loading">
    <SpinnerContainer {...args} loading />
  </StoryVariant>
);

export const Colors = args => (
  <div>
    {Object.values(SPINNER_COLOR).map(color => (
      <StoryVariant label={`color: ${color}`} key={color}>
        <SpinnerContainer {...args} loading color={SPINNER_COLOR[color]} />
      </StoryVariant>
    ))}
  </div>
);

export const FullWidth = args => (
  <StoryVariantBorderBox>
    <SpinnerContainer {...args} loading fullWidth>
      <Box color="mint-secondary-light">Full width</Box>
    </SpinnerContainer>
  </StoryVariantBorderBox>
);

export const SpinnerSizes = args => (
  <div>
    {Object.values(SPINNER_SIZE).map(size => (
      <StoryVariant label={`size: ${size}`} key={size}>
        <SpinnerContainer {...args} loading size={size} />
      </StoryVariant>
    ))}
  </div>
);
