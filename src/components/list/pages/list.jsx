import React from 'react';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import List from '../List';

const firstString = 'One two three';
const firstStringLong = firstString + 'This element has icon aligned to the first line ' +
  'please take a look how cool it is!!';
const secondString = 'Two three four';
const secondStringLong = secondString + 'This element does not have icon aligned to the first line ' +
  'but its still cool!';
const firstItem = {text: firstString};
const secondItem = {text: 'Two three four'};
const thirdItem = {text: 'Three four five'};
const firstExample = {text: firstStringLong};
const secondExample = {text: secondStringLong};
const secondExampleLongest = {text: secondStringLong + ' Yeah!! Yeah!'};
const items = [firstItem, secondItem, thirdItem];
const exampleItems = [firstExample, secondExample, thirdItem];
const exampleSmall = [firstExample, secondExampleLongest, thirdItem];

const ListItems = () =>
  <div>
    <DocsBlock info="Default">
      <ContrastBox>
        <List items={items}/>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Small list">
      <ContrastBox>
        <List items={items} small={true}/>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="List with spacings">
      <ContrastBox>
        <List items={items} spaced={true}/>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Example">
      <ContrastBox>
        <List items={exampleItems}/>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Example (small text)">
      <ContrastBox>
        <List items={exampleSmall} small={true}/>
      </ContrastBox>
    </DocsBlock>
  </div>;

export default ListItems;
