import React from 'react';
import ButtonPrimary, {types} from '../ButtonPrimary';
import DocsBlock, {contrastBlockCssClass} from '../../../docs/DocsBlock';


const Buttons = () =>
  <div>
    <DocsBlock info='Primary buttons'>
      <ButtonPrimary>
        Add your answer
      </ButtonPrimary>
      <ButtonPrimary type={types.alt}>
        Ask your question
      </ButtonPrimary>
      <ButtonPrimary type={types.dark}>
        Search
      </ButtonPrimary>
      <ButtonPrimary disabled={true}>
        Disabled
      </ButtonPrimary>

      <br/>
      <br/>

      <ButtonPrimary
        icon={
          <svg className="sg-icon sg-icon--x16 sg-icon--adaptive">
            <use xlinkHref="#icon-fb"></use>
          </svg>
        } type={types.fb}>
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
        <ButtonPrimary type={types.alt_inverse}>
          Ask your question
        </ButtonPrimary>
        <ButtonPrimary type={types.dark_inverse}>
          Search
        </ButtonPrimary>
        <ButtonPrimary disabled={true} type={types.inverse}>
          Disabled
        </ButtonPrimary>
      </div>
    </DocsBlock>

  </div>;

export default Buttons;
