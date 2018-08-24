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

  it('renders additional classes', () => {
    const list = shallow(
      <ListItem className="m4l">42</ListItem>
    );

    expect(list.hasClass('sg-list__element')).toEqual(true);
    expect(list.hasClass('m4l')).toEqual(true);
  });
});
