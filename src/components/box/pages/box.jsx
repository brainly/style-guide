import React from 'react';
import Box, {COLOR, PADDING} from '../Box';
import DocsBlock from '../../../docs/DocsBlock';
import ButtonPrimary, {types as buttonTypes} from '../../buttons/ButtonPrimary';

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
        <div className="sg-content-box">
          <div className="sg-content-box__header">
            <h3 className="sg-header-secondary">Ask a question about a school subject</h3>
          </div>
          <div className="sg-content-box__actions">
            <ButtonPrimary type={buttonTypes.alt} wide={true}>
              Ask your question
            </ButtonPrimary>
          </div>
        </div>
      </Box>
    </DocsBlock>
  </div>;


export default Boxs;
