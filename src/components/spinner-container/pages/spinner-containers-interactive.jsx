import * as React from 'react';
import SpinnerContainer, {
  SPINNER_SIZE,
  SPINNER_COLOR,
} from '../SpinnerContainer';
import Button from 'buttons/Button';
import DocsActiveBlock from 'components/DocsActiveBlock';

const SpinnerContainers = () => {
  const settings = [
    {
      name: 'size',
      values: SPINNER_SIZE,
    },
    {
      name: 'loading',
      values: Boolean,
    },
    {
      name: 'color',
      values: SPINNER_COLOR,
    },
    {
      name: 'fullWidth',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor="light">
        <SpinnerContainer>
          <Button type="solid-blue">Ask your question</Button>
        </SpinnerContainer>
      </DocsActiveBlock>
    </div>
  );
};

export default SpinnerContainers;
