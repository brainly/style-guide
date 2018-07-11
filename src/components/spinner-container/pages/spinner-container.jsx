import React from 'react';
import DocsBlock from 'components/DocsBlock';
import SpinnerContainer from '../SpinnerContainer';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';

const IS_LOADING = true;

const spinnerContainers = () => (
  <div>
    <DocsBlock info="with Button">
      <SpinnerContainer>
        <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>
          Ask your question
        </ButtonPrimary>
      </SpinnerContainer>
      <SpinnerContainer loading >
        <ButtonPrimary disabled={IS_LOADING} buttonType={BUTTON_PRIMARY_TYPE.ALT}>
          Ask your question
        </ButtonPrimary>
      </SpinnerContainer>
    </DocsBlock>
  </div>
);

export default spinnerContainers;
