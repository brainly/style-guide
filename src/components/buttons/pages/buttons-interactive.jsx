import React from 'react';
import ButtonPrimary, {TYPE as PRIMARY_TYPE} from '../ButtonPrimary';
import ButtonSecondary, {TYPE as SECONDARY_TYPE} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import Icon, {TYPE as ICON_TYPES, COLOR as ICON_COLORS} from 'icons/Icon';
import Label, {ICON_COLOR, ICON_TYPE} from 'labels/Label';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Buttons = () => {
  const allIcons = {};

  Object.keys(ICON_TYPES).forEach(type =>
    allIcons[type] = <Icon type={ICON_TYPES[type]} color={ICON_COLOR.ADAPTIVE} size={16} />);

  const primarySettings = [
    {
      name: 'type',
      values: PRIMARY_TYPE
    },
    {
      name: 'wide',
      values: Boolean
    },
    {
      name: 'disabled',
      values: Boolean
    },
    {
      name: 'icon',
      values: allIcons
    },
    {
      name: 'href',
      values: String
    }
  ];

  const roundSettings = [
    {
      name: 'href',
      values: String
    },
    {
      name: 'label',
      values: String
    }
  ];

  const secondarySettings = [
    {
      name: 'type',
      values: SECONDARY_TYPE
    },
    {
      name: 'small',
      values: Boolean
    },
    {
      name: 'wide',
      values: Boolean
    },
    {
      name: 'disabled',
      values: Boolean
    },
    {
      name: 'href',
      values: String
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={primarySettings}>
        <ButtonPrimary>
          Add your answer
        </ButtonPrimary>
      </DocsActiveBlock>
      <DocsActiveBlock settings={primarySettings}>
        <ButtonPrimary
          icon={allIcons.FB}
          type={PRIMARY_TYPE.FB}>
          Login with Facebook
        </ButtonPrimary>
      </DocsActiveBlock>

      <DocsActiveBlock settings={roundSettings}>
        <ButtonRound label="Add question">
          <Icon type={ICON_TYPES.PLUS} size={16} />
        </ButtonRound>
      </DocsActiveBlock>

      <DocsActiveBlock settings={secondarySettings}>
        <ButtonSecondary>
          <Icon type={ICON_TYPES.SEARCH} color={ICON_COLORS.ADAPTIVE} size={14} />
        </ButtonSecondary>
      </DocsActiveBlock>
      <DocsActiveBlock settings={secondarySettings} backgroundColor="dark">
        <ButtonSecondary type={SECONDARY_TYPE.INVERSE} small>
          <Label text="Comment" number={21} iconType={ICON_TYPE.COMMENT}
            iconColor={ICON_COLOR.LAVENDER} secondary />
        </ButtonSecondary>
      </DocsActiveBlock>
      <DocsActiveBlock settings={secondarySettings} backgroundColor="dark">
        <ButtonSecondary type={SECONDARY_TYPE.ACTIVE_INVERSE} small>
          <Label text="Thank you" number={331} iconType={ICON_TYPE.HEART}
            iconColor={ICON_COLOR.ADAPTIVE} secondary unstyled />
        </ButtonSecondary>
      </DocsActiveBlock>
    </div>
  );
};

export default Buttons;
