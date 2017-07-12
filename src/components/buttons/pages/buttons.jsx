import React from 'react';
import ButtonPrimary, {TYPE} from '../ButtonPrimary';
import ButtonSecondary, {TYPE as types2} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import Icon, {TYPE as iconTypes, COLOR as iconColors} from '../../icons/Icon';
import Label, {ICON_COLOR, ICON_TYPE} from '../../labels/Label';

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
      <ButtonPrimary disabled={true}>
        Disabled
      </ButtonPrimary>

      <br/>
      <br/>

      <ButtonPrimary
        icon={<Icon type={iconTypes.FB} color={iconColors.ADAPTIVE} size={16}/>}
        type={TYPE.FB}>
        Login with Facebook
      </ButtonPrimary>
    </DocsBlock>

    <DocsBlock info="Primary buttons wide">
      <ButtonPrimary wide={true}>Search</ButtonPrimary>
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
        <ButtonPrimary disabled={true} type={TYPE.INVERSE}>
          Disabled
        </ButtonPrimary>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Primary round button">
      <ButtonRound label="Add question">
        <Icon type={iconTypes.PLUS} size={16}/>
      </ButtonRound>
    </DocsBlock>


    <DocsBlock info='Secondary buttons'>
      <ButtonSecondary>
        <Icon type={iconTypes.SEARCH} color={iconColors.ADAPTIVE} size={14}/>
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
      &nbsp;
      <ButtonSecondary disabled={true}>
        Disabled
      </ButtonSecondary>
    </DocsBlock>


    <DocsBlock info="Secondary buttons wide">
      <ButtonSecondary wide={true}>Search</ButtonSecondary>
    </DocsBlock>


    <DocsBlock info="Secondary buttons inverted">
      <ContrastBox>
        <ButtonSecondary type={types2.INVERSE}>
          <Icon type={iconTypes.SEARCH} color={iconColors.ADAPTIVE} size={14}/>
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
        <ButtonSecondary disabled={true} type={types2.INVERSE}>
          Disabled
        </ButtonSecondary>
      </ContrastBox>
    </DocsBlock>


    <DocsBlock info='Secondary buttons small'>
      <ButtonSecondary small={true}>
        <Icon type={iconTypes.SEARCH} color={iconColors.ADAPTIVE} size={14}/>
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary small={true}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.ALT} small={true}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.DARK} small={true}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled={true} small={true}>
        Disabled
      </ButtonSecondary>
    </DocsBlock>


    <DocsBlock info="Secondary buttons inverted small">
      <ContrastBox>
        <ButtonSecondary type={types2.INVERSE} small={true}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.ALT_INVERSE} small={true}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.DARK_INVERSE} small={true}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary disabled={true} type={types2.INVERSE} small={true}>
          Disabled
        </ButtonSecondary>

        <br/><br/>

        <ButtonSecondary type={types2.INVERSE} small={true}>
          <Label text="Comment" number={21} iconType={ICON_TYPE.COMMENT}
            iconColor={ICON_COLOR.LAVENDER} secondary={true}/>
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.INVERSE} small={true}>
          <Label text="Mark as brainliest" iconType={ICON_TYPE.EXCELLENT}
            iconColor={ICON_COLOR.MUSTARD} secondary={true}/>
        </ButtonSecondary>

      </ContrastBox>
    </DocsBlock>


    <DocsBlock info="Secondary buttons small active and inverted">
      <ButtonSecondary type={types2.ACTIVE_INVERSE} small={true}>
        <Label text="Thank you" number={21} iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.ADAPTIVE} secondary={true} unstyled={true}/>
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled={true} type={types2.ACTIVE_INVERSE} small={true}>
        <Label text="Thank you" number={21} iconType={ICON_TYPE.HEART}
          iconColor={ICON_COLOR.ADAPTIVE} secondary={true} unstyled={true}/>
      </ButtonSecondary>
    </DocsBlock>

  </div>;

export default Buttons;
