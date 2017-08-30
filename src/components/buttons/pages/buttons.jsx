import React from 'react';
import ButtonPrimary, {TYPE} from '../ButtonPrimary';
import ButtonSecondary, {TYPE as types2} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Icon, {TYPE as iconTypes, COLOR as iconColors} from 'icons/Icon';
import Label, {ICON_COLOR, ICON_TYPE} from 'labels/Label';

const Buttons = () =>
  <div>
    <DocsBlock info='Primary buttons'>
      <ButtonPrimary>
        Add your answer
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary type={TYPE.ALT}>
        Ask your question
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary type={TYPE.DARK}>
        Search
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary type={TYPE.LAVENDER}>
        Go
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary disabled>
        Disabled
      </ButtonPrimary>

      <br />
      <br />

      <ButtonPrimary
        icon={<Icon type={iconTypes.FB} color={iconColors.ADAPTIVE} size={16} />}
        type={TYPE.FB}>
        Login with Facebook
      </ButtonPrimary>
    </DocsBlock>

    <DocsBlock info="Primary buttons wide">
      <ButtonPrimary wide>Search</ButtonPrimary>
    </DocsBlock>

    <DocsBlock info="Primary buttons inverted">
      <ContrastBox>
        <ButtonPrimary type={TYPE.INVERSE}>
          Add your answer
        </ButtonPrimary>
        &nbsp;
        <ButtonPrimary type={TYPE.ALT_INVERSE}>
          Ask your question
        </ButtonPrimary>
        &nbsp;
        <ButtonPrimary type={TYPE.DARK_INVERSE}>
          Search
        </ButtonPrimary>
        &nbsp;
        <ButtonPrimary disabled type={TYPE.INVERSE}>
          Disabled
        </ButtonPrimary>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Primary round button">
      <ButtonRound label="Add question">
        <Icon type={iconTypes.PLUS} size={16} />
      </ButtonRound>
    </DocsBlock>


    <DocsBlock info='Secondary buttons'>
      <ButtonSecondary>
        <Icon type={iconTypes.SEARCH} color={iconColors.ADAPTIVE} size={14} />
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.ALT}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.DARK}>
        Search
      </ButtonSecondary>
      <ButtonSecondary type={types2.LAVENDER}>
        Search
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
      <ContrastBox>
        <ButtonSecondary type={types2.INVERSE}>
          <Icon type={iconTypes.SEARCH} color={iconColors.ADAPTIVE} size={14} />
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.INVERSE}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.ALT_INVERSE}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.DARK_INVERSE}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary disabled type={types2.INVERSE}>
          Disabled
        </ButtonSecondary>
      </ContrastBox>
    </DocsBlock>


    <DocsBlock info='Secondary buttons small'>
      <ButtonSecondary small>
        <Icon type={iconTypes.SEARCH} color={iconColors.ADAPTIVE} size={14} />
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary small>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.ALT} small>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.DARK} small>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.LAVENDER} small>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled small>
        Disabled
      </ButtonSecondary>
    </DocsBlock>


    <DocsBlock info="Secondary buttons inverted small">
      <ContrastBox>
        <ButtonSecondary type={types2.INVERSE} small>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.ALT_INVERSE} small>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.DARK_INVERSE} small>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary disabled type={types2.INVERSE} small>
          Disabled
        </ButtonSecondary>

        <br /><br />

        <ButtonSecondary type={types2.INVERSE} small>
          <Label text="Comment" number={21} iconType={ICON_TYPE.COMMENT}
            iconColor={ICON_COLOR.LAVENDER} secondary />
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.INVERSE} small>
          <Label text="Mark as brainliest" iconType={ICON_TYPE.EXCELLENT}
            iconColor={ICON_COLOR.MUSTARD} secondary />
        </ButtonSecondary>

      </ContrastBox>
    </DocsBlock>


    <DocsBlock info="Secondary buttons small active and inverted">
      <ButtonSecondary type={types2.ACTIVE_INVERSE} small>
        <Label text="Thank you" number={21} iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.ADAPTIVE} secondary unstyled />
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled type={types2.ACTIVE_INVERSE} small>
        <Label text="Thank you" number={21} iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.ADAPTIVE} secondary unstyled />
      </ButtonSecondary>
    </DocsBlock>

  </div>;

export default Buttons;
