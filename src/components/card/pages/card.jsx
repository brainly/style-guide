import React from 'react';
import Card, {CARD_PADDING} from '../Card';
import CardHole, {CARD_HOLE_COLOR} from '../CardHole';
import DocsBlock from 'components/DocsBlock';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxContent from 'content-box/ContentBoxContent';
import ActionList, {DIRECTION} from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import HeaderSecondary, {HEADER_TYPE} from 'text/HeaderSecondary';

const Cards = () => (
  <div>
    <DocsBlock info="Simple with large padding">
      <Card padding={CARD_PADDING.LARGE}>
        <CardHole>
          This is card content top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHTEST}>
          This is card content bottom
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="Full and centered">
      <Card full centered>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          This is card content top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY}>
          This is card content bottom
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="No border">
      <Card noBorder padding={CARD_PADDING.SMALL}>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          This is card content top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY}>
          This is card content bottom
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="With shadow">
      <Card shadow padding={CARD_PADDING.SMALL}>
        <CardHole>
          This is card content top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.NAVYBLUE_SECONDARY}>
          This is card content bottom
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="Vertical with small padding">
      <Card vertical padding={CARD_PADDING.SMALL}>
        <CardHole color={CARD_HOLE_COLOR.LAVENDER_SECONDARY_LIGHT}>
          This is card content left
        </CardHole>
        <CardHole>
         This is card content right
        </CardHole>
      </Card>
    </DocsBlock>

    <DocsBlock info="Example use">
      <Card padding={CARD_PADDING.SMALL}>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          <ContentBox>
            <ContentBoxHeader>
              <HeaderSecondary type={HEADER_TYPE.H3}>Ask a question about a school subject</HeaderSecondary>
            </ContentBoxHeader>
            <ContentBoxContent>And add some description</ContentBoxContent>
          </ContentBox>
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.NAVYBLUE_SECONDARY}>
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
  </div>
);

export default Cards;
