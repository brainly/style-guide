import * as React from 'react';
import TopLayer, {SIZE} from './TopLayer';
import {queryByText, render} from '@testing-library/react';
import {fireEvent} from '@storybook/testing-library';

it('render', () => {
  const topLayer = render(<TopLayer>some text</TopLayer>);

  expect(
    topLayer.container.firstElementChild.classList.contains('sg-toplayer')
  ).toEqual(true);
});

it('default size', () => {
  const topLayer = render(<TopLayer>some text</TopLayer>);

  Object.values(SIZE).forEach(size => {
    expect(
      topLayer.container.firstElementChild.classList.contains(
        `sg-toplayer--${size}`
      )
    ).toEqual(false);
  });
});

it('check if close button exists', () => {
  const mockCallback = jest.fn();
  const topLayer = render(<TopLayer onClose={mockCallback} />);

  expect(topLayer.queryByRole('button')).toBeTruthy();
});

it('check when no close button', () => {
  const topLayer = render(<TopLayer />);

  expect(topLayer.queryByRole('button')).toBeFalsy();
});

it('click action', () => {
  const mockCallback = jest.fn();
  const topLayer = render(<TopLayer onClose={mockCallback} />);
  const button = topLayer.queryByRole('button');

  fireEvent.click(button);

  expect(mockCallback.mock.calls).toHaveLength(1);
});

it('key down action', () => {
  const mockCallback = jest.fn();
  const topLayer = render(
    <TopLayer onClose={mockCallback} onCloseButtonKeyDown={mockCallback} />
  );
  const button = topLayer.queryByRole('button');

  fireEvent.keyDown(button);

  expect(mockCallback.mock.calls).toHaveLength(1);
});

it('size', () => {
  const size = SIZE.SMALL;
  const topLayer = render(<TopLayer size={size}>some text</TopLayer>);

  expect(
    topLayer.container.firstElementChild.classList.contains(
      `sg-toplayer--${size}`
    )
  ).toEqual(true);
});

it('testing modifications - all on', () => {
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

it('testing modifications - all off', () => {
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

it('testing wrapper', () => {
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

it('testing wrapper without padding', () => {
  const topLayer = render(<TopLayer noPadding>some text</TopLayer>);

  expect(
    topLayer.container.firstElementChild.querySelector(
      '.sg-toplayer__wrapper--no-padding'
    )
  ).toBeTruthy();
});
