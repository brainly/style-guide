// @flow

import React from 'react';
import {Modal} from './Modal';
import {mount, shallow} from 'enzyme';
import TopLayer from '../toplayer/TopLayer';
import Overlay from '../overlay/Overlay';

describe('<Modal />', () => {
  const testProps = {
    children: <div>yo yo</div>,
    closeModal: jest.fn(),
    onOverlayClick: jest.fn(),
    lead: true,
  };

  it('renders without crashing', () => {
    shallow(<Modal {...testProps} />);
  });

  it('has medium size by default', () => {
    const component = shallow(<Modal {...testProps} />);
    const toplayer = component.find(TopLayer);

    expect(toplayer.props().size).toEqual('medium');
  });

  it('has blue overlay by default', () => {
    const component = shallow(<Modal {...testProps} />);
    const overlay = component.find(Overlay);

    expect(overlay.props().color).toEqual('blue');
  });

  it('pass color prop to overlay', () => {
    const component = shallow(<Modal {...testProps} overlayColor="dark" />);
    const overlay = component.find(Overlay);

    expect(overlay.props().color).toEqual('dark');
  });

  it('triggers callbacks on close', () => {
    const component = shallow(<Modal {...testProps} />);
    const toplayer = component.find(TopLayer);

    toplayer.props().onClose();
    expect(testProps.closeModal).toHaveBeenCalledTimes(1);
  });

  it('triggers callbacks on click overlay', () => {
    const component = mount(<Modal {...testProps} />);

    const overlay = component.find(Overlay);
    const toplayer = component.find(TopLayer);

    toplayer.simulate('click');
    expect(testProps.onOverlayClick).toHaveBeenCalledTimes(0);

    overlay.simulate('click');
    expect(testProps.onOverlayClick).toHaveBeenCalledTimes(1);
  });
});
