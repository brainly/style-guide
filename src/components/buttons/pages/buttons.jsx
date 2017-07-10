import React from 'react';
import ButtonPrimary, {TYPE} from '../ButtonPrimary';
import ButtonSecondary, {TYPE as types2} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import Icon, {TYPE as iconTypes, COLOR as iconColors} from '../../icons/Icon';

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
      <ButtonSecondary type={types2.alt}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.dark}>
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
        <ButtonSecondary type={types2.inverse}>
          <Icon type={iconTypes.SEARCH} color={iconColors.ADAPTIVE} size={14}/>
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.inverse}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.alt_inverse}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.dark_inverse}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary disabled={true} type={types2.inverse}>
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
      <ButtonSecondary type={types2.alt} small={true}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary type={types2.dark} small={true}>
        Search
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled={true} small={true}>
        Disabled
      </ButtonSecondary>
    </DocsBlock>


    <DocsBlock info="Secondary buttons inverted small">
      <ContrastBox>
        <ButtonSecondary type={types2.inverse} small={true}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.alt_inverse} small={true}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.dark_inverse} small={true}>
          Search
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary disabled={true} type={types2.inverse} small={true}>
          Disabled
        </ButtonSecondary>

        <br/><br/>

        <ButtonSecondary type={types2.inverse} small={true}>
          <div className="sg-label sg-label--secondary">
            <div className="sg-label__icon">
              <Icon type={iconTypes.COMMENT} color={iconColors.LAVENDER} size={16}/>
            </div>
            <div className="sg-label__text">Comment</div>
            <div className="sg-label__number">21</div>
          </div>
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.inverse} small={true}>
          <div className="sg-label sg-label--secondary">
            <div className="sg-label__icon">
              <Icon type={iconTypes.EXCELLENT} color={iconColors.MUSTARD} size={16}/>
            </div>
            <div className="sg-label__text">Mark as brainliest</div>
          </div>
        </ButtonSecondary>

      </ContrastBox>
    </DocsBlock>


    <DocsBlock info="Secondary buttons small active and inverted">
      <ButtonSecondary type={types2.active_inverse} small={true}>
        <div className="sg-label sg-label--secondary sg-label--unstyled">
          <div className="sg-label__icon">
            <Icon type={iconTypes.HEART} color={iconColors.ADAPTIVE} size={16}/>
          </div>
          <div className="sg-label__text">Thank you</div>
          <div className="sg-label__number">21</div>
        </div>
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled={true} type={types2.active_inverse} small={true}>
        <div className="sg-label sg-label--secondary sg-label--unstyled">
          <div className="sg-label__icon">
            <Icon type={iconTypes.HEART} color={iconColors.ADAPTIVE} size={16}/>
          </div>
          <div className="sg-label__text">Thank you</div>
          <div className="sg-label__number">21</div>
        </div>
      </ButtonSecondary>
    </DocsBlock>

  </div>;

export default Buttons;
