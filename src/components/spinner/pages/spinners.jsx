import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from '../Spinner';

const Spinners = () => (
  <>
    <DocsBlock info="Normal" additionalInfo="(Default)">
      <Spinner />
    </DocsBlock>
    <DocsBlock info="Small">
      <Spinner size={SPINNER_SIZE.SMALL} />
    </DocsBlock>
    <DocsBlock info="XSmall">
      <Spinner size={SPINNER_SIZE.XSMALL} />
    </DocsBlock>
    <DocsBlock info="XXSmall">
      <Spinner size={SPINNER_SIZE.XXSMALL} />
    </DocsBlock>
    {Object.values(SPINNER_COLOR).map(color => (
      <DocsBlock key={color} info={color}>
        {color === 'white' ? (
          <ContrastBox>
            <Spinner color={color} />
          </ContrastBox>
        ) : (
          <Spinner color={color} />
        )}
      </DocsBlock>
    ))}
  </>
);

export default Spinners;
