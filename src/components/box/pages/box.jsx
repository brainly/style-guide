import React from 'react';
import Box, {COLOR, PADDING} from '../Box';
import DocsBlock from 'components/DocsBlock';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, {SIZE as CONTENT_BOX_CONTENT_SPACING_SIZE} from 'content-box/ContentBoxContent';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import HeaderSecondary, {HEADER_TYPE} from 'text/HeaderSecondary';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Text, {WEIGHT as TEXT_WEIGHT, SIZE as TEXT_SIZE} from 'text/Text';
import Avatar from 'avatar/Avatar';

const closeCallback = () => undefined;

const Boxs = () => (
  <div>
    <DocsBlock info="Simple">
      <Box>
        This is a box. (no color - default border on)
      </Box>
    </DocsBlock>

    <DocsBlock info="With shadow">
      <Box shadow>
        This is a box with shadow
      </Box>
    </DocsBlock>

    {Object.values(COLOR).map(color => (
      <DocsBlock key={color} info={`color ${color}`}>
        <Box color={color}>{color} (no border by default)</Box>
      </DocsBlock>
    ))}

    <DocsBlock info="No border radius">
      <Box noBorderRadius>
        This is a box with no border radius
      </Box>
    </DocsBlock>

    <DocsBlock info="With onClose">
      <Box onClose={closeCallback}>
        This is a box with onClose
      </Box>
    </DocsBlock>

    <DocsBlock info="With onClose and whiteCloseIcon">
      <Box onClose={closeCallback} whiteCloseIcon color={COLOR.BLUE}>
        This is a box with onClose and white close Icon
      </Box>
    </DocsBlock>

    <DocsBlock
      info="Image"
      multiContent={[
        <Box key={1} imgSrc="https://source.unsplash.com/100x100/?man" />,
        <Box key={2} imgSrc="https://source.unsplash.com/50x100/?man" />,
        <Box key={3} imgSrc="https://source.unsplash.com/100x50/?man" />
      ]}
    />

    <DocsBlock info="Full">
      <Box full>full</Box>
    </DocsBlock>

    <DocsBlock
      info="No padding"
      multiContent={[
        <Box key={1} padding={PADDING.NO_PADDING}>some text</Box>,
        <Box key={2} padding={PADDING.NO_PADDING}>more text<br /> more more</Box>
      ]}
    />

    <DocsBlock
      info="Small padding + no min height"
      multiContent={[
        <Box key={1} padding={PADDING.SMALL} noMinHeight>some text</Box>,
        <Box key={2} padding={PADDING.SMALL} noMinHeight>more text<br /> more more</Box>
      ]}
    />

    <DocsBlock
      info="Xsmall padding + no min height"
      multiContent={[
        <Box key={1} padding={PADDING.XSMALL} noMinHeight>some text</Box>,
        <Box key={2} padding={PADDING.XSMALL} noMinHeight>more text<br /> more more</Box>
      ]}
    />

    <DocsBlock
      info="Xxsmall padding + no min height"
      multiContent={[
        <Box key={1} padding={PADDING.XXSMALL} noMinHeight>some text</Box>,
        <Box key={2} padding={PADDING.XXSMALL} noMinHeight>more text<br /> more more</Box>
      ]}
    />

    <DocsBlock
      info="Small padding"
      multiContent={[
        <Box key={1} padding={PADDING.SMALL}>some text</Box>,
        <Box key={2} padding={PADDING.SMALL}>more text<br /> more more</Box>
      ]}
    />

    <DocsBlock
      info="Large padding"
      multiContent={[
        <Box key={1} padding={PADDING.LARGE}>some text</Box>,
        <Box key={2} padding={PADDING.LARGE}>more text<br /> more more</Box>
      ]}
    />

    <DocsBlock info="Example of box usage">
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
    </DocsBlock>

    <DocsBlock info="Example of message box usage">
      <Box color={COLOR.BLUE_SECONDARY} full border={false} onClose={closeCallback}>
        <ActionList noWrap toTop>
          <ActionListHole>
            <Avatar spaced />
          </ActionListHole>
          <ActionListHole grow>
            <ContentBox>
              <ContentBoxContent
                spacedBottom={CONTENT_BOX_CONTENT_SPACING_SIZE.XSMALL}
                spacedTop={CONTENT_BOX_CONTENT_SPACING_SIZE.SMALL}
              >
                <Text weight={TEXT_WEIGHT.BOLD} size={TEXT_SIZE.SMALL}>
                  Title for a message with valuable information for a user.
                </Text>
              </ContentBoxContent>
              <ContentBoxContent spacedBottom={CONTENT_BOX_CONTENT_SPACING_SIZE.SMALL}>
                <Text size={TEXT_SIZE.SMALL}>
                  This is valuable information for users in a specific situation. For example:
                we want to let you know that in 24h Brainly will disable some feature.
                You can find more information about this change on our blog.
                </Text>
              </ContentBoxContent>
            </ContentBox>
          </ActionListHole>
        </ActionList>
      </Box>
    </DocsBlock>
  </div>
);

export default Boxs;
