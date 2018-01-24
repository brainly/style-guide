import React from 'react';
import {shallow} from 'enzyme';
import ListItem from './ListItem';

describe('<ListItem>', () => {
  it('renders', () => {
    const listItem = shallow(
      <ListItem />
    );

    expect(listItem.hasClass('sg-list__element')).toEqual(true);
  });

  it('renders children', () => {
    const children = <div>Text</div>;
    const listItem = shallow(
      <ListItem>{children}</ListItem>
    );

    expect(listItem.contains(children)).toEqual(true);
  });
});
