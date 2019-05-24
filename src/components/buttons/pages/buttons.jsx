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
      <ButtonPrimary disabled>
        Add your answer disabled
      </ButtonPrimary>
      &nbsp;
      <br />
      <br />
      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.ALT}>
        Ask your question
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary disabled buttonType={BUTTON_PRIMARY_TYPE.ALT}>
        Ask your question disabled
      </ButtonPrimary>
      &nbsp;
      <br />
      <br />
      <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK}>
        join now
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary disabled buttonType={BUTTON_PRIMARY_TYPE.DARK}>
        Join now disabled
      </ButtonPrimary>
      &nbsp;
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
      <ButtonPrimary wide>Primary wide</ButtonPrimary>
      &nbsp;
      <ButtonPrimary wide disabled>Primary wide disabled</ButtonPrimary>
    </DocsBlock>

    <DocsBlock info="Primary buttons inverted">
      <ContrastBox>
        <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.INVERSE}>
          Add your answer
        </ButtonPrimary>
        &nbsp;
        <ButtonPrimary disabled buttonType={BUTTON_PRIMARY_TYPE.INVERSE}>
          Add your answer disabled
        </ButtonPrimary>
        &nbsp;
        <br />
        <br />
        <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK_INVERSE}>
          Search
        </ButtonPrimary>
        &nbsp;
        <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.DARK_INVERSE} disabled>
          Search
        </ButtonPrimary>
      </ContrastBox>
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
      <br />
      <br />
      <ButtonSecondary>
        Add your answer
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled>
        Add your answer
      </ButtonSecondary>
      &nbsp;
      <br />
      <br />
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT}>
        Ask your question
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ALT} disabled>
        Ask your question
      </ButtonSecondary>
      &nbsp;
      <br />
      <br />
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK}>
        Log in
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK} disabled>
        Log in
      </ButtonSecondary>
      &nbsp;
      <br />
      <br />
    </DocsBlock>

    <DocsBlock info="Secondary buttons wide">
      <ButtonSecondary wide>Search</ButtonSecondary>
      &nbsp;
      <ButtonSecondary wide disabled>Search disabled</ButtonSecondary>
    </DocsBlock>

    <DocsBlock info="Secondary buttons inverted">
      <ContrastBox>
        <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>
          <Icon type={iconTypes.SEARCH} color={ICON_COLOR.ADAPTIVE} size={14} />
        </ButtonSecondary>
        &nbsp;
        <br />
        <br />
        <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE}>
          Answer
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.INVERSE} disabled>
          Answer
        </ButtonSecondary>
        &nbsp;
        <br />
        <br />
        <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK_INVERSE}>
          Log in
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.DARK_INVERSE} disabled>
          Log in
        </ButtonSecondary>
        &nbsp;
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Custom buttons with icons examples">
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_INVERSE}>
        <Label
          text="Thank you"
          number={24}
          iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.PEACH}
          secondary
          unstyled
        />
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_INVERSE}>
        <Label
          text="Thank you"
          number={2}
          iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.PEACH}
          secondary
          unstyled
        />
      </ButtonSecondary>
      <br /><br />
      <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_MUSTARD} small>
        <Label
          text="Mark as brainliest"
          iconType={ICON_TYPE.EXCELLENT}
          iconColor={ICON_COLOR.MUSTARD}
          secondary
          unstyled
        />
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled buttonType={BUTTON_SECONDARY_TYPE.ACTIVE_MUSTARD} small>
        <Label
          text="Mark as brainliest"
          iconType={ICON_TYPE.EXCELLENT}
          iconColor={ICON_COLOR.MUSTARD}
          secondary
          unstyled
        />
      </ButtonSecondary>
    </DocsBlock>

  </div>
);

export default Buttons;
