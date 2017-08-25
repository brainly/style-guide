import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContrastBox from 'components/ContrastBox';
import List from '../List';
import MenuList, {SIZE} from '../MenuList';

const firstString = 'One two three';
const firstStringLong = firstString + 'This element has icon aligned to the first line ' +
  'please take a look how cool it is!!';
const secondString = 'Two three four';
const secondStringLong = secondString + 'This element does not have icon aligned to the first line ' +
  'but its still cool!';
const thirdString = 'Three four five';
const secondExampleLongest = secondStringLong + ' Yeah!! Yeah!';
const items = [firstString, secondString, thirdString];
const exampleItems = [firstStringLong, secondStringLong, thirdString];
const exampleSmall = [firstStringLong, secondExampleLongest, thirdString];
const menuItem1 = {text: firstString, href: '#'};
const menuItem2 = {text: secondString, href: '#'};
const menuItem3 = {text: thirdString, href: '#'};
const menuItems = [menuItem1, menuItem2, menuItem3];

const ListItems = () =>
  <div>
    <DocsBlock info="Default">
      <ContrastBox>
        <List items={items} />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Small list">
      <ContrastBox>
        <List items={items} small />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="List with spacings">
      <ContrastBox>
        <List items={items} spaced />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Example">
      <ContrastBox>
        <List items={exampleItems} />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Example (small text)">
      <ContrastBox>
        <List items={exampleSmall} small />
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Menu list">
      <ContentBox>
        <MenuList items={menuItems} />
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Menu list - small">
      <ContentBox>
        <MenuList items={menuItems} size={SIZE.SMALL} />
      </ContentBox>
    </DocsBlock>
    <DocsBlock info="Menu list - large">
      <ContentBox>
        <MenuList items={menuItems} size={SIZE.LARGE} />
      </ContentBox>
    </DocsBlock>
  </div>;

export default ListItems;
