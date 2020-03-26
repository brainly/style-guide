import React from 'react';
import Input from '../Input';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';

const voidFunction = () => undefined;

const textInputs = () => (
  <div>
    <DocsBlock info="Default and white">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Input placeholder="placeholder" />

          <br />
          <Input size="large" placeholder="placeholder" />
        </Flex>
        <Flex direction="column">
          <ContrastBox fullWidth>
            <Input placeholder="placeholder" color="white" />
            <br />
            <br />
            <Input size="large" placeholder="placeholder" color="white" />
          </ContrastBox>
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Valid and invalid">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Input
            placeholder="placeholder"
            valid
            value="This is valid example"
            onChange={voidFunction}
          />
          <br />
          <Input
            placeholder="placeholder"
            invalid
            size="large"
            value="This is invalid example"
            onChange={voidFunction}
          />
        </Flex>
        <Flex direction="column">
          <ContrastBox fullWidth>
            <Input valid placeholder="This is valid example" color="white" />
            <br />
            <br />
            <Input
              size="large"
              placeholder="This is invalid example"
              invalid
              color="white"
            />
          </ContrastBox>
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Invalid with error message">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Input
            placeholder="placeholder"
            invalid
            errorMessage="This is an error message"
            onChange={voidFunction}
          />
        </Flex>
        <Flex direction="column" marginRight="l">
          <Input
            size="large"
            placeholder="This is invalid example"
            errorMessage="This is an error message"
            invalid
          />
        </Flex>
      </Flex>
    </DocsBlock>
    <DocsBlock info="Full width">
      <Input placeholder="placeholder" fullWidth />
    </DocsBlock>
    <DocsBlock info="Password">
      <Input
        type="password"
        value="secret"
        placeholder="Type password"
        onChange={voidFunction}
      />
    </DocsBlock>
  </div>
);

export default textInputs;
