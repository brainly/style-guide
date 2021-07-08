import * as React from 'react';
import Select from '../Select';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';

const exampleOptions = [
  {value: 'option1', text: 'Option1'},
  {value: 'option2', text: 'Select selector'},
  {value: 'option3', text: 'Select selector'},
];

const exampleGroupedOptions = [
  {value: 'option1', text: 'Option1'},
  {value: 'option2', text: 'Select selector'},
  {
    label: 'Label text',
    options: [
      {value: 'option21', text: 'Option1'},
      {value: 'option22', text: 'Select selector'},
      {value: 'option23', text: 'Select selector'},
    ],
  },
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
          <Select size="l" {...exampleProps} />
        </Flex>
        <Flex direction="column">
          <ContrastBox>
            <Select {...exampleProps} color="white" />
            <br />
            <br />
            <Select size="l" {...exampleProps} color="white" />
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
          <Select size="l" {...exampleProps} valid />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Select {...exampleProps} invalid />
          <br />
          <br />
          <Select size="l" {...exampleProps} invalid />
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Capitalized">
      <Select {...exampleProps} capitalized />
    </DocsBlock>
    <DocsBlock info="Full width">
      <Select {...exampleProps} fullWidth />
    </DocsBlock>
    <DocsBlock info="With grouped options">
      <Select {...exampleProps} options={exampleGroupedOptions} fullWidth />
    </DocsBlock>
  </div>
);

export default selects;
