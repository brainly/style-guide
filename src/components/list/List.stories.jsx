import * as React from 'react';
import List from './List';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import Icon from '../icons/Icon';
import Text from '../text/Text.vanex';

export default {
  title: 'Components/List',
  component: List,
  subcomponents: {ListItem, ListItemIcon},
  argTypes: {
    children: {control: null},
    spaced: {control: 'boolean'},
  },
  args: {
    children: [
      <ListItem key="one">Element one</ListItem>,
      <ListItem key="two">Element two</ListItem>,
      <ListItem key="three">Element three</ListItem>,
    ],
  },
};

export const Default = args => <List {...args} />;

export const WithIcon = () => (
  <List>
    <ListItem>
      <ListItemIcon>
        <Icon color="icon-black" type="chevron_right" size={16} />
      </ListItemIcon>
      <Text>Element one</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon color="icon-black" type="chevron_right" size={16} />
      </ListItemIcon>
      <Text>Element two</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon color="icon-black" type="chevron_right" size={16} />
      </ListItemIcon>
      <Text>Element three</Text>
    </ListItem>
  </List>
);

export const WithSmallerIconSpacing = () => (
  <List>
    <ListItem>
      <ListItemIcon small>
        <Icon color="icon-black" type="chevron_right" size={16} />
      </ListItemIcon>
      <Text>Element one</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon small>
        <Icon color="icon-black" type="chevron_right" size={16} />
      </ListItemIcon>
      <Text>Element two</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon small>
        <Icon color="icon-black" type="chevron_right" size={16} />
      </ListItemIcon>
      <Text>Element three</Text>
    </ListItem>
  </List>
);

export const WithSpacedItems = () => (
  <List spaced>
    <ListItem>
      <ListItemIcon>
        <Icon color="icon-black" type="dot" size={16} />
      </ListItemIcon>
      <Text>Element one</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon color="icon-black" type="dot" size={16} />
      </ListItemIcon>
      <Text>Element two</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon color="icon-black" type="dot" size={16} />
      </ListItemIcon>
      <Text>Element three</Text>
    </ListItem>
  </List>
);
