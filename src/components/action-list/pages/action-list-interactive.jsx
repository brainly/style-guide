import React from 'react';
import ActionList, {DIRECTION, ALIGNMENT} from '../ActionList';
import Button from 'buttons/Button';
import Icon, {ICON_COLOR, TYPE as ICON_TYPE} from 'icons/Icon';
import Text, {TEXT_TYPE, TEXT_COLOR} from 'text/Text';

import ActionListHole from '../ActionListHole';
import DocsActiveBlock from 'components/DocsActiveBlock';

const ActionLists = () => {
  const settings = [
    {
      name: 'noWrap',
      values: Boolean,
    },
    {
      name: 'toTop',
      values: Boolean,
    },
    {
      name: 'direction',
      values: DIRECTION,
    },
    {
      name: 'align',
      values: ALIGNMENT,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <ActionList>
          <ActionListHole>
            <Button type="solid-blue" size="small">
              accept
            </Button>
          </ActionListHole>
          <ActionListHole>
            <Button type="solid">Later</Button>
          </ActionListHole>
        </ActionList>
      </DocsActiveBlock>

      <DocsActiveBlock settings={settings}>
        <ActionList noWrap>
          <ActionListHole>
            <Icon type={ICON_TYPE.MESSAGES} size={24} color={ICON_COLOR.DARK} />
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.DARK}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rhoncus turpis quis dolor suscipit, a mattis nunc posuere. Duis
              lacinia mauris quis tempus varius. Donec consectetur bibendum
              pretium.
            </Text>
          </ActionListHole>
        </ActionList>
      </DocsActiveBlock>
    </div>
  );
};

export default ActionLists;
