import React from 'react';
import {shallow} from 'enzyme';
import ListItemIcon from './ListItemIcon';

describe('<ListItemIcon>', () => {
  it('renders', () => {
    const listItemIcon = shallow(
      <ListItemIcon />
    );

    expect(listItemIcon.hasClass('sg-list__icon')).toEqual(true);
  });

  it('renders with small right spcing', () => {
    const listItemIcon = shallow(
      <ListItemIcon small />
    );

    expect(listItemIcon.hasClass('sg-list__icon--spacing-right-small')).toEqual(true);
  });

  it('renders children', () => {
    const children = <div>Text</div>;
    const listItemIcon = shallow(
      <ListItemIcon>{children}</ListItemIcon>
    );

    expect(listItemIcon.contains(children)).toEqual(true);
  });
});
