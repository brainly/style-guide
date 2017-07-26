import React from 'react';
import ActionList, {DIRECTION} from '../ActionList';
import ButtonSecondary, {TYPE as BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import ButtonPrimary, {TYPE as BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import Icon, {COLOR as ICON_COLOR, TYPE as ICON_TYPE} from 'icons/Icon';
import Text, {TYPE as TEXT_TYPE, COLOR as TEXT_COLOR} from 'text/Text';
import ActionListHole from '../ActionListHole';
import DocsActiveBlock from 'components/DocsActiveBlock';

const ActionLists = () => {
  const settings = [
    {
      name: 'noWrap',
      values: Boolean
    },
    {
      name: 'direction',
      values: DIRECTION
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <ActionList>
        <ActionListHole>
          <ButtonSecondary type={BUTTON_SECONDARY_TYPE.ALT} small={true}>
            accept
          </ButtonSecondary>
        </ActionListHole>
        <ActionListHole>
          <ButtonPrimary type={BUTTON_PRIMARY_TYPE.DARK_INVERSE}>
            Later
          </ButtonPrimary>
        </ActionListHole>
      </ActionList>
    </DocsActiveBlock>

    <DocsActiveBlock settings={settings}>
      <ActionList noWrap={true}>
        <ActionListHole>
          <Icon type={ICON_TYPE.MESSAGES} size={24} color={ICON_COLOR.DARK}/>
        </ActionListHole>
        <ActionListHole>
          <Text type={TEXT_TYPE.P} color={TEXT_COLOR.DARK}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus turpis quis dolor suscipit, a mattis
            nunc posuere. Duis lacinia mauris quis tempus varius. Donec consectetur bibendum pretium.
          </Text>
        </ActionListHole>
      </ActionList>
    </DocsActiveBlock>
  </div>;
};


export default ActionLists;
