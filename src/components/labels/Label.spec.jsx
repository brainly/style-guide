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

    expect(label.hasClass('sg-label')).toBe(true);
    expect(label.hasClass('sg-label--blue-secondary-light')).toBe(true);
  });

  test('render with icon', () => {
    const label = shallow(
      <Label type="default" iconType="star">
        example label
      </Label>
    );
    const icon = label.find(Icon);

    expect(label.hasClass('sg-label')).toBe(true);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toBe('star');
  });

  test('render type solid', () => {
    const label = shallow(
      <Label type="solid" color="mint">
        example label
      </Label>
    );

    expect(label.hasClass('sg-label')).toBe(true);
    expect(label.hasClass('sg-label--mint-primary')).toBe(true);
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
        .prop('color')
    ).toBe('dark');
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

    expect(label.hasClass('sg-label--mint-secondary-light')).toBe(true);
    expect(closeIcon.prop('color')).toBe('dark');
    expect(heartIcon.prop('color')).toBe('dark');
    expect(label.find(Text).prop('color')).toBe('default');
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

    expect(label.hasClass('sg-label--mint-primary')).toBe(true);
    expect(closeIcon.prop('color')).toBe('light');
    expect(heartIcon.prop('color')).toBe('light');
    expect(label.find(Text).prop('color')).toBe('white');
  });

  test('has proper styles if transparent', () => {
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

    expect(label.hasClass('sg-label--mint-primary')).toBe(false);
    expect(label.hasClass('sg-label--mint-secondary-light')).toBe(false);
    expect(closeIcon.prop('color')).toBe('dark');
    expect(heartIcon.prop('color')).toBe('mint');
    expect(label.find(Text).prop('color')).toBe('default');
    expect(label.find('div').find(Icon)).toHaveLength(2);
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

    expect(label.hasClass('sg-label--mint-primary')).toBe(false);
    expect(label.hasClass('sg-label--mint-secondary-light')).toBe(false);
    expect(closeIcon.prop('color')).toBe('mint');
    expect(heartIcon.prop('color')).toBe('mint');
    expect(label.find(Text).prop('color')).toBe('mint-dark');
  });
});
