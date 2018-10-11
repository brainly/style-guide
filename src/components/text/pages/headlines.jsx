import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Headline, {HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM, HEADLINE_ALIGN} from '../Headline';

const text = 'We\'ve got your back!';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const Headlines = () => {
  const standard = [];
  const light = [];

  getValues(HEADLINE_SIZE, false).forEach(size => {
    [false, true].forEach(extraBold => {

      standard.push(
        <Headline type={HEADLINE_TYPE.H2} size={size} extraBold={extraBold}>
          {text} - {size}
        </Headline>
      );

      light.push(
        <Headline type={HEADLINE_TYPE.H2} size={size} extraBold={extraBold} color={HEADLINE_COLOR.WHITE}>
          {text} - {size}
        </Headline>
      );
    });
  });

  return (
    <DocsBlock info="Examples">
      {standard}
      <ContrastBox>
        {light}
      </ContrastBox>
      <br />
      <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} color={HEADLINE_COLOR.MINT} transform={HEADLINE_TRANSFORM.CAPITALIZE}>
        {text} - capitalize
      </Headline>
      <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} transform={HEADLINE_TRANSFORM.CAPITALIZE}>
        {text} - capitalize
      </Headline>
      <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} transform={HEADLINE_TRANSFORM.LOWERCASE}>
        {text} - lowercase
      </Headline>
      <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} transform={HEADLINE_TRANSFORM.UPPERCASE}>
        {text} - uppercase
      </Headline>
      <br />
      <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} align={HEADLINE_ALIGN.LEFT}>
        {text} - align left
      </Headline>
      <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} align={HEADLINE_ALIGN.CENTER}>
        {text} - align center
      </Headline>
      <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.NORMAL} align={HEADLINE_ALIGN.RIGHT}>
        {text} - align right
      </Headline>
    </DocsBlock>
  );

};

export default Headlines;
