import * as React from 'react';
import TopLayer from './TopLayer';
import {render} from '@testing-library/react';
import {fireEvent} from '@storybook/testing-library';

it('render', () => {
  const topLayer = render(<TopLayer>some text</TopLayer>);

  expect(topLayer.getByText('some text')).toEqual(true);
});

it('check if close button exists', () => {
  const mockCallback = jest.fn();
  const topLayer = render(<TopLayer onClose={mockCallback} />);

  expect(topLayer.getByRole('button')).toBeTruthy();
});

it('check when no close button', () => {
  const topLayer = render(<TopLayer />);

  expect(topLayer.queryByRole('button')).toBeFalsy();
});

it('click action', () => {
  const mockCallback = jest.fn();
  const topLayer = render(<TopLayer onClose={mockCallback} />);
  const button = topLayer.getByRole('button');

  fireEvent.click(button);

  expect(mockCallback.mock.calls).toHaveLength(1);
});

it('key down action', () => {
  const mockCallback = jest.fn();
  const topLayer = render(
    <TopLayer onClose={mockCallback} onCloseButtonKeyDown={mockCallback} />
  );
  const button = topLayer.getByRole('button');

  fireEvent.keyDown(button);

  expect(mockCallback.mock.calls).toHaveLength(1);
});
