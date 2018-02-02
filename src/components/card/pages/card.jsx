import React from 'react';
import Card, {PADDING} from '../Card';
import CardHole, {COLOR} from '../CardHole';
import DocsBlock from 'components/DocsBlock';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxContent from 'content-box/ContentBoxContent';
import ActionList, {DIRECTION} from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import HeaderSecondary, {HEADER_TYPE} from 'text/HeaderSecondary';

const Cards = () =>
  <div>
    <DocsBlock info="Simple with large pading">
      <Card padding={PADDING.LARGE}>
        <CardHole>
          This is card content top
        </CardHole>
        <CardHole color={COLOR.GRAY_SECONDARY}>
          This is card content bottom
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="Full and centered">
      <Card full centered>
        <CardHole color={COLOR.GRAY_SECONDARY_LIGHT}>
          This is card content top
        </CardHole>
        <CardHole color={COLOR.GRAY_SECONDARY}>
          This is card content bottom
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="No border">
      <Card noBorder padding={PADDING.SMALL}>
        <CardHole color={COLOR.GRAY_SECONDARY_LIGHT}>
          This is card content top
        </CardHole>
        <CardHole color={COLOR.GRAY_SECONDARY}>
          This is card content bottom
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="With shadow">
      <Card shadow padding={PADDING.SMALL}>
        <CardHole>
          This is card content top
        </CardHole>
        <CardHole color={COLOR.NAVYBLUE_SECONDARY}>
          This is card content bottom
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="Example use">
      <Card padding={PADDING.SMALL}>
        <CardHole color={COLOR.GRAY_SECONDARY_LIGHT}>
          <ContentBox>
            <ContentBoxHeader>
              <HeaderSecondary type={HEADER_TYPE.H3}>Ask a question about a school subject</HeaderSecondary>
            </ContentBoxHeader>
            <ContentBoxContent>And add some description</ContentBoxContent>
          </ContentBox>
        </CardHole>
        <CardHole color={COLOR.NAVYBLUE_SECONDARY}>
          <ActionList direction={DIRECTION.SPACE_BETWEEN}>
            <ActionListHole>
              <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE_ALT} wide>
                Ask your question
              </ButtonSecondary>
            </ActionListHole>
            <ActionListHole>
              <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE} wide>
                Cancel
              </ButtonSecondary>
            </ActionListHole>
          </ActionList>
        </CardHole>
      </Card>
    </DocsBlock>
  </div>;

export default Cards;
