import React from 'react';
import Label from './Label';
import Icon from 'icons/Icon';
import Text from 'text/Text';
import {shallow} from 'enzyme';

describe('Label', () => {
  test('render', () => {
    const label = shallow(
      <Label type="default" color="blue">
        example label
      </Label>
    );

    expect(label.hasClass('sg-label')).toEqual(true);
    expect(label.hasClass('sg-label--blue-secondary-light')).toEqual(true);
  });

  test('render with icon', () => {
    const label = shallow(
      <Label type="default" iconType="star">
        example label
      </Label>
    );
    const icon = label.find(Icon);

    expect(label.hasClass('sg-label')).toEqual(true);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual('star');
  });

  test('render type solid', () => {
    const label = shallow(
      <Label type="solid" color="mint">
        example label
      </Label>
    );

    expect(label.hasClass('sg-label')).toEqual(true);
    expect(label.hasClass('sg-label--mint-primary')).toEqual(true);
  });

  test('dark close button if default', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label type="default" color="mint" onClose={mockCallback}>
        example label
      </Label>
    );

    expect(label.find('.sg-label__close-button')).toHaveLength(1);
    expect(label.find('div').find(Icon)).toHaveLength(1);
    expect(
      label
        .find('div')
        .find(Icon)
        .props().color
    ).toEqual('dark');
  });

  test('clicking on close button calls onClose', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label type="solid" color="mint" onClose={mockCallback}>
        example label
      </Label>
    );

    const closeDivNode = label.find('.sg-label__close-button');

    closeDivNode.simulate('click');

    expect(mockCallback).toHaveBeenCalled();
  });

  test('has proper styles if default', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label
        type="default"
        color="mint"
        iconType="heart"
        onClose={mockCallback}
      >
        default label
      </Label>
    );

    const closeIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'close');
    const heartIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'heart');

    expect(label.hasClass('sg-label--mint-secondary-light')).toEqual(true);
    expect(closeIcon.props().color).toEqual('dark');
    expect(heartIcon.props().color).toEqual('dark');
    expect(label.find(Text).props().color).toEqual('default');
  });

  test('has proper styles if solid', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label type="solid" color="mint" iconType="heart" onClose={mockCallback}>
        default label
      </Label>
    );

    const closeIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'close');
    const heartIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'heart');

    expect(label.hasClass('sg-label--mint-primary')).toEqual(true);
    expect(closeIcon.props().color).toEqual('light');
    expect(heartIcon.props().color).toEqual('light');
    expect(label.find(Text).props().color).toEqual('white');
  });

  xtest('has proper styles if transparent', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label
        type="transparent"
        color="mint"
        iconType="heart"
        onClose={mockCallback}
      >
        default label
      </Label>
    );

    const closeIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'close');
    const heartIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'heart');

    expect(label.hasClass('sg-label--mint-primary')).toEqual(false);
    expect(label.hasClass('sg-label--mint-secondary-light')).toEqual(false);
    expect(closeIcon.props().color).toEqual('dark');
    expect(heartIcon.props().color).toEqual('mint');
    expect(label.find(Text).props().color).toEqual('default');
    expect(label.find('div').find(Icon)).toHaveLength(1);
  });

  test('has proper styles if transparent-color', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label
        type="transparent-color"
        color="mint"
        iconType="heart"
        onClose={mockCallback}
      >
        default label
      </Label>
    );

    const closeIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'close');
    const heartIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'heart');

    expect(label.hasClass('sg-label--mint-primary')).toEqual(false);
    expect(label.hasClass('sg-label--mint-secondary-light')).toEqual(false);
    expect(closeIcon.props().color).toEqual('mint');
    expect(heartIcon.props().color).toEqual('mint');
    expect(label.find(Text).props().color).toEqual('mint-dark');
  });
});
