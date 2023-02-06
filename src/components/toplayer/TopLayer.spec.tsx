import * as React from 'react';
import TopLayer, {SIZE} from './TopLayer';
import {queryByText, render} from '@testing-library/react';
import {fireEvent} from '@storybook/testing-library';

test('render', () => {
  const topLayer = render(<TopLayer>some text</TopLayer>);

  expect(
    topLayer.container.firstElementChild.classList.contains('sg-toplayer')
  ).toEqual(true);
});

test('default size', () => {
  const topLayer = render(<TopLayer>some text</TopLayer>);

  Object.values(SIZE).forEach(size => {
    expect(
      topLayer.container.firstElementChild.classList.contains(
        `sg-toplayer--${size}`
      )
    ).toEqual(false);
  });
});

test('check if close button exists', () => {
  const mockCallback = jest.fn();
  const topLayer = render(<TopLayer onClose={mockCallback} />);

  expect(topLayer.queryByRole('button')).toBeTruthy();
});

test('check when no close button', () => {
  const topLayer = render(<TopLayer />);

  expect(topLayer.queryByRole('button')).toBeFalsy();
});

test('click action', () => {
  const mockCallback = jest.fn();
  const topLayer = render(<TopLayer onClose={mockCallback} />);
  const button = topLayer.queryByRole('button');

  fireEvent.click(button);

  expect(mockCallback.mock.calls).toHaveLength(1);
});

test('key down action', () => {
  const mockCallback = jest.fn();
  const topLayer = render(
    <TopLayer onClose={mockCallback} onCloseButtonKeyDown={mockCallback} />
  );
  const button = topLayer.queryByRole('button');

  fireEvent.keyDown(button);

  expect(mockCallback.mock.calls).toHaveLength(1);
});

test('size', () => {
  const size = SIZE.SMALL;
  const topLayer = render(<TopLayer size={size}>some text</TopLayer>);

  expect(
    topLayer.container.firstElementChild.classList.contains(
      `sg-toplayer--${size}`
    )
  ).toEqual(true);
});

test('testing modifications - all on', () => {
  const topLayer = render(
    <TopLayer
      fill
      lead
      limitedWidth
      modal
      row
      smallSpaced
      splashScreen
      withBugbox
    >
      some text
    </TopLayer>
  );
  const topLayerClassList = topLayer.container.firstElementChild.classList;

  expect(topLayerClassList.contains('sg-toplayer--lead')).toEqual(true);
  expect(topLayerClassList.contains('sg-toplayer--fill')).toEqual(true);
  expect(topLayerClassList.contains('sg-toplayer--modal')).toEqual(true);
  expect(topLayerClassList.contains('sg-toplayer--with-bugbox')).toEqual(true);
  expect(topLayerClassList.contains('sg-toplayer--small-spaced')).toEqual(true);
  expect(topLayerClassList.contains('sg-toplayer--splash-screen')).toEqual(
    true
  );
  expect(topLayerClassList.contains('sg-toplayer--limited-width')).toEqual(
    true
  );
  expect(topLayerClassList.contains('sg-toplayer--row')).toEqual(true);
});

test('testing modifications - all off', () => {
  const topLayer = render(<TopLayer>some text</TopLayer>);
  const topLayerClassList = topLayer.container.firstElementChild.classList;

  expect(topLayerClassList.contains('sg-toplayer--lead')).toEqual(false);
  expect(topLayerClassList.contains('sg-toplayer--fill')).toEqual(false);
  expect(topLayerClassList.contains('sg-toplayer--modal')).toEqual(false);
  expect(topLayerClassList.contains('sg-toplayer--with-bugbox')).toEqual(false);
  expect(topLayerClassList.contains('sg-toplayer--small-spaced')).toEqual(
    false
  );
  expect(topLayerClassList.contains('sg-toplayer--splash-screen')).toEqual(
    false
  );
  expect(topLayerClassList.contains('sg-toplayer--limited-width')).toEqual(
    false
  );
  expect(topLayerClassList.contains('sg-toplayer--row')).toEqual(false);
});

test('testing wrapper', () => {
  const topLayer = render(<TopLayer>some text</TopLayer>);

  expect(
    queryByText(
      topLayer.container.firstElementChild.querySelector(
        '.sg-toplayer__wrapper'
      ),
      'some text'
    )
  ).toBeTruthy();
});

test('testing wrapper without padding', () => {
  const topLayer = render(<TopLayer noPadding>some text</TopLayer>);

  expect(
    topLayer.container.firstElementChild.querySelector(
      '.sg-toplayer__wrapper--no-padding'
    )
  ).toBeTruthy();
});
