import * as React from 'react';
import Media from './Media';
import {shallow} from 'enzyme';

const defaultProps = {
  contentArray: [
    <span key={1} className="sg-text sg-text--text-gray-70 sg-text--link">
      The Goat
    </span>,
    <span key={2}>Master </span>,
  ],
  aside: <div>aside</div>,
};
test('render', () => {
  const media = shallow(<Media {...defaultProps} />);
  expect(media.hasClass('sg-media')).toEqual(true);
  expect(media.find('.sg-media__content')).toHaveLength(
    defaultProps.contentArray.length
  );
  expect(media.hasClass('sg-media--white')).toEqual(true);
});
test('testing modifications - all on', () => {
  const media = shallow(
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
  expect(media.hasClass('sg-media--clickable')).toEqual(true);
  expect(media.hasClass('sg-media--to-right')).toEqual(true);
  expect(media.hasClass('sg-media--no-padding')).toEqual(true);
  expect(media.hasClass('sg-media--gray-20')).toEqual(true);
  expect(media.hasClass('sg-media--blue-20')).toEqual(false);
  expect(media.hasClass('sg-media--transparent')).toEqual(false);
  expect(media.hasClass('sg-media--white')).toEqual(false);
  expect(media.find('.sg-media__content--spaced-bottom')).toHaveLength(
    defaultProps.contentArray.length
  );
  expect(media.find('.sg-media__content--small')).toHaveLength(
    defaultProps.contentArray.length
  );
});
test('testing modifications - all off', () => {
  const media = shallow(<Media {...defaultProps} />);
  expect(media.hasClass('sg-media--clickable')).toEqual(false);
  expect(media.hasClass('sg-media--white')).toEqual(true);
  expect(media.hasClass('sg-media--gray-20')).toEqual(false);
  expect(media.hasClass('sg-media--blue-20')).toEqual(false);
  expect(media.hasClass('sg-media--transparent')).toEqual(false);
  expect(media.hasClass('sg-media--to-right')).toEqual(false);
  expect(media.hasClass('sg-media--no-padding')).toEqual(false);
  expect(media.find('.sg-media__content--spaced-bottom')).toHaveLength(0);
  expect(media.find('.sg-media__content--small')).toHaveLength(0);
});
