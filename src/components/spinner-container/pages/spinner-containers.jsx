import React from 'react';
import DocsBlock from 'components/DocsBlock';
import SpinnerContainer, {SPINNER_SIZE} from '../SpinnerContainer';
import Button from 'buttons/Button';

import Box, {COLOR} from 'box/Box';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Headline, {HEADLINE_TYPE} from 'text/Headline';
import Textarea from 'form-elements/Textarea';

const IS_LOADING = true;

const SpinnerContainers = () => (
  <div>
    <DocsBlock info="with Primary Button" additionalInfo="(small size)">
      <SpinnerContainer>
        <Button type="primary-blue">Ask your question</Button>
      </SpinnerContainer>
      <SpinnerContainer loading size={SPINNER_SIZE.SMALL}>
        <Button disabled={IS_LOADING} type="primary-blue">
          Ask your question
        </Button>
      </SpinnerContainer>
      <SpinnerContainer loading light size={SPINNER_SIZE.SMALL}>
        <Button disabled={IS_LOADING} type="primary">
          Ask your question
        </Button>
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="with Secondary Button" additionalInfo="(xsmall size)">
      <SpinnerContainer>
        <Button type="primary-blue">Ask your question</Button>
      </SpinnerContainer>
      <SpinnerContainer loading size={SPINNER_SIZE.XSMALL}>
        <Button disabled={IS_LOADING} type="primary-blue">
          Ask your question
        </Button>
      </SpinnerContainer>
      <SpinnerContainer loading light size={SPINNER_SIZE.XSMALL}>
        <Button disabled={IS_LOADING} type="primary">
          Ask your question
        </Button>
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
              <Button type="primary-blue" fullWidth>
                Ask your question
              </Button>
            </ContentBoxActions>
          </ContentBox>
        </Box>
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="full width">
      <SpinnerContainer loading fullWidth>
        <Textarea placeholder="Simple textarea" fullWidth />
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
