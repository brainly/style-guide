import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContrastBox from 'components/ContrastBox';
import List from '../List';
import ListItem from '../ListItem';
import ListItemIcon from '../ListItemIcon';
import Icon, {TYPE as ICON_TYPE, ICON_COLOR} from '../../icons/Icon';
import Text, {TEXT_SIZE} from 'text/Text';
import Flex from '../../flex/Flex';

import MenuList, {SIZE} from '../MenuList';

const firstString = 'One two three';
const firstStringLong =
  `${firstString}This element has icon aligned to the first line ` +
  `please take a look how cool it is!!`;
const secondString = 'Two three four';
const secondStringLong =
  `${secondString}This element does not have icon aligned to the first line ` +
  `but its still cool!`;
const thirdString = 'Three four five';
const secondExampleLongest = `${secondStringLong} Yeah!! Yeah!`;
const items = [firstString, secondString, thirdString];
const exampleItems = [firstStringLong, secondStringLong, thirdString];
const exampleSmall = [firstStringLong, secondExampleLongest, thirdString];
const menuItem1 = {text: firstString, href: '#'};
const menuItem2 = {text: secondString, href: '#'};
const menuItem3 = {text: thirdString, href: '#'};
const menuItems = [menuItem1, menuItem2, menuItem3];

const componentIsDeprecated = (
  <Flex marginBottom="m">
    <Text color="text-red-60" size="small">
      This component is deprecated
    </Text>
  </Flex>
);

const ListItems = () => (
  <div>
    <DocsBlock info="Default with icon ARROW_RIGHT">
      <ContrastBox>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Icon
                  color={ICON_COLOR['icon-white']}
                  type={ICON_TYPE.ARROW_RIGHT}
                  size={18}
                />
              </ListItemIcon>
              <Text size={TEXT_SIZE.XLARGE}>{item}</Text>
            </ListItem>
          ))}
        </List>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Small list">
      <ContrastBox>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon small>
                <Icon
                  color={ICON_COLOR['icon-white']}
                  type={ICON_TYPE.ARROW_RIGHT}
                  size={14}
                />
              </ListItemIcon>
              <Text>{item}</Text>
            </ListItem>
          ))}
        </List>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="List with spacings">
      <ContrastBox>
        <List spaced>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Icon
                  color={ICON_COLOR['icon-white']}
                  type={ICON_TYPE.ARROW_RIGHT}
                  size={18}
                />
              </ListItemIcon>
              <Text size={TEXT_SIZE.XLARGE}>{item}</Text>
            </ListItem>
          ))}
        </List>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Example">
      <ContrastBox>
        <List>
          {exampleItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Icon
                  color={ICON_COLOR['icon-white']}
                  type={ICON_TYPE.ARROW_RIGHT}
                  size={18}
                />
              </ListItemIcon>
              <Text size={TEXT_SIZE.XLARGE}>{item}</Text>
            </ListItem>
          ))}
        </List>
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Example (small text)">
      <ContrastBox>
        <List>
          {exampleSmall.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon small>
                <Icon
                  color={ICON_COLOR['icon-white']}
                  type={ICON_TYPE.ARROW_RIGHT}
                  size={14}
                />
              </ListItemIcon>
              <Text>{item}</Text>
            </ListItem>
          ))}
        </List>
      </ContrastBox>
    </DocsBlock>

    <div>
      <DocsBlock
        info="Menu list (deprecated)"
        additionalInfo={componentIsDeprecated}
      >
        <ContentBox>
          <MenuList items={menuItems} />
        </ContentBox>
      </DocsBlock>
      <DocsBlock
        info="Menu list - small (deprecated)"
        additionalInfo={componentIsDeprecated}
      >
        <ContentBox>
          <MenuList items={menuItems} size={SIZE.SMALL} />
        </ContentBox>
      </DocsBlock>
      <DocsBlock
        info="Menu list - large (deprecated)"
        additionalInfo={componentIsDeprecated}
      >
        <ContentBox>
          <MenuList items={menuItems} size={SIZE.LARGE} />
        </ContentBox>
      </DocsBlock>
    </div>
  </div>
);

export default ListItems;
