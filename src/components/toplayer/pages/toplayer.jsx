import * as React from 'react';
import TopLayer, {SIZE} from '../TopLayer';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, {
  SIZE as SPACING_SIZE,
} from 'content-box/ContentBoxContent';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Button from 'buttons/Button';
import Text, {TEXT_WEIGHT} from 'text/Text';
import Headline, {HEADLINE_TYPE} from 'text/Headline';
import List from 'list/List';
import ListItem from 'list/ListItem';
import ListItemIcon from 'list/ListItemIcon';
import Icon, {ICON_COLOR, TYPE as ICON_TYPE} from 'icons/Icon';

const closeCallback = () => undefined;

const content = (
  <ContentBox>
    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      heading
    </ContentBoxContent>

    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      content
    </ContentBoxContent>

    <ContentBoxActions>actions</ContentBoxActions>
  </ContentBox>
);

const TopLayers = () => (
  <div>
    <DocsBlock info="Standard">
      <TopLayer>{content}</TopLayer>
    </DocsBlock>

    <DocsBlock info="Lead">
      <TopLayer lead>{content}</TopLayer>
    </DocsBlock>

    <DocsBlock info="Small">
      <TopLayer size={SIZE.SMALL}>{content}</TopLayer>
    </DocsBlock>

    <DocsBlock info="Medium">
      <TopLayer size={SIZE.MEDIUM}>{content}</TopLayer>
    </DocsBlock>
    <DocsBlock info="Large">
      <TopLayer size={SIZE.LARGE}>{content}</TopLayer>
    </DocsBlock>

    <DocsBlock info="fill">
      <div style={{width: '200px', height: '200px', position: 'relative'}}>
        <TopLayer fill>{content}</TopLayer>
      </div>
    </DocsBlock>

    <DocsBlock info="Example usage">
      <TopLayer size={SIZE.MEDIUM} lead withBugbox onClose={closeCallback}>
        <ContentBox>
          <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
            <Headline type={HEADLINE_TYPE.H2}>Why join Brainly?</Headline>
            <List>
              <ListItem key={1}>
                <ListItemIcon>
                  <Icon
                    type={ICON_TYPE.PLUS}
                    color={ICON_COLOR['icon-gray-50']}
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
                    color={ICON_COLOR['icon-gray-50']}
                    size={18}
                  />
                </ListItemIcon>
                <Text weight={TEXT_WEIGHT.BOLD}>
                  get answer with explanation
                </Text>
              </ListItem>
              <ListItem key={3}>
                <ListItemIcon>
                  <Icon
                    type={ICON_TYPE.PLUS}
                    color={ICON_COLOR['icon-gray-50']}
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
      </TopLayer>
    </DocsBlock>

    <DocsBlock info="Example usage (on small screen">
      <iframe
        height="568"
        width="320"
        src="components/toplayer/notlogged_toplayer.html"
      />
    </DocsBlock>

    <DocsBlock info="Example usage (small spaced on small screen)">
      <iframe
        height="568"
        width="320"
        src="components/toplayer/small_spaced_toplayer.html"
      />
    </DocsBlock>

    <DocsBlock info="Example usage (modal)">
      <iframe
        height="300"
        width="800"
        src="components/toplayer/default_toplayer.html"
      />
    </DocsBlock>

    <DocsBlock info="Example usage (splash screen)">
      <iframe
        height="300"
        width="800"
        src="components/toplayer/splash_screen_toplayer.html"
      />
    </DocsBlock>
  </div>
);

export default TopLayers;
