import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import TopLayer, {SIZE} from '../TopLayer';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxContent, {SIZE as SPACING_SIZE} from 'content-box/ContentBoxContent';
import ContentBoxActions from 'content-box/ContentBoxActions';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import Text, {WEIGHT} from 'text/Text';
import TextBit, {COLOR as TEXT_BIT_COLOR} from 'text/TextBit';
import List, {ICON_TYPE, ICON_COLOR} from 'list/List';
import HeaderSecondary, {HEADER_TYPE} from 'text/HeaderSecondary';

const Toplayers = () => {
  const settings = [
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'lead',
      values: Boolean
    },
    {
      name: 'fill',
      values: Boolean
    },
    {
      name: 'modal',
      values: Boolean
    },
    {
      name: 'withBugbox',
      values: Boolean
    },
    {
      name: 'smallSpaced',
      values: Boolean
    },
    {
      name: 'splashScreen',
      values: Boolean
    },
    {
      name: 'limitedWidth',
      values: Boolean
    },
    {
      name: 'row',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <TopLayer>
          <ContentBox>
            <ContentBoxHeader spacedBottom={SPACING_SIZE.LARGE}>
              heading
            </ContentBoxHeader>
            <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
              content
            </ContentBoxContent>
            <ContentBoxActions>
              actions
            </ContentBoxActions>
          </ContentBox>
        </TopLayer>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <TopLayer size={SIZE.MEDIUM} lead withBugbox>
          <ContentBox>
            <ContentBoxContent spacedBottom={SPACING_SIZE.LARGE}>
              <TextBit color={TEXT_BIT_COLOR.ALT} type={HEADER_TYPE.H1}>
                The world&apos;s largest learning community
              </TextBit>
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
              <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>Join us</ButtonPrimary>
            </ContentBoxContent>
          </ContentBox>
        </TopLayer>
      </DocsActiveBlock>
    </div>
  );
};

export default Toplayers;
