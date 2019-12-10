import React from 'react';
import Select from '../Select';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';

const exampleOptions = [
  {value: 'option1', text: 'Option1'},
  {value: 'option2', text: 'Select selector'},
  {value: 'option3', text: 'Select selector'},
];
const exampleProps = {
  options: exampleOptions,
  value: exampleOptions[1].value,
  onChange: () => undefined,
};

const selects = () => (
  <div>
    <DocsBlock info="Default and white">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Select {...exampleProps} />
          <br />
          <br />
          <Select size="large" {...exampleProps} />
        </Flex>
        <Flex direction="column">
          <ContrastBox>
            <Select {...exampleProps} color="white" />
            <br />
            <br />
            <Select size="large" {...exampleProps} color="white" />
          </ContrastBox>
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Valid">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Select {...exampleProps} valid />
          <br />
          <br />
          <Select size="large" {...exampleProps} valid />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Select {...exampleProps} invalid />
          <br />
          <br />
          <Select size="large" {...exampleProps} invalid />
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Capitalized">
      <Select {...exampleProps} capitalized />
    </DocsBlock>
    <DocsBlock info="Full width">
      <Select {...exampleProps} fullWidth />
    </DocsBlock>
  </div>
);

export default selects;
