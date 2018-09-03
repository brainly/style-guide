import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Headline, {HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM} from '../Headline';

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
        <Headline type={HEADLINE_TYPE.H2} size={size} extraBold={extraBold} color={HEADLINE_COLOR.LIGHT}>
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
    </DocsBlock>
  );

};

export default Headlines;
