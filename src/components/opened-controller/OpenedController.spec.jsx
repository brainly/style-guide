import React from 'react';
import OpenedController from './OpenedController';
import {shallow} from 'enzyme';

describe('<OpenedController />', () => {
  it('renders with children as a function', () => {
    const childAsAFunction = jest.fn();
    const component = shallow(<OpenedController>{childAsAFunction}</OpenedController>);

    expect(childAsAFunction).toHaveBeenCalled();
    expect(childAsAFunction.mock.calls[0]).toEqual([{isOpened: false, onToggle: component.instance().onToggle}]);
  });

  it('toggling does change state of component', () => {
    const childAsAFunction = jest.fn();
    const component = shallow(<OpenedController>{childAsAFunction}</OpenedController>);

    component.instance().onToggle(); // open
    expect(childAsAFunction).toHaveBeenCalledTimes(2);
    expect(childAsAFunction.mock.calls[1]).toEqual([{isOpened: true, onToggle: component.instance().onToggle}]);
  });

  it('toggling as opened calls optional onOpen callback', () => {
    const onOpen = jest.fn();
    const childAsAFunction = jest.fn();
    const component = shallow(<OpenedController onOpen={onOpen}>{childAsAFunction}</OpenedController>);

    expect(onOpen).not.toHaveBeenCalled();
    component.instance().onToggle(); // open
    expect(onOpen).toHaveBeenCalled();
  });

  it('toggling as closed calls optional onClose callback', () => {
    const onClose = jest.fn();
    const childAsAFunction = jest.fn();
    const component = shallow(<OpenedController onClose={onClose}>{childAsAFunction}</OpenedController>);

    expect(onClose).not.toHaveBeenCalled();
    component.instance().onToggle(); // open
    component.instance().onToggle(); // close
    expect(onClose).toHaveBeenCalled();
  });
});
