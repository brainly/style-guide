import {shallow} from 'enzyme';
import React from 'react';
import List from './List';

describe('<List>', () => {
  it('renders', () => {
    const list = shallow(<List />);

    expect(list.hasClass('sg-list')).toEqual(true);
  });

  it('renders with spaced elements', () => {
    const list = shallow(<List spaced />);

    expect(list.hasClass('sg-list--spaced-elements')).toEqual(true);
  });

  test('renders with default spacing', () => {
    const list = shallow(<List />);

    expect(list.hasClass('sg-list--spaced-elements')).toEqual(false);
  });

  it('renders additional classes', () => {
    const list = shallow(<List className="m4l" />);

    expect(list.hasClass('sg-list')).toEqual(true);
    expect(list.hasClass('m4l')).toEqual(true);
  });
});
