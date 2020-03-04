import React from 'react';
import {shallow, mount} from 'enzyme';
import {act} from 'react-dom/test-utils';

import Dropdown from './DropdownDeprecated';

const testItems = [
  {label: 'text-1', url: 'url-1'},
  {label: 'text-2', url: 'url-2'},
  {label: 'text-3', url: 'url-3'},
];

const testProps = {
  links: testItems,
  name: 'brainly',
};

describe('<Dropdown />', () => {
  it('should render name', () => {
    const component = shallow(<Dropdown {...testProps} />);

    expect(component.find('p').text()).toMatch(testProps.name);
  });

  it('should render links with proper data', () => {
    const component = shallow(<Dropdown {...testProps} />);

    component.simulate('click');

    const link = component.find('a').at(0);

    expect(link.prop('href')).toBe(testItems[0].url);
  });

  it('should not be open by default', () => {
    const component = shallow(<Dropdown {...testProps} />);

    expect(component.find('.sg-dropdown__items')).toHaveLength(0);
  });

  it('should open dropdown on click', () => {
    const component = shallow(<Dropdown {...testProps} />);

    component.simulate('click');
    expect(component.find('.sg-dropdown__items')).toHaveLength(1);
  });

  it('should close dropdown when click outside', () => {
    const component = mount(<Dropdown {...testProps} />);

    act(() => {
      component.simulate('click');
      document.dispatchEvent(new Event('click')); // simulate bubbling
    });

    component.update();
    expect(component.find('.sg-dropdown__items')).toHaveLength(1);

    act(() => {
      document.dispatchEvent(new Event('click'));
    });

    component.update();
    expect(component.find('.sg-dropdown__items')).toHaveLength(0);
  });
});
