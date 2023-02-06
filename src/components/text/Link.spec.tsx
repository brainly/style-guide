import * as React from 'react';
import Link, {LINK_ALIGN, LINK_SIZE, LINK_TRANSFORM} from './Link';
import Text from './Text';
import {render} from '@testing-library/react';
import {TEXT_WEIGHT} from './textConsts';
import classNames from 'classnames';

test('render', () => {
  const link = render(<Link href="test.com">Test</Link>);
  const linkNode = link.getByRole('link');

  expect(linkNode.getAttribute('href')).toEqual('test.com');
});

test('render Text', () => {
  const link = render(<Link href="test.com">Test</Link>);

  expect(link.queryByText('Test')).toBeTruthy();
});

test('size', () => {
  const link = render(
    <Link href="#" size={LINK_SIZE.SMALL}>
      Test
    </Link>
  );

  expect(
    link.container.firstElementChild.classList.contains('sg-text--small')
  ).toBeTruthy();
});

it('size is responsive prop', () => {
  const size = [LINK_SIZE.SMALL, LINK_SIZE.XXLARGE, null, LINK_SIZE.XXXLARGE];
  const component = render(
    <Link href="#" size={size}>
      Test
    </Link>
  );

  ['sg-text--small', 'md:sg-text--xxlarge', 'xl:sg-text--xxxlarge'].forEach(
    className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toBe(true);
    }
  );
});

test('color', () => {
  const link = render(
    <Link href="#" color="text-white">
      Test
    </Link>
  );

  expect(
    link.container.firstElementChild.classList.contains('sg-text--text-white')
  ).toBe(true);
});

test('unstyled', () => {
  const link = render(
    <Link href="#" unstyled>
      Test
    </Link>
  );

  const linkClasslist = link.container.firstElementChild.classList;

  expect(linkClasslist.contains('sg-text--link-unstyled')).toBeTruthy();
  expect(linkClasslist.contains('sg-text--link')).toBeFalsy();
});

test('underlined', () => {
  const link = render(
    <Link href="#" underlined>
      Test
    </Link>
  );
  const linkClasslist = link.container.firstElementChild.classList;

  expect(linkClasslist.contains('sg-text--link-underlined')).toBeTruthy();
  expect(linkClasslist.contains('sg-text--link-unstyled')).toBeFalsy();
  expect(linkClasslist.contains('sg-text--link')).toBeFalsy();
});

it('weight is responsive prop', () => {
  const component = render(
    <Link
      weight={[TEXT_WEIGHT.BOLD, TEXT_WEIGHT.REGULAR, null, TEXT_WEIGHT.BOLD]}
      href="#"
    >
      Test
    </Link>
  );

  ['sg-text--bold', 'md:sg-text--regular', 'xl:sg-text--bold'].forEach(
    className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    }
  );
});

it('transform is responsive prop', () => {
  const transform = [LINK_TRANSFORM.CAPITALIZE, LINK_TRANSFORM.LOWERCASE];
  const component = render(
    <Link href="#" transform={transform}>
      Test
    </Link>
  );

  ['sg-text--capitalize', 'md:sg-text--lowercase'].forEach(className => {
    expect(
      component.container.firstElementChild.classList.contains(className)
    ).toBe(true);
  });
});

it('align is responsive prop', () => {
  const align = [LINK_ALIGN.CENTER, LINK_ALIGN.LEFT];
  const component = render(
    <Link href="#" align={align}>
      Test
    </Link>
  );

  ['sg-text--to-center', 'md:sg-text--to-left'].forEach(className => {
    expect(
      component.container.firstElementChild.classList.contains(className)
    ).toBe(true);
  });
});

it('noWrap is responsive prop', () => {
  const noWrap = [true, false];
  const component = render(
    <Link href="#" noWrap={noWrap}>
      Test
    </Link>
  );

  ['sg-text--no-wrap', 'md:sg-text--wrap'].forEach(className => {
    expect(
      component.container.firstElementChild.classList.contains(className)
    ).toBe(true);
  });
});

it('breakWords is responsive prop', () => {
  const breakWords = [true, false];
  const component = render(
    <Link href="#" breakWords={breakWords}>
      Test
    </Link>
  );

  ['sg-text--break-words', 'md:sg-text--word-break-normal'].forEach(
    className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toBe(true);
    }
  );
});
