import React from 'react';
import TopLayer, {SIZE} from '../TopLayer';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, {SIZE as SPACING_SIZE} from 'content-box/ContentBoxContent';
import ContentBoxActions from 'content-box/ContentBoxActions';
import ButtonPrimary, {TYPE as BUTTON_TYPE} from 'buttons/ButtonPrimary';
import Text, {WEIGHT} from 'text/Text';
import HeaderSecondary, {TYPE as HEADER_TYPE} from 'text/HeaderSecondary';
import List, {ICON_TYPE, ICON_COLOR} from 'list/List';

const content =
  <ContentBox>
    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      heading
    </ContentBoxContent>

    <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
      content
    </ContentBoxContent>

    <ContentBoxActions>
      actions
    </ContentBoxActions>
  </ContentBox>;

const TopLayers = () =>
  <div>
    <DocsBlock info="Standard">
      <TopLayer>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info="Lead">
      <TopLayer lead>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info="Small">
      <TopLayer size={SIZE.SMALL}>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info="Medium">
      <TopLayer size={SIZE.MEDIUM}>
        {content}
      </TopLayer>
    </DocsBlock>
    <DocsBlock info="Large">
      <TopLayer size={SIZE.LARGE}>
        {content}
      </TopLayer>
    </DocsBlock>

    <DocsBlock info="fill">
      <div style={{width: '200px', height: '200px', position: 'relative'}}>
        <TopLayer fill>
          {content}
        </TopLayer>
      </div>
    </DocsBlock>

    <DocsBlock info="Example usage">
      <TopLayer size={SIZE.MEDIUM} lead withBugbox>
        <ContentBox>
          <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
            <HeaderSecondary type={HEADER_TYPE.H2}>
              Why join Brainly?
            </HeaderSecondary>
            <List iconType={ICON_TYPE.PLUS} iconColor={ICON_COLOR.GRAY_SECONDARY} items={[
              <Text key={1} weight={WEIGHT.BOLD}>ask questions about your assignment</Text>,
              <Text key={2} weight={WEIGHT.BOLD}>get answer with explanation</Text>,
              <Text key={3} weight={WEIGHT.BOLD}>find similar questions</Text>
            ]} />
          </ContentBoxContent>
          <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
            <ButtonPrimary type={BUTTON_TYPE.ALT}>Join us</ButtonPrimary>
          </ContentBoxContent>
        </ContentBox>
      </TopLayer>
    </DocsBlock>


    <DocsBlock info="Example usage (on small screen">
      <iframe height="568" width="320" src="components/toplayer/notlogged_toplayer.html"></iframe>
    </DocsBlock>

    <DocsBlock info="Example usage (small spaced on small screen)">
      <iframe height="568" width="320" src="components/toplayer/small_spaced_toplayer.html"></iframe>
    </DocsBlock>

    <DocsBlock info="Example usage (modal)">
      <iframe height="300" width="800" src="components/toplayer/default_toplayer.html"></iframe>
    </DocsBlock>

    <DocsBlock info="Example usage (splash screen)">
      <iframe height="300" width="800" src="components/toplayer/splash_screen_toplayer.html"></iframe>
    </DocsBlock>

  </div>;

export default TopLayers;
