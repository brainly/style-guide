import React from 'react';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from '../ButtonPrimary';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Icon, {TYPE as iconTypes, ICON_COLOR} from 'icons/Icon';
import Label, {ICON_TYPE} from 'labels/Label';

const Buttons = () => (
  <div>
    <DocsBlock info="Primary buttons">
      <ButtonPrimary>
        Add your answer
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>
        Search
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK}>
        Search
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.PEACH}>
        reject
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary disabled>
        Disabled
      </ButtonPrimary>

      <br />
      <br />

      <ButtonPrimary
        icon={<Icon type={iconTypes.FB} color={ICON_COLOR.ADAPTIVE} size={16} />}
        buttonType={BUTTON_PRIMARY_TYPE.FB}
      >
        Login with Facebook
      </ButtonPrimary>
    </DocsBlock>

    <DocsBlock info="Primary buttons wide">
      <ButtonPrimary wide>Search</ButtonPrimary>
    </DocsBlock>

    <DocsBlock info="Primary buttons inverted">

      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.INVERSE}>
          Add your answer
      </ButtonPrimary>
        &nbsp;
      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT_INVERSE}>
          Ask your question
      </ButtonPrimary>
        &nbsp;
      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK_INVERSE}>
          Search
      </ButtonPrimary>
        &nbsp;
      <ButtonPrimary disabled buttonType={BUTTON_PRIMARY_TYPE.INVERSE}>
          Disabled
      </ButtonPrimary>

    </DocsBlock>

    <DocsBlock info="Primary round button">
      <ButtonRound label="Add question">
        <Icon type={iconTypes.PLUS} size={16} />
      </ButtonRound>
    </DocsBlock>

    <DocsBlock info="Secondary buttons">
      <ButtonSecondary>
        <Icon type={iconTypes.SEARCH} color={ICON_COLOR.ADAPTIVE} size={14} />
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.PEACH}>
        reject
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled>
        Disabled
      </ButtonSecondary>
    </DocsBlock>

    <DocsBlock info="Secondary buttons wide">
      <ButtonSecondary wide>Search</ButtonSecondary>
    </DocsBlock>

    <DocsBlock info="Secondary buttons inverted">
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>
        <Icon type={iconTypes.SEARCH} color={ICON_COLOR.ADAPTIVE} size={14} />
      </ButtonSecondary>
        &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>
          Search
      </ButtonSecondary>
        &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT_INVERSE}>
          Search
      </ButtonSecondary>
        &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK_INVERSE}>
          Search
      </ButtonSecondary>
        &nbsp;
      <ButtonSecondary disabled buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>
          Disabled
      </ButtonSecondary>

    </DocsBlock>

    <DocsBlock info="Secondary buttons small">
      <ButtonSecondary small>
        <Icon type={iconTypes.SEARCH} color={ICON_COLOR.ADAPTIVE} size={14} />
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary small>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} small>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK} small>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.PEACH} small>
        reject
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled small>
        Disabled
      </ButtonSecondary>
    </DocsBlock>

    <DocsBlock info="Secondary buttons inverted small">
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE} small>
          Search
      </ButtonSecondary>
        &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT_INVERSE} small>
          Search
      </ButtonSecondary>
        &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK_INVERSE} small>
          Search
      </ButtonSecondary>
        &nbsp;
      <ButtonSecondary disabled type={BUTTON_SECONDARY_TYPE.INVERSE} small>
          Disabled
      </ButtonSecondary>

      <br /><br />

      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE} small>
        <Label
          text="Comment"
          number={21}
          iconType={ICON_TYPE.COMMENT}
          iconColor={ICON_COLOR.LAVENDER}
          secondary
        />
      </ButtonSecondary>
        &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE} small>
        <Label
          text="Mark as brainliest"
          iconType={ICON_TYPE.EXCELLENT}
          iconColor={ICON_COLOR.MUSTARD}
          secondary
        />
      </ButtonSecondary>
    </DocsBlock>

    <DocsBlock info="Secondary buttons small active and inverted">
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_INVERSE} small>
        <Label
          text="Thank you"
          number={21}
          iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.ADAPTIVE}
          secondary
          unstyled
        />
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_INVERSE} small>
        <Label
          text="Thank you"
          number={21}
          iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.ADAPTIVE}
          secondary
          unstyled
        />
      </ButtonSecondary>
    </DocsBlock>

  </div>
);

export default Buttons;
