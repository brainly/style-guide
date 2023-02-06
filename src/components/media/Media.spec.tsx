import * as React from 'react';
import Media from './Media';
import {render} from '@testing-library/react';

const defaultProps = {
  contentArray: [
    <span key={1} className="sg-text sg-text--text-gray-70 sg-text--link">
      The Goat
    </span>,
    <span key={2}>Master</span>,
  ],
  aside: <div>aside</div>,
};

test('render', () => {
  const media = render(<Media {...defaultProps} />);

  expect(media.queryByText('Master')).toBeTruthy();
  expect(media.queryByText('The Goat')).toBeTruthy();
});

test('testing modifications - all on', () => {
  const media = render(
    <Media
      {...defaultProps}
      color="gray-20"
      clickable
      toRight
      small
      noPadding
      spacedBottom
    />
  );
  const rootClasses = media.container.firstElementChild.classList;

  expect(rootClasses.contains('sg-media--clickable')).toEqual(true);
  expect(rootClasses.contains('sg-media--to-right')).toEqual(true);
  expect(rootClasses.contains('sg-media--no-padding')).toEqual(true);
  expect(rootClasses.contains('sg-media--gray-20')).toEqual(true);
  expect(rootClasses.contains('sg-media--blue-20')).toEqual(false);
  expect(rootClasses.contains('sg-media--transparent')).toEqual(false);
  expect(rootClasses.contains('sg-media--white')).toEqual(false);
  expect(
    media.container.firstElementChild.querySelectorAll(
      '.sg-media__content--spaced-bottom'
    )
  ).toHaveLength(defaultProps.contentArray.length);
  expect(
    media.container.firstElementChild.querySelectorAll(
      '.sg-media__content--small'
    )
  ).toHaveLength(defaultProps.contentArray.length);
});
test('testing modifications - all off', () => {
  const media = render(<Media {...defaultProps} />);
  const rootClasses = media.container.firstElementChild.classList;

  expect(rootClasses.contains('sg-media--clickable')).toEqual(false);
  expect(rootClasses.contains('sg-media--white')).toEqual(true);
  expect(rootClasses.contains('sg-media--gray-20')).toEqual(false);
  expect(rootClasses.contains('sg-media--blue-20')).toEqual(false);
  expect(rootClasses.contains('sg-media--transparent')).toEqual(false);
  expect(rootClasses.contains('sg-media--to-right')).toEqual(false);
  expect(rootClasses.contains('sg-media--no-padding')).toEqual(false);
});
