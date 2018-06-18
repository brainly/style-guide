import React from 'react';
import Box, {COLOR, PADDING} from '../Box';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import HeaderSecondary, {HEADER_TYPE} from 'text/HeaderSecondary';

import DocsActiveBlock from 'components/DocsActiveBlock';

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
      name: 'message',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Box>
          This is a box.
        </Box>
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
        <Box imgSrc="https://source.unsplash.com/144x144/?flower" />
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
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
      </DocsActiveBlock>
    </div>
  );
};

export default Boxes;
