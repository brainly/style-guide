import React from 'react';
import ButtonPrimary, {types} from '../ButtonPrimary';
import ButtonSecondary, {types as types2} from '../ButtonSecondary';
import ButtonRound from '../ButtonRound';
import DocsBlock, {contrastBlockCssClass} from '../../../docs/DocsBlock';
import Icon, {types as iconTypes, colors as iconColors} from '../../icons/Icon';

const Buttons = () =>
  <div>
    <DocsBlock info='Primary buttons'>
      <ButtonPrimary>
        Add your answer
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary type={types.alt}>
        Ask your question
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary type={types.dark}>
        Search
      </ButtonPrimary>
      &nbsp;
      <ButtonPrimary disabled={true}>
        Disabled
      </ButtonPrimary>

      <br/>
      <br/>

      <ButtonPrimary
        icon={<Icon type={iconTypes.fb} color={iconColors.adaptive} size={16}/>}
        type={types.fb}>
        Login with Facebook
      </ButtonPrimary>
    </DocsBlock>

    <DocsBlock info="Primary buttons wide">
      <ButtonPrimary wide={true}>Search</ButtonPrimary>
    </DocsBlock>

    <DocsBlock info="Primary buttons inverted">
      <div className={contrastBlockCssClass}>
        <ButtonPrimary type={types.inverse}>
          Add your answer
        </ButtonPrimary>
        &nbsp;
        <ButtonPrimary type={types.alt_inverse}>
          Ask your question
        </ButtonPrimary>
        &nbsp;
        <ButtonPrimary type={types.dark_inverse}>
          Search
        </ButtonPrimary>
        &nbsp;
        <ButtonPrimary disabled={true} type={types.inverse}>
          Disabled
        </ButtonPrimary>
      </div>
    </DocsBlock>

    <DocsBlock info="Primary round button">
      <ButtonRound label="Add question">
        <Icon type={iconTypes.plus} size={16}/>
      </ButtonRound>
    </DocsBlock>


    <DocsBlock info='Secondary buttons'>
      <ButtonSecondary>
        <Icon type={iconTypes.search} color={iconColors.adaptive} size={14}/>
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
      <div className={contrastBlockCssClass}>
        <ButtonSecondary type={types2.inverse}>
          <Icon type={iconTypes.search} color={iconColors.adaptive} size={14}/>
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
      </div>
    </DocsBlock>


    <DocsBlock info='Secondary buttons small'>
      <ButtonSecondary small={true}>
        <Icon type={iconTypes.search} color={iconColors.adaptive} size={14}/>
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
      <div className={contrastBlockCssClass}>
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
              <Icon type={iconTypes.comment} color={iconColors.lavender} size={16}/>
            </div>
            <div className="sg-label__text">Comment</div>
            <div className="sg-label__number">21</div>
          </div>
        </ButtonSecondary>
        &nbsp;
        <ButtonSecondary type={types2.inverse} small={true}>
          <div className="sg-label sg-label--secondary">
            <div className="sg-label__icon">
              <Icon type={iconTypes.excellent} color={iconColors.mustard} size={16}/>
            </div>
            <div className="sg-label__text">Mark as brainliest</div>
          </div>
        </ButtonSecondary>

      </div>
    </DocsBlock>


    <DocsBlock info="Secondary buttons small active and inverted">
      <ButtonSecondary type={types2.active_inverse} small={true}>
        <div className="sg-label sg-label--secondary sg-label--unstyled">
          <div className="sg-label__icon">
            <Icon type={iconTypes.heart} color={iconColors.adaptive} size={16}/>
          </div>
          <div className="sg-label__text">Thank you</div>
          <div className="sg-label__number">21</div>
        </div>
      </ButtonSecondary>
      &nbsp;
      <ButtonSecondary disabled={true} type={types2.active_inverse} small={true}>
        <div className="sg-label sg-label--secondary sg-label--unstyled">
          <div className="sg-label__icon">
            <Icon type={iconTypes.heart} color={iconColors.adaptive} size={16}/>
          </div>
          <div className="sg-label__text">Thank you</div>
          <div className="sg-label__number">21</div>
        </div>
      </ButtonSecondary>
    </DocsBlock>

  </div>;

export default Buttons;
