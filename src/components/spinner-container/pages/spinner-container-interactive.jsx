import React from 'react';
import SpinnerContainer from '../SpinnerContainer';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import DocsActiveBlock from 'components/DocsActiveBlock';

const spinnerContainers = () => {
  const settings = [
    {
      name: 'loading',
      values: Boolean
    },
    {
      name: 'gray',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor="none">
        <SpinnerContainer>
          <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>
            Ask your question
          </ButtonPrimary>
        </SpinnerContainer>
      </DocsActiveBlock>
    </div>
  );
};

export default spinnerContainers;
