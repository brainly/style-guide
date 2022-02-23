import * as React from 'react';
import {mount} from 'enzyme';
import Transition from './Transition';

describe('<Transition />', () => {
  it('renders children', () => {
    const wrapper = mount(<Transition active>content text</Transition>);

    expect(wrapper.containsMatchingElement('content text')).toBe(true);
  });
});
