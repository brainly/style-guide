import React from 'react';
import DocsBlock, {CONTENT_BOX_CLASS} from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
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

    <DocsBlock info="Menu list">
      <div className={CONTENT_BOX_CLASS}>
        <MenuList items={menuItems}/>
      </div>
    </DocsBlock>
    <DocsBlock info="Menu list - small">
      <div className={CONTENT_BOX_CLASS}>
        <MenuList items={menuItems} size={SIZE.SMALL}/>
      </div>
    </DocsBlock>
    <DocsBlock info="Menu list - large">
      <div className={CONTENT_BOX_CLASS}>
        <MenuList items={menuItems} size={SIZE.LARGE}/>
      </div>
    </DocsBlock>
  </div>;

export default ListItems;
