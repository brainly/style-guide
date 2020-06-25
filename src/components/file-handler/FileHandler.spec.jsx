import React from 'react';
import {shallow} from 'enzyme';

import FileHandler from './FileHandler';
import Icon from 'icons/Icon';
import Text from '../text/Text';
import Link from '../text/Link';
import Spinner from '../spinner/Spinner';

const mockCallback = jest.fn();

describe('FileHandler', () => {
  test('renders with icon', () => {
    const fileHandler = shallow(<FileHandler>example text</FileHandler>);

    expect(fileHandler.hasClass('sg-file-handler')).toEqual(true);
    expect(fileHandler.find(Text)).toHaveLength(1);
    expect(fileHandler.find(Icon).prop('type')).toBe('attachment');
  });

  test('renders close button when onClose', () => {
    const fileHandler = shallow(
      <FileHandler onClose={mockCallback}>example text</FileHandler>
    );

    expect(
      fileHandler.find('button').hasClass('sg-file-handler__close-button')
    ).toEqual(true);
    expect(fileHandler.find('button').find(Icon)).toHaveLength(1);
  });

  test('renders color mono', () => {
    const fileHandler = shallow(
      <FileHandler color="mono">example text</FileHandler>
    );

    expect(fileHandler.hasClass('sg-file-handler--white')).toEqual(true);
  });

  test('renders proper icon when iconType', () => {
    const fileHandler = shallow(
      <FileHandler iconType="heart">example text</FileHandler>
    );

    expect(fileHandler.find(Icon).prop('type')).toBe('heart');
  });

  test('renders img when thumbnailSrc', () => {
    const fileHandler = shallow(
      <FileHandler thumbnailSrc="thumbnailSrc">example text</FileHandler>
    );

    expect(fileHandler.find(Icon)).toHaveLength(0);
    expect(fileHandler.find('img')).toHaveLength(1);
  });

  test('renders Link when src', () => {
    const fileHandler = shallow(
      <FileHandler src="src">example text</FileHandler>
    );

    expect(fileHandler.find(Link)).toHaveLength(1);
    expect(fileHandler.find(Text)).toHaveLength(0);
  });

  test('renders Spinner when loading', () => {
    const fileHandler = shallow(
      <FileHandler loading>example text</FileHandler>
    );

    expect(fileHandler.find(Spinner)).toHaveLength(1);
    expect(fileHandler.find(Icon)).toHaveLength(0);
  });

  test('passes onClick when onClick and thumbnailSrc', () => {
    const fileHandler = shallow(
      <FileHandler onClick={mockCallback} thumbnailSrc="thumbnailSrc">
        example text
      </FileHandler>
    );

    expect(fileHandler.find('img').prop('onClick')).toBe(mockCallback);
    expect(fileHandler.find(Icon)).toHaveLength(0);
  });
});
