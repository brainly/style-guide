import React from 'react';
import Card, {CARD_PADDING} from '../Card';
import CardHole, {CARD_HOLE_COLOR} from '../CardHole';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import Text, {TYPE as TEXT_TYPE, COLOR as TEXT_COLOR} from 'text/Text';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Cards = () => {
  const settings = [
    {
      name: 'padding',
      values: CARD_PADDING
    },
    {
      name: 'centered',
      values: Boolean
    },
    {
      name: 'full',
      values: Boolean
    },
    {
      name: 'noBorder',
      values: Boolean
    },
    {
      name: 'shadow',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Card padding={CARD_PADDING.SMALL}>
          <CardHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.DARK}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus turpis quis dolor suscipit,
              a mattis nunc posuere. Duis lacinia mauris quis tempus varius. Donec consectetur bibendum pretium.
            </Text>
          </CardHole>
          <CardHole color={CARD_HOLE_COLOR.GRAY}>
            <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>
              Ask your question
            </ButtonPrimary>
          </CardHole>
        </Card>
      </DocsActiveBlock>
    </div>
  );
};

export default Cards;
