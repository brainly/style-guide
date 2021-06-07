import * as React from 'react';
import SpinnerContainer from './SpinnerContainer';
import Box from '../box/Box';

export default {
  title: 'Components/SpinnerContainer',
  parameters: {
    component: SpinnerContainer,
  },
};

export const Default = args => (
  <SpinnerContainer {...args}>
    <Box color="mint-secondary-light">
      Any component could be wrapped into spinner container.
    </Box>
  </SpinnerContainer>
);
