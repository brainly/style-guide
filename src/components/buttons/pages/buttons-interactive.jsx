import React from 'react';
import ButtonPrimary, {TYPE as PRIMARY_TYPE} from '../ButtonPrimary';
import ButtonSecondary, {TYPE as SECONDARY_TYPE} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import Icon, {TYPE as ICON_TYPES, COLOR as ICON_COLORS} from 'icons/Icon';
import Label, {ICON_COLOR, ICON_TYPE} from 'labels/Label';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Buttons = () => {
  const primarySettings = {
    type: PRIMARY_TYPE,
    wide: Boolean,
    disabled: Boolean,
    icon: String
  };

  const roundSettings = {
    href: String,
    label: String
  };

  const secondarySettings = {
    small: Boolean,
    wide: Boolean,
    disabled: Boolean,
    type: SECONDARY_TYPE
  };

  return <div>
    <DocsActiveBlock settings={primarySettings}>
      <ButtonPrimary>
        Add your answer
      </ButtonPrimary>
    </DocsActiveBlock>
    <DocsActiveBlock settings={primarySettings}>
      <ButtonPrimary
        icon={<Icon type={ICON_TYPES.FB} color={ICON_COLORS.ADAPTIVE} size={16}/>}
        type={PRIMARY_TYPE.FB}>
        Login with Facebook
      </ButtonPrimary>
    </DocsActiveBlock>

    <DocsActiveBlock settings={roundSettings}>
      <ButtonRound label="Add question">
        <Icon type={ICON_TYPES.PLUS} size={16}/>
      </ButtonRound>
    </DocsActiveBlock>

    <DocsActiveBlock settings={secondarySettings}>
      <ButtonSecondary>
        <Icon type={ICON_TYPES.SEARCH} color={ICON_COLORS.ADAPTIVE} size={14}/>
      </ButtonSecondary>
    </DocsActiveBlock>
    <DocsActiveBlock settings={secondarySettings}>
      <ButtonSecondary type={SECONDARY_TYPE.INVERSE} small={true}>
        <Label text="Comment" number={21} iconType={ICON_TYPE.COMMENT}
          iconColor={ICON_COLOR.LAVENDER} secondary={true}/>
      </ButtonSecondary>
    </DocsActiveBlock>
    <DocsActiveBlock settings={secondarySettings}>
      <ButtonSecondary type={SECONDARY_TYPE.ACTIVE_INVERSE} small={true}>
        <Label text="Thank you" number={331} iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.ADAPTIVE} secondary={true} unstyled={true}/>
      </ButtonSecondary>
    </DocsActiveBlock>
  </div>;
};

export default Buttons;
