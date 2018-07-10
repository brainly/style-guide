import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Spinner from '../Spinner';

const Spinners = () => (
  <React.Fragment>
    <DocsBlock info="Default">
        <Spinner />
    </DocsBlock>
    <DocsBlock info="Gray">
        <Spinner gray/>
    </DocsBlock>
  </React.Fragment>
);

export default Spinners;
