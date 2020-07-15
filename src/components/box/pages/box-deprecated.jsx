import React from 'react';
import BoxDeprecated, {
  COLOR,
  PADDING,
  CLOSE_ICON_COLOR,
} from '../BoxDeprecated';
import DocsBlock from 'components/DocsBlock';
import Button from 'buttons/Button';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, {
  SIZE as CONTENT_BOX_CONTENT_SPACING_SIZE,
} from 'content-box/ContentBoxContent';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Headline, {HEADLINE_TYPE} from 'text/Headline';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Text, {TEXT_WEIGHT, TEXT_SIZE} from 'text/Text';

import Avatar from 'avatar/Avatar';

const closeCallback = () => undefined;

const Boxs = () => (
  <div>
    <DocsBlock info="Simple">
      <BoxDeprecated>
        This is a box. (no color - default border on)
      </BoxDeprecated>
    </DocsBlock>

    <DocsBlock info="With shadow">
      <BoxDeprecated shadow>This is a box with shadow</BoxDeprecated>
    </DocsBlock>

    {Object.values(COLOR).map(color => (
      <DocsBlock key={color} info={`color ${color}`}>
        <BoxDeprecated color={color}>
          {color} (no border by default)
        </BoxDeprecated>
      </DocsBlock>
    ))}

    <DocsBlock info="No border radius">
      <BoxDeprecated noBorderRadius>
        This is a box with no border radius
      </BoxDeprecated>
    </DocsBlock>

    <DocsBlock info="With onClose">
      <BoxDeprecated onClose={closeCallback}>
        This is a box with onClose
      </BoxDeprecated>
    </DocsBlock>

    <DocsBlock info="With onClose and closeIconColor">
      <BoxDeprecated
        onClose={closeCallback}
        closeIconColor={CLOSE_ICON_COLOR.LIGHT}
        color={COLOR.BLUE}
      >
        This is a box with onClose and light close Icon
      </BoxDeprecated>
    </DocsBlock>

    <DocsBlock
      info="Image"
      multiContent={[
        <BoxDeprecated
          key={1}
          imgSrc="https://source.unsplash.com/100x100/?man"
        />,
        <BoxDeprecated
          key={2}
          imgSrc="https://source.unsplash.com/50x100/?man"
        />,
        <BoxDeprecated
          key={3}
          imgSrc="https://source.unsplash.com/100x50/?man"
        />,
      ]}
    />

    <DocsBlock info="Full">
      <BoxDeprecated full>full</BoxDeprecated>
    </DocsBlock>

    <DocsBlock
      info="No padding"
      multiContent={[
        <BoxDeprecated key={1} padding={PADDING.NO_PADDING}>
          some text
        </BoxDeprecated>,
        <BoxDeprecated key={2} padding={PADDING.NO_PADDING}>
          more text
          <br /> more more
        </BoxDeprecated>,
      ]}
    />

    <DocsBlock
      info="Small padding + no min height"
      multiContent={[
        <BoxDeprecated key={1} padding={PADDING.SMALL} noMinHeight>
          some text
        </BoxDeprecated>,
        <BoxDeprecated key={2} padding={PADDING.SMALL} noMinHeight>
          more text
          <br /> more more
        </BoxDeprecated>,
      ]}
    />

    <DocsBlock
      info="Xsmall padding + no min height"
      multiContent={[
        <BoxDeprecated key={1} padding={PADDING.XSMALL} noMinHeight>
          some text
        </BoxDeprecated>,
        <BoxDeprecated key={2} padding={PADDING.XSMALL} noMinHeight>
          more text
          <br /> more more
        </BoxDeprecated>,
      ]}
    />

    <DocsBlock
      info="Xxsmall padding + no min height"
      multiContent={[
        <BoxDeprecated key={1} padding={PADDING.XXSMALL} noMinHeight>
          some text
        </BoxDeprecated>,
        <BoxDeprecated key={2} padding={PADDING.XXSMALL} noMinHeight>
          more text
          <br /> more more
        </BoxDeprecated>,
      ]}
    />

    <DocsBlock
      info="Small padding"
      multiContent={[
        <BoxDeprecated key={1} padding={PADDING.SMALL}>
          some text
        </BoxDeprecated>,
        <BoxDeprecated key={2} padding={PADDING.SMALL}>
          more text
          <br /> more more
        </BoxDeprecated>,
      ]}
    />

    <DocsBlock
      info="Large padding"
      multiContent={[
        <BoxDeprecated key={1} padding={PADDING.LARGE}>
          some text
        </BoxDeprecated>,
        <BoxDeprecated key={2} padding={PADDING.LARGE}>
          more text
          <br /> more more
        </BoxDeprecated>,
      ]}
    />

    <DocsBlock info="Example of box usage">
      <BoxDeprecated onClose={closeCallback}>
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
    </DocsBlock>

    <DocsBlock info="Example of message box usage">
      <BoxDeprecated
        color={COLOR.BLUE_SECONDARY}
        full
        border={false}
        onClose={closeCallback}
      >
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
              <ContentBoxContent
                spacedBottom={CONTENT_BOX_CONTENT_SPACING_SIZE.SMALL}
              >
                <Text size={TEXT_SIZE.SMALL}>
                  This is valuable information for users in a specific
                  situation. For example: we want to let you know that in 24h
                  Brainly will disable some feature. You can find more
                  information about this change on our blog.
                </Text>
              </ContentBoxContent>
            </ContentBox>
          </ActionListHole>
        </ActionList>
      </BoxDeprecated>
    </DocsBlock>
  </div>
);

export default Boxs;
