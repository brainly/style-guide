import * as React from 'react';
import FileHandler from './FileHandler';
import {render} from '@testing-library/react';

const mockCallback = jest.fn();

describe('FileHandler', () => {
  test('renders with icon', () => {
    const fileHandler = render(<FileHandler>example text</FileHandler>);

    expect(fileHandler.queryByText('example text')).toBeTruthy();
    expect(fileHandler.queryByRole('img')).toBeTruthy();
  });

  test('renders close button when onClose', () => {
    const fileHandler = render(
      <FileHandler onClose={mockCallback}>example text</FileHandler>
    );

    expect(fileHandler.queryByRole('button', {name: 'Close'})).toBeTruthy();
  });

  test('renders color white', () => {
    const fileHandler = render(
      <FileHandler color="white">example text</FileHandler>
    );

    expect(
      fileHandler.container.firstElementChild.classList.contains(
        'sg-file-handler--white'
      )
    ).toEqual(true);
  });

  test('renders proper icon when iconType', () => {
    const fileHandler = render(
      <FileHandler iconType="heart">example text</FileHandler>
    );

    expect(fileHandler.queryByRole('img', {name: /heart/})).toBeTruthy();
  });

  test('renders img when thumbnailSrc', () => {
    const fileHandler = render(
      <FileHandler thumbnailSrc="http://brainly.com/thumbnail">
        example text
      </FileHandler>
    );

    expect(fileHandler.queryByRole('img', {name: /attachment/})).toBeFalsy();
    const thumbnail = fileHandler.getByRole('img');

    expect(thumbnail.getAttribute('src')).toEqual(
      'http://brainly.com/thumbnail'
    );
  });

  test('renders Link when src', () => {
    const fileHandler = render(
      <FileHandler src="src">example text</FileHandler>
    );

    expect(fileHandler.queryByRole('link')).toBeTruthy();
  });

  test('renders Spinner when loading', () => {
    const fileHandler = render(<FileHandler loading>example text</FileHandler>);

    expect(fileHandler.queryByRole('status')).toBeTruthy();
    expect(fileHandler.queryByRole('img')).toBeFalsy();
  });
});
