import * as React from 'react';
import Label from './Label';
import Icon from 'icons/Icon';
import Text from 'text/Text.vanex';
import {shallow} from 'enzyme';

describe('Label', () => {
  test('render', () => {
    const label = shallow(
      <Label type="default" color="blue">
        example label
      </Label>
    );

    expect(label.hasClass('sg-label')).toBe(true);
    expect(label.hasClass('sg-label--blue-20')).toBe(true);
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
      <Label type="solid" color="green">
        example label
      </Label>
    );

    expect(label.hasClass('sg-label')).toBe(true);
    expect(label.hasClass('sg-label--green-60')).toBe(true);
  });

  test('icon-black color close button is default', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label type="default" color="green" onClose={mockCallback}>
        example label
      </Label>
    );

    expect(label.find('.sg-label__close-button')).toHaveLength(1);
    expect(label.find('div').find(Icon)).toHaveLength(1);
    expect(label.find('div').find(Icon).prop('color')).toBe('icon-black');
  });

  test('clicking on close button calls onClose', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label type="solid" color="green" onClose={mockCallback}>
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
        color="green"
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

    expect(label.hasClass('sg-label--green-20')).toBe(true);
    expect(closeIcon.prop('color')).toBe('icon-black');
    expect(heartIcon.prop('color')).toBe('icon-black');
    expect(label.find(Text).prop('color')).toBe('text-black');
  });

  test('has proper styles if solid', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label type="solid" color="green" iconType="heart" onClose={mockCallback}>
        default label
      </Label>
    );

    const closeIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'close');
    const heartIcon = label
      .find('Icon')
      .findWhere(el => el.prop('type') === 'heart');

    expect(label.hasClass('sg-label--green-60')).toBe(true);
    expect(closeIcon.prop('color')).toBe('icon-white');
    expect(heartIcon.prop('color')).toBe('icon-white');
    expect(label.find(Text).prop('color')).toBe('text-white');
  });

  test('has proper styles if transparent', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label
        type="transparent"
        color="green"
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

    expect(label.hasClass('sg-label--green-50')).toBe(false);
    expect(label.hasClass('sg-label--green-20')).toBe(false);
    expect(closeIcon.prop('color')).toBe('icon-black');
    expect(heartIcon.prop('color')).toBe('icon-green-50');
    expect(label.find(Text).prop('color')).toBe('text-black');
    expect(label.find('div').find(Icon)).toHaveLength(2);
  });

  test('has proper styles if transparent-color', () => {
    const mockCallback = jest.fn();
    const label = shallow(
      <Label
        type="transparent-color"
        color="green"
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

    expect(label.hasClass('sg-label--green-50')).toBe(false);
    expect(label.hasClass('sg-label--green-20')).toBe(false);
    expect(closeIcon.prop('color')).toBe('icon-green-50');
    expect(heartIcon.prop('color')).toBe('icon-green-50');
    expect(label.find(Text).prop('color')).toBe('text-green-60');
  });
});
