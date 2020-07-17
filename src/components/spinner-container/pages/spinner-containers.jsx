import React from 'react';
import DocsBlock from 'components/DocsBlock';
import SpinnerContainer, {SPINNER_SIZE} from '../SpinnerContainer';
import Button from 'buttons/Button';

import BoxDeprecated, {COLOR} from 'box/BoxDeprecated';
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
        <Button type="solid-blue">Ask your question</Button>
      </SpinnerContainer>
      <SpinnerContainer loading size={SPINNER_SIZE.SMALL}>
        <Button disabled={IS_LOADING} type="solid-blue">
          Ask your question
        </Button>
      </SpinnerContainer>
      <SpinnerContainer loading light size={SPINNER_SIZE.SMALL}>
        <Button disabled={IS_LOADING} type="solid">
          Ask your question
        </Button>
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="with Secondary Button" additionalInfo="(xsmall size)">
      <SpinnerContainer>
        <Button type="solid-blue">Ask your question</Button>
      </SpinnerContainer>
      <SpinnerContainer loading size={SPINNER_SIZE.XSMALL}>
        <Button disabled={IS_LOADING} type="solid-blue">
          Ask your question
        </Button>
      </SpinnerContainer>
      <SpinnerContainer loading light size={SPINNER_SIZE.XSMALL}>
        <Button disabled={IS_LOADING} type="solid">
          Ask your question
        </Button>
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="with BoxDeprecated">
      <SpinnerContainer loading>
        <BoxDeprecated>
          <ContentBox>
            <ContentBoxHeader>
              <Headline type={HEADLINE_TYPE.H3}>
                Ask a question about a school subject
              </Headline>
            </ContentBoxHeader>
            <ContentBoxActions>
              <Button type="solid-blue" fullWidth>
                Ask your question
              </Button>
            </ContentBoxActions>
          </ContentBox>
        </BoxDeprecated>
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="full width">
      <SpinnerContainer loading fullWidth>
        <Textarea placeholder="Simple textarea" fullWidth />
      </SpinnerContainer>
    </DocsBlock>

    <DocsBlock info="with BoxDeprecated" additionalInfo="(light)">
      <SpinnerContainer loading light>
        <BoxDeprecated color={COLOR.NAVYBLUE_SECONDARY}>
          navyblue-secondary (no border by default)
        </BoxDeprecated>
      </SpinnerContainer>
    </DocsBlock>
  </div>
);

export default SpinnerContainers;
