import React from 'react';
import DocsBlock from 'components/DocsBlock';
import SpinnerContainer from '../SpinnerContainer';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';

import Box from 'box/Box';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import HeaderSecondary, {HEADER_TYPE} from 'text/HeaderSecondary';

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

    <DocsBlock info="with Button (Gray)">
      <SpinnerContainer>
        <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>
          Ask your question
        </ButtonPrimary>
      </SpinnerContainer>
      <SpinnerContainer loading gray >
        <ButtonPrimary disabled={IS_LOADING} buttonType={BUTTON_PRIMARY_TYPE.ALT}>
          Ask your question
        </ButtonPrimary>
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="with Box (Gray)">
      <SpinnerContainer loading gray >
        <Box>
          <ContentBox>
            <ContentBoxHeader>
              <HeaderSecondary type={HEADER_TYPE.H3}>Ask a question about a school subject</HeaderSecondary>
            </ContentBoxHeader>
            <ContentBoxActions>
              <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT} wide>
                Ask your question
              </ButtonPrimary>
            </ContentBoxActions>
          </ContentBox>
        </Box>
      </SpinnerContainer>
    </DocsBlock>
  </div>
);

export default spinnerContainers;
