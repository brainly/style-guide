import React from 'react';
import ActionList, {DIRECTION} from '../ActionList';
import ButtonSecondary, {TYPE as BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import ButtonPrimary, {TYPE as BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import Label, {SIZE as LABEL_SIZE, ICON_COLOR, ICON_TYPE} from 'labels/Label';
import Icon from 'icons/Icon';
import Text, {TYPE as TEXT_TYPE, SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT} from 'text/Text';
import ContrastBox from 'components/ContrastBox';
import DocsBlock from 'components/DocsBlock';
import ActionListHole from '../ActionListHole';

const ActionLists = () =>
  <div>
    <DocsBlock info='Default'>
      <ContrastBox fullWidth={true}>
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
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='To right'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.TO_RIGHT}>
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
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='To top'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.TO_TOP}>
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
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Centered'>
      <ContrastBox fullWidth={true}>
        <ActionList direction={DIRECTION.CENTERED}>
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
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Space between'>
      <ActionList direction={DIRECTION.SPACE_BETWEEN}>
        <ActionListHole>
          <Label iconType={ICON_TYPE.ANSWER} iconColor={ICON_COLOR.GRAY_SECONDARY} secondary={true}
            size={LABEL_SIZE.SMALL}>
            <Text size={TEXT_SIZE.OBSCURE} weight={TEXT_WEIGHT.BOLD} color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}>0/5</Text>
          </Label>
        </ActionListHole>
        <ActionListHole>
          <Label iconType={ICON_TYPE.COUNTER} iconColor={ICON_COLOR.GRAY_SECONDARY} secondary={true}
            size={LABEL_SIZE.SMALL}>
            <Text size={TEXT_SIZE.OBSCURE} weight={TEXT_WEIGHT.BOLD} color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}>2d: 00h</Text>
          </Label>
        </ActionListHole>
        <ActionListHole><ButtonSecondary type={BUTTON_SECONDARY_TYPE.ALT_INVERSE} small={true}>
          start
        </ButtonSecondary>
        </ActionListHole>
      </ActionList>
    </DocsBlock>

    <DocsBlock info='No wrap' multiContent={[
      <ContrastBox narrow={true}>
        <ActionList noWrap={true}>
          <ActionListHole>
            <Icon type={ICON_TYPE.MESSAGES} size={24}/>
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              Elements in this box will just never wrap
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>,
      <ContrastBox narrow={true}>
        <ActionList>
          <ActionListHole>
            <Icon type={ICON_TYPE.MESSAGES} size={24}/>
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              Default behaviour for elements is to wrap
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    ]}>
    </DocsBlock>
  </div>;

export default ActionLists;
