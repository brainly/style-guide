import React from 'react';
import DocsBlock from 'components/DocsBlock';
import SpinnerContainer, {SPINNER_SIZE} from '../SpinnerContainer';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';

import Box, {COLOR} from 'box/Box';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Headline, {HEADLINE_TYPE} from 'text/Headline';

const IS_LOADING = true;

const SpinnerContainers = () => (
  <div>
    <DocsBlock info="with Primary Button" additionalInfo="(small size)">
      <SpinnerContainer>
        <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>
          Ask your question
        </ButtonPrimary>
      </SpinnerContainer>
      <SpinnerContainer loading size={SPINNER_SIZE.SMALL}>
        <ButtonPrimary
          disabled={IS_LOADING}
          buttonType={BUTTON_PRIMARY_TYPE.ALT}
        >
          Ask your question
        </ButtonPrimary>
      </SpinnerContainer>
      <SpinnerContainer loading light size={SPINNER_SIZE.SMALL}>
        <ButtonPrimary
          disabled={IS_LOADING}
          buttonType={BUTTON_PRIMARY_TYPE.DARK}
        >
          Ask your question
        </ButtonPrimary>
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="with Secondary Button" additionalInfo="(xsmall size)">
      <SpinnerContainer>
        <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT}>
          Ask your question
        </ButtonSecondary>
      </SpinnerContainer>
      <SpinnerContainer loading size={SPINNER_SIZE.XSMALL}>
        <ButtonSecondary
          disabled={IS_LOADING}
          buttonType={BUTTON_SECONDARY_TYPE.ALT}
        >
          Ask your question
        </ButtonSecondary>
      </SpinnerContainer>
      <SpinnerContainer loading light size={SPINNER_SIZE.XSMALL}>
        <ButtonSecondary
          disabled={IS_LOADING}
          buttonType={BUTTON_SECONDARY_TYPE.DARK}
        >
          Ask your question
        </ButtonSecondary>
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="with Box">
      <SpinnerContainer loading>
        <Box>
          <ContentBox>
            <ContentBoxHeader>
              <Headline type={HEADLINE_TYPE.H3}>
                Ask a question about a school subject
              </Headline>
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

    <DocsBlock info="with Box" additionalInfo="(light)">
      <SpinnerContainer loading light>
        <Box color={COLOR.NAVYBLUE_SECONDARY}>
          navyblue-secondary (no border by default)
        </Box>
      </SpinnerContainer>
    </DocsBlock>
  </div>
);

export default SpinnerContainers;
