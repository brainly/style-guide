import React from 'react';
import Box, {COLOR, PADDING} from '../Box';
import DocsBlock from '../../../docs/DocsBlock';
import ButtonPrimary, {TYPE} from '../../buttons/ButtonPrimary';
import ContentBox from '../../content-box/ContentBox';
import ContentBoxHeader from '../../content-box/ContentBoxHeader';
import ContentBoxActions from '../../content-box/ContentBoxActions';
import HeaderSecondary, {TYPE as HEADER_TYPE} from '../../text/HeaderSecondary';

const Boxs = () =>
  <div>
    <DocsBlock info='Simple'>
      <Box>
        This is a box. (no color - default border on)
      </Box>
    </DocsBlock>

    {Object.values(COLOR).map(
      color => <DocsBlock key={color} info={`color ${color}`}>
        <Box color={color}>{color} (no border by default)</Box>
      </DocsBlock>
    )
    }

    <DocsBlock info='Image' multiContent={[
      <Box imgSrc="https://source.unsplash.com/100x100/?man"/>,
      <Box imgSrc="https://source.unsplash.com/50x100/?man"/>,
      <Box imgSrc="https://source.unsplash.com/100x50/?man"/>
    ]}/>

    <DocsBlock info="Full">
      <Box full={true}>full</Box>
    </DocsBlock>

    <DocsBlock info="Small padding + no min height" multiContent={[
      <Box padding={PADDING.SMALL} noMinHeight={true}>some text</Box>,
      <Box padding={PADDING.SMALL} noMinHeight={true}>more text<br/> more more</Box>
    ]}/>


    <DocsBlock info="Small padding" multiContent={[
      <Box padding={PADDING.SMALL}>some text</Box>,
      <Box padding={PADDING.SMALL}>more text<br/> more more</Box>
    ]}/>

    <DocsBlock info="Large padding" multiContent={[
      <Box padding={PADDING.LARGE}>some text</Box>,
      <Box padding={PADDING.LARGE}>more text<br/> more more</Box>
    ]}/>

    <DocsBlock info="Example of usage">
      <Box>
        <ContentBox>
          <ContentBoxHeader>
            <HeaderSecondary type={HEADER_TYPE.H3}>Ask a question about a school subject</HeaderSecondary>
          </ContentBoxHeader>
          <ContentBoxActions>
            <ButtonPrimary type={TYPE.ALT} wide={true}>
              Ask your question
            </ButtonPrimary>
          </ContentBoxActions>
        </ContentBox>
      </Box>
    </DocsBlock>
  </div>;

export default Boxs;
