import * as React from 'react';
import Subheadline from './Subheadline';
import {mount, shallow} from 'enzyme';
import {
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TYPE,
  SUBHEADLINE_ALIGN,
  SUBHEADLINE_TRANSFORM,
} from './subheadlineConsts';
import {TEXT_COLOR} from './Text';
test('render', () => {
  const subheadline = shallow(<Subheadline>Test</Subheadline>);
  expect(subheadline.hasClass('sg-subheadline')).toBeTruthy();
});
test('size', () => {
  const headline = shallow(
    <Subheadline size={SUBHEADLINE_SIZE.SMALL}>Test</Subheadline>
  );
  expect(headline.hasClass('sg-subheadline--small')).toBeTruthy();
});
it('size is responsive prop', () => {
  const component = shallow(
    <Subheadline
      size={[
        SUBHEADLINE_SIZE.SMALL,
        SUBHEADLINE_SIZE.XXLARGE,
        null,
        SUBHEADLINE_SIZE.XXXLARGE,
      ]}
    >
      Test
    </Subheadline>
  );
  expect(
    component.hasClass(
      'sg-subheadline--small md:sg-subheadline--xxlarge xl:sg-subheadline--xxxlarge'
    )
  ).toEqual(true);
});
test('type', () => {
  const headline = mount(
    <Subheadline type={SUBHEADLINE_TYPE.H3}>Test</Subheadline>
  );
  expect(headline.props().type).toEqual(SUBHEADLINE_TYPE.H3);
});
test('color', () => {
  const text = shallow(
    <Subheadline color={TEXT_COLOR['text-white']}>Test</Subheadline>
  );
  expect(text.hasClass('sg-subheadline--text-white')).toBeTruthy();
});
test('transform uppercase', () => {
  const headline = shallow(
    <Subheadline transform={SUBHEADLINE_TRANSFORM.UPPERCASE}>Test</Subheadline>
  );
  expect(headline.hasClass('sg-subheadline--uppercase')).toBeTruthy();
});
it('transform is responsive prop', () => {
  const component = shallow(
    <Subheadline
      transform={[
        SUBHEADLINE_TRANSFORM.UPPERCASE,
        SUBHEADLINE_TRANSFORM.LOWERCASE,
        null,
        SUBHEADLINE_TRANSFORM.CAPITALIZE,
      ]}
    >
      Test
    </Subheadline>
  );
  expect(
    component.hasClass(
      'sg-subheadline--uppercase md:sg-subheadline--lowercase xl:sg-subheadline--capitalize'
    )
  ).toEqual(true);
});
test('extra align left', () => {
  const headline = shallow(
    <Subheadline align={SUBHEADLINE_ALIGN.LEFT}>Test</Subheadline>
  );
  expect(headline.hasClass('sg-subheadline--to-left')).toBeTruthy();
});
it('align is responsive prop', () => {
  const component = shallow(
    <Subheadline
      align={[
        SUBHEADLINE_ALIGN.LEFT,
        SUBHEADLINE_ALIGN.RIGHT,
        null,
        SUBHEADLINE_ALIGN.CENTER,
      ]}
    >
      Test
    </Subheadline>
  );
  expect(
    component.hasClass(
      'sg-subheadline--to-left md:sg-subheadline--to-right xl:sg-subheadline--to-center'
    )
  ).toEqual(true);
});