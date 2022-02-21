import * as React from 'react';
import Link, {LINK_ALIGN, LINK_SIZE, LINK_TRANSFORM} from './Link';
import Text from './Text';
import {shallow} from 'enzyme';
import {TEXT_WEIGHT} from './textConsts';

test('render', () => {
  const link = shallow(<Link href="test.com">Test</Link>);

  expect(link.hasClass('sg-text--link')).toBeTruthy();
  expect(link.props().href).toEqual('test.com');
});

test('render Text', () => {
  const link = shallow(<Link href="test.com">Test</Link>);

  expect(link.find(Text)).toBeTruthy();
});

test('size', () => {
  const link = shallow(
    <Link href="#" size={LINK_SIZE.SMALL}>
      Test
    </Link>
  ).dive();
  const responsiveSizeLink = shallow(
    <Link size={['xsmall', 'small', null, 'large']}>Test</Link>
  ).dive();

  expect(link.hasClass('sg-text--small')).toBeTruthy();
  expect(
    responsiveSizeLink.hasClass(
      'sg-text--xsmall md:sg-text--small xl:sg-text--large'
    )
  ).toBeTruthy();
});

it('size is responsive prop', () => {
  const size = [LINK_SIZE.SMALL, LINK_SIZE.XXLARGE, null, LINK_SIZE.XXXLARGE];
  const component = shallow(
    <Link href="#" size={size}>
      Test
    </Link>
  );

  expect(component.prop('size')).toEqual(size);
});

test('color', () => {
  const link = shallow(
    <Link href="#" color="text-white">
      Test
    </Link>
  ).dive();

  expect(link.hasClass('sg-text--text-white')).toBeTruthy();
});

test('unstyled', () => {
  const link = shallow(
    <Link href="#" unstyled>
      Test
    </Link>
  );

  expect(link.hasClass('sg-text--link-unstyled')).toBeTruthy();
  expect(link.hasClass('sg-text--link')).toBeFalsy();
});

test('underlined', () => {
  const link = shallow(
    <Link href="#" underlined>
      Test
    </Link>
  );

  expect(link.hasClass('sg-text--link-underlined')).toBeTruthy();
  expect(link.hasClass('sg-text--link-unstyled')).toBeFalsy();
  expect(link.hasClass('sg-text--link')).toBeFalsy();
});

it('weight is responsive prop', () => {
  const component = shallow(
    <Link
      weight={[TEXT_WEIGHT.BOLD, TEXT_WEIGHT.REGULAR, null, TEXT_WEIGHT.BOLD]}
      href="#"
    >
      Test
    </Link>
  );

  expect(
    component.hasClass('sg-text--bold md:sg-text--regular xl:sg-text--bold')
  ).toEqual(true);
});

it('transform is responsive prop', () => {
  const transform = [LINK_TRANSFORM.CAPITALIZE, LINK_TRANSFORM.LOWERCASE];
  const component = shallow(
    <Link href="#" transform={transform}>
      Test
    </Link>
  );

  expect(component.prop('transform')).toEqual(transform);
});

it('align is responsive prop', () => {
  const align = [LINK_ALIGN.CENTER, LINK_ALIGN.CENTER];
  const component = shallow(
    <Link href="#" align={align}>
      Test
    </Link>
  );

  expect(component.prop('align')).toEqual(align);
});

it('noWrap is responsive prop', () => {
  const noWrap = [true];
  const component = shallow(
    <Link href="#" noWrap={noWrap}>
      Test
    </Link>
  );

  expect(component.prop('noWrap')).toEqual(noWrap);
});

it('breakWords is responsive prop', () => {
  const breakWords = [true];
  const component = shallow(
    <Link href="#" breakWords={breakWords}>
      Test
    </Link>
  );

  expect(component.prop('breakWords')).toEqual(breakWords);
});
