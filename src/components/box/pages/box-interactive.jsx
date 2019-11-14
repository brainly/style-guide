import React from 'react';
import Box, {COLOR, PADDING} from '../Box';
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
        <Box {...urlParams}>This is a box.</Box>
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
        <Box
          imgSrc="https://source.unsplash.com/144x144/?flower"
          {...urlParams}
        />
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
        <Box {...urlParams}>
          <ContentBox>
            <ContentBoxHeader>
              <Headline type={HEADLINE_TYPE.H3}>
                Ask a question about a school subject
              </Headline>
            </ContentBoxHeader>
            <ContentBoxActions>
              <Button type="primary-blue" wide>
                Ask your question
              </Button>
            </ContentBoxActions>
          </ContentBox>
        </Box>
      </DocsActiveBlock>
    </div>
  );
};

export default Boxes;
