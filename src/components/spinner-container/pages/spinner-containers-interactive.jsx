import React from 'react';
import SpinnerContainer, {SPINNER_SIZE} from '../SpinnerContainer';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import DocsActiveBlock from 'components/DocsActiveBlock';

const SpinnerContainers = () => {
  const settings = [
    {
      name: 'size',
      values: SPINNER_SIZE
    },
    {
      name: 'loading',
      values: Boolean
    },
    {
      name: 'light',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor="light">
        <SpinnerContainer>
          <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>
            Ask your question
          </ButtonPrimary>
        </SpinnerContainer>
      </DocsActiveBlock>
    </div>
  );
};

export default SpinnerContainers;
