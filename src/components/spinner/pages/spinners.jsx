import React, {Fragment} from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Spinner, {SPINNER_SIZE} from '../Spinner';

const Spinners = () => (
  <Fragment>
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
    <DocsBlock info="Light">
      <ContrastBox>
        <Spinner light />
      </ContrastBox>
    </DocsBlock>
  </Fragment>
);

export default Spinners;
