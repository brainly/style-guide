import React from 'react';
import BoxDeprecated, {COLOR, PADDING} from '../BoxDeprecated';
import Button from 'buttons/Button';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Headline, {HEADLINE_TYPE} from 'text/Headline';
import queryString from 'query-string';

import DocsActiveBlock from 'components/DocsActiveBlock';

const urlParams =
  location.hash === '#boxes' ? queryString.parse(location.search) : {};

const Boxes = () => {
  const settings = [
    {
      name: 'color',
      values: COLOR,
    },
    {
      name: 'border',
      values: Boolean,
    },
    {
      name: 'shadow',
      values: Boolean,
    },
    {
      name: 'full',
      values: Boolean,
    },
    {
      name: 'noMinHeight',
      values: Boolean,
    },
    {
      name: 'padding',
      values: PADDING,
    },
    {
      name: 'imgSrc',
      values: String,
    },
    {
      name: 'noBorderRadius',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <BoxDeprecated {...urlParams}>This is a box.</BoxDeprecated>
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
        <BoxDeprecated
          imgSrc="https://source.unsplash.com/144x144/?flower"
          {...urlParams}
        />
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
        <BoxDeprecated {...urlParams}>
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
      </DocsActiveBlock>
    </div>
  );
};

export default Boxes;
