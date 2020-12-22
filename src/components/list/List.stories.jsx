import React from 'react';
import List from './List';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import Icon from '../icons/Icon';
import Text from '../text/Text';

export default {
  title: 'Components/List',
  parameters: {
    component: List,
    subcomponents: {ListItem, ListItemIcon},
  },
};

export const Default = args => {
  return (
    <List {...args}>
      <ListItem>Element one</ListItem>
      <ListItem>Element two</ListItem>
      <ListItem>Element three</ListItem>
    </List>
  );
};

Default.args = {
  children: null,
};

Default.argTypes = {
  children: {control: null},
  spaced: {control: 'boolean'},
};

export const WithIcon = () => (
  <List>
    <ListItem>
      <ListItemIcon>
        <Icon color="dark" type="arrow_right" size={16} />
      </ListItemIcon>
      <Text>Element one</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon color="dark" type="arrow_right" size={16} />
      </ListItemIcon>
      <Text>Element two</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon color="dark" type="arrow_right" size={16} />
      </ListItemIcon>
      <Text>Element three</Text>
    </ListItem>
  </List>
);

export const WithSmallerIconSpacing = () => (
  <List>
    <ListItem>
      <ListItemIcon small>
        <Icon color="dark" type="arrow_right" size={16} />
      </ListItemIcon>
      <Text>Element one</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon small>
        <Icon color="dark" type="arrow_right" size={16} />
      </ListItemIcon>
      <Text>Element two</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon small>
        <Icon color="dark" type="arrow_right" size={16} />
      </ListItemIcon>
      <Text>Element three</Text>
    </ListItem>
  </List>
);

export const WithSpacedItems = () => (
  <List spaced>
    <ListItem>
      <ListItemIcon>
        <Icon color="dark" type="dot" size={16} />
      </ListItemIcon>
      <Text>Element one</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon color="dark" type="dot" size={16} />
      </ListItemIcon>
      <Text>Element two</Text>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Icon color="dark" type="dot" size={16} />
      </ListItemIcon>
      <Text>Element three</Text>
    </ListItem>
  </List>
);
