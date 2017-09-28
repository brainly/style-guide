import React from 'react';
import {shallow, mount} from 'enzyme';
import List, {ListItem} from 'list/List';
import Icon, {TYPE} from 'icons/Icon';

const testItem = 'test';
const items = [testItem];

describe('list', () => {
  test('render', () => {
    const list = shallow(
      <List items={items} />
    );

    expect(list.hasClass('sg-list')).toEqual(true);
  });

  test('with spaced elements', () => {
    const list = shallow(
      <List spaced items={items} />
    );

    expect(list.hasClass('sg-list--spaced-elements')).toEqual(true);
  });

  test('with default spacing', () => {
    const list = shallow(
      <List items={items} />
    );

    expect(list.hasClass('sg-list--spaced-elements')).toEqual(false);
  });
});

describe('list item', () => {

  test('render - no default icon', () => {
    const listItem = shallow(
      <ListItem text="test" />
    );
    const icon = listItem.find(Icon);
    const iconDiv = listItem.find('.sg-list__icon');

    expect(listItem.hasClass('sg-list__element')).toEqual(true);
    expect(icon).toHaveLength(0);
    expect(iconDiv).toHaveLength(0);
  });

  test('iconType', () => {
    const listItem = shallow(
      <ListItem text="test" iconType={TYPE.ARROW_RIGHT} />
    );
    const icon = listItem.find(Icon);
    const iconDiv = listItem.find('.sg-list__icon');

    expect(listItem.hasClass('sg-list__element')).toEqual(true);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual('arrow_right');
    expect(iconDiv).toHaveLength(1);
    expect(iconDiv.at(0).hasClass('sg-list__icon')).toEqual(true);
  });

  test('small right spacing', () => {
    const listItem = mount(
      <ListItem small text="test" />
    );

    expect(listItem.props().small).toEqual(true);
  });

  test('default spacing', () => {
    const listItem = mount(
      <ListItem text="test" />
    );

    expect(listItem.props().small).toEqual(undefined);
  });

  test('error when no text', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<ListItem />);

    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });
});
