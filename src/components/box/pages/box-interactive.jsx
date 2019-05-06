import React from 'react';
import Box, {COLOR, PADDING} from '../Box';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Headline, {HEADLINE_TYPE} from 'text/Headline';
import queryString from 'query-string';

import DocsActiveBlock from 'components/DocsActiveBlock';

const urlParams = queryString.parse(location.search);

const Boxes = () => {
  const settings = [
    {
      name: 'color',
      values: COLOR
    },
    {
      name: 'border',
      values: Boolean
    },
    {
      name: 'shadow',
      values: Boolean
    },
    {
      name: 'full',
      values: Boolean
    },
    {
      name: 'noMinHeight',
      values: Boolean
    },
    {
      name: 'padding',
      values: PADDING
    },
    {
      name: 'imgSrc',
      values: String
    },
    {
      name: 'noBorderRadius',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Box {...urlParams}>
          This is a box.
        </Box>
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
              <Headline type={HEADLINE_TYPE.H3}>Ask a question about a school subject</Headline>
            </ContentBoxHeader>
            <ContentBoxActions>
              <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT} wide>
                Ask your question
              </ButtonPrimary>
            </ContentBoxActions>
          </ContentBox>
        </Box>
      </DocsActiveBlock>
    </div>
  );
};

export default Boxes;
