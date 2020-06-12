import React from 'react';
import Search from '../Search';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Flex from '../../flex/Flex';

const searches = () => (
  <div>
    <DocsBlock info="Default and white">
      <Flex>
        <Flex direction="column" marginRight="l">
          <div>
            <Search placeholder="Find all the answers..." />
          </div>
          <br />
          <br />
          <Search size="l" placeholder="Find all the answers..." />
          <br />
          <br />
        </Flex>
        <Flex direction="column">
          <ContrastBox fullWidth>
            <Search color="white" placeholder="Find all the answers..." />
            <br />
            <br />
            <Search
              color="white"
              size="l"
              placeholder="Find all the answers..."
            />
            <br />
            <br />
          </ContrastBox>
        </Flex>
      </Flex>
    </DocsBlock>

    <DocsBlock info="Search with round button">
      <Flex>
        <Flex direction="column" marginRight="l">
          <Search placeholder="Find all the answers..." withRoundButton />
          <br />
          <br />
          <Search
            placeholder="Find all the answers..."
            withRoundButton
            size="l"
          />
          <br />
          <br />
        </Flex>
        <Flex direction="column">
          <ContrastBox fullWidth>
            <Search
              color="white"
              placeholder="Find all the answers..."
              fullWidth
              withRoundButton
            />
            <br />
            <br />
            <Search
              color="white"
              placeholder="Find all the answers..."
              withRoundButton
              size="l"
            />
            <br />
            <br />
          </ContrastBox>
        </Flex>
      </Flex>
    </DocsBlock>
  </div>
);

export default searches;
