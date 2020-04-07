import React from 'react';
import TopLayer from '../TopLayer';
import Button from 'buttons/Button';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, {
  SIZE as SPACING_SIZE,
} from 'content-box/ContentBoxContent';
import Text, {TEXT_WEIGHT} from 'text/Text';
import Headline, {HEADLINE_TYPE} from 'text/Headline';
import List from 'list/List';
import ListItem from 'list/ListItem';
import ListItemIcon from 'list/ListItemIcon';
import Icon, {ICON_COLOR, TYPE as ICON_TYPE} from 'icons/Icon';
import Overlay from 'overlay/Overlay';

const content = (
  <ContentBox>
    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      <Headline type={HEADLINE_TYPE.H2}>Why join Brainly?</Headline>
      <List>
        <ListItem key={1}>
          <ListItemIcon>
            <Icon
              type={ICON_TYPE.PLUS}
              color={ICON_COLOR.GRAY_SECONDARY}
              size={18}
            />
          </ListItemIcon>
          <Text weight={TEXT_WEIGHT.BOLD}>
            ask questions about your assignment
          </Text>
        </ListItem>
        <ListItem key={2}>
          <ListItemIcon>
            <Icon
              type={ICON_TYPE.PLUS}
              color={ICON_COLOR.GRAY_SECONDARY}
              size={18}
            />
          </ListItemIcon>
          <Text weight={TEXT_WEIGHT.BOLD}>get answer with explanation</Text>
        </ListItem>
        <ListItem key={3}>
          <ListItemIcon>
            <Icon
              type={ICON_TYPE.PLUS}
              color={ICON_COLOR.GRAY_SECONDARY}
              size={18}
            />
          </ListItemIcon>
          <Text key={3} weight={TEXT_WEIGHT.BOLD}>
            find similar questions
          </Text>
        </ListItem>
      </List>
    </ContentBoxContent>

    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      <Button type="solid">Join us</Button>
    </ContentBoxContent>
  </ContentBox>
);

const SmallSpacedTopLayer = () => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="../../../style-guide.css" />
    </head>
    <body>
      <Overlay>
        <TopLayer modal smallSpaced>
          {content}
        </TopLayer>
      </Overlay>
      <script src="images/icons.js" />
    </body>
  </html>
);

export default SmallSpacedTopLayer;
