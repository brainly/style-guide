import * as React from 'react';
import Card, {CARD_PADDING} from '../Card';
import CardHole from '../CardHole';
import Button from 'buttons/Button';
import Text, {TEXT_TYPE} from 'text/Text';

import DocsActiveBlock from 'components/DocsActiveBlock';

const Cards = () => {
  const settings = [
    {
      name: 'padding',
      values: CARD_PADDING,
    },
    {
      name: 'vertical',
      values: Boolean,
    },
    {
      name: 'centered',
      values: Boolean,
    },
    {
      name: 'full',
      values: Boolean,
    },
    {
      name: 'noBorder',
      values: Boolean,
    },
    {
      name: 'transparent',
      values: Boolean,
    },
    {
      name: 'shadow',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Card padding={CARD_PADDING.SMALL}>
          <CardHole>
            <Text type={TEXT_TYPE.P} color="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rhoncus turpis quis dolor suscipit, a mattis nunc posuere. Duis
              lacinia mauris quis tempus varius. Donec consectetur bibendum
              pretium.
            </Text>
          </CardHole>
          <CardHole color="gray-40">
            <Button type="solid">Ask your question</Button>
          </CardHole>
        </Card>
      </DocsActiveBlock>
    </div>
  );
};

export default Cards;
