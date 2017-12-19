import React from 'react';
import ActionList, {DIRECTION} from '../ActionList';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';
import Avatar, {SIZE} from 'avatar/Avatar';
import Label, {SIZE as LABEL_SIZE, ICON_COLOR, ICON_TYPE} from 'labels/Label';
import Icon from 'icons/Icon';
import Text, {TYPE as TEXT_TYPE, SIZE as TEXT_SIZE, COLOR as TEXT_COLOR, WEIGHT as TEXT_WEIGHT} from 'text/Text';
import ContrastBox from 'components/ContrastBox';
import DocsBlock from 'components/DocsBlock';
import ActionListHole from '../ActionListHole';

const ActionLists = () =>
  <div>
    <DocsBlock info="Default">
      <ContrastBox fullWidth>
        <ActionList>
          <ActionListHole>
            <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} small>
              accept
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK_INVERSE}>
              Later
            </ButtonPrimary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="To right">
      <ContrastBox fullWidth>
        <ActionList direction={DIRECTION.TO_RIGHT}>
          <ActionListHole>
            <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} small>
              accept
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK_INVERSE}>
              Later
            </ButtonPrimary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="To top">
      <ContrastBox fullWidth>
        <ActionList direction={DIRECTION.TO_TOP}>
          <ActionListHole>
            <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} small>
              accept
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK_INVERSE}>
              Later
            </ButtonPrimary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Centered">
      <ContrastBox fullWidth>
        <ActionList direction={DIRECTION.CENTERED}>
          <ActionListHole>
            <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} small>
              accept
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK_INVERSE}>
              Later
            </ButtonPrimary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Space between">
      <ActionList direction={DIRECTION.SPACE_BETWEEN}>
        <ActionListHole>
          <Label iconType={ICON_TYPE.ANSWER} iconColor={ICON_COLOR.GRAY_SECONDARY} secondary
            size={LABEL_SIZE.SMALL}>
            <Text size={TEXT_SIZE.OBSCURE} weight={TEXT_WEIGHT.BOLD} color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}>0/5
            </Text>
          </Label>
        </ActionListHole>
        <ActionListHole>
          <Label iconType={ICON_TYPE.COUNTER} iconColor={ICON_COLOR.GRAY_SECONDARY} secondary
            size={LABEL_SIZE.SMALL}>
            <Text size={TEXT_SIZE.OBSCURE} weight={TEXT_WEIGHT.BOLD} color={TEXT_COLOR.GRAY_SECONDARY}
              type={TEXT_TYPE.DIV}>2d: 00h
            </Text>
          </Label>
        </ActionListHole>
        <ActionListHole>
          <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT_INVERSE} small>
            start
          </ButtonSecondary>
        </ActionListHole>
      </ActionList>
    </DocsBlock>

    <DocsBlock info="No wrap" multiContent={[
      <ContrastBox key={1} narrow>
        <ActionList noWrap>
          <ActionListHole>
            <Icon type={ICON_TYPE.MESSAGES} size={24} />
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              Elements in this box will just never wrap
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>,
      <ContrastBox key={2} narrow>
        <ActionList>
          <ActionListHole>
            <Icon type={ICON_TYPE.MESSAGES} size={24} />
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

    <DocsBlock info="Hole - as container">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole asContainer>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              You can position absolute elements here
            </Text>
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              Default behaviour
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - no-spacing">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole noSpacing>
            <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} small wide>
              Without default margin
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole noSpacing>
            <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} small wide>
              Without default margin
            </ButtonSecondary>
          </ActionListHole>
          <ActionListHole>
            <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} small wide>
              Last hole does not have margin
            </ButtonSecondary>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - grow">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole grow>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              This component will grow to fill all remaining size
            </Text>
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              This component has default width
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - no-shrink">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole grow>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              This component will grow to fill all remaining size
            </Text>
          </ActionListHole>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              This component will not be shrinked even if its width is smalle
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - to-right">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              This is default component
            </Text>
          </ActionListHole>
          <ActionListHole toRight>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              This component will stick to right side
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Hole - to-end">
      <ContrastBox fullWidth>
        <ActionList noWrap>
          <ActionListHole>
            <Avatar size={SIZE.XXXLARGE} border imgSrc="https://source.unsplash.com/240x240/?dog" />
          </ActionListHole>
          <ActionListHole toEnd>
            <Text type={TEXT_TYPE.P} color={TEXT_COLOR.LIGHT}>
              This component will be pulled down if container is higher than its contents
            </Text>
          </ActionListHole>
        </ActionList>
      </ContrastBox>
    </DocsBlock>
  </div>;

export default ActionLists;
