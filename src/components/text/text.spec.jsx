import React from 'react';
import Text, {TYPE, SIZE, COLOR, WEIGHT} from '../text/Text';
import TextBit, {TYPE as TB_TYPE, SIZE as TB_SIZE, COLOR as TB_COLOR} from '../text/TextBit';
import Link, {COLOR as LINK_COLOR, SIZE as LINK_SIZE} from '../text/Link';
import HeaderPrimary, {SIZE as HEADER_SIZE, TYPE as HEADER_TYPE, COLOR as HEADER_COLOR} from '../text/HeaderPrimary';
import HeaderSecondary from '../text/HeaderSecondary';
import {shallow, mount} from 'enzyme';

describe('Text', () => {
  test('render', () => {
    const text = shallow(
      <Text>Test</Text>
    );

    expect(text.hasClass('sg-text')).toBeTruthy();
  });

  test('size', () => {
    const text = shallow(
      <Text size={SIZE.STANDOUT}>Test</Text>
    );

    expect(text.hasClass('sg-text--standout')).toBeTruthy();
  });

  test('type', () => {
    const text = mount(
      <Text type={TYPE.SPAN}>Test</Text>
    );

    expect(text.props().type).toEqual(TYPE.SPAN);
  });

  test('color', () => {
    const text = shallow(
      <Text color={COLOR.MINT}>Test</Text>
    );

    expect(text.hasClass('sg-text--mint')).toBeTruthy();
  });

  test('weight', () => {
    const text = shallow(
      <Text weight={WEIGHT.BOLD}>Test</Text>
    );

    expect(text.hasClass('sg-text--emphasised')).toBeTruthy();
  });
});

describe('TextBit', () => {
  test('render', () => {
    const textBit = shallow(
      <TextBit type={TB_TYPE.H1}>Test</TextBit>
    );

    expect(textBit.hasClass('sg-text-bit')).toBeTruthy();
  });

  test('sie', () => {
    const textBit = shallow(
      <TextBit size={TB_SIZE.XXLARGE}>Test</TextBit>
    );

    expect(textBit.hasClass('sg-text-bit--xxlarge')).toBeTruthy();
  });

  test('type', () => {
    const textBit = mount(
      <TextBit type={TB_TYPE.H3}>Test</TextBit>
    );

    expect(textBit.props().type).toEqual(TB_TYPE.H3);
  });

  test('color', () => {
    const textBit = shallow(
      <TextBit color={TB_COLOR.ALT}>Test</TextBit>
    );

    expect(textBit.hasClass('sg-text-bit--alt')).toBeTruthy();
  });

  test('not responsive', () => {
    const textBit = shallow(
      <TextBit notResponsive={true}>Test</TextBit>
    );

    expect(textBit.hasClass('sg-text-bit--not-responsive')).toBeTruthy();
  });
});


describe('Link', () => {
  test('render', () => {
    const link = shallow(
      <Link href="test.com">Test</Link>
    );

    expect(link.hasClass('sg-link')).toBeTruthy();
  });

  test('empty href', () => {
    const link = shallow(
      <Link>Test</Link>
    );

    expect(link.props().href).toEqual('#');
  });

  test('size', () => {
    const link = shallow(
      <Link size={LINK_SIZE.OBSCURE}>Test</Link>
    );

    expect(link.hasClass('sg-link--obscure')).toBeTruthy();
  });

  test('color', () => {
    const link = shallow(
      <Link color={LINK_COLOR.LIGHT}>Test</Link>
    );

    expect(link.hasClass('sg-link--light')).toBeTruthy();
  });

  test('unstyled', () => {
    const link = shallow(
      <Link unstyled={true}>Test</Link>
    );

    expect(link.hasClass('sg-link--unstyled')).toBeTruthy();
  });

  test('underlined', () => {
    const link = shallow(
      <Link underlined={true}>Test</Link>
    );

    expect(link.hasClass('sg-link--underlined')).toBeTruthy();
  });

  test('emphasised', () => {
    const link = shallow(
      <Link emphasised={true}>Test</Link>
    );

    expect(link.hasClass('sg-link--emphasised')).toBeTruthy();
  });

  test('disabled', () => {
    const link = shallow(
      <Link disabled={true}>Test</Link>
    );

    expect(link.hasClass('sg-link--disabled')).toBeTruthy();
  });
});

describe('Header Primary', () => {
  test('render', () => {
    const header = shallow(
      <HeaderPrimary>Test</HeaderPrimary>
    );

    expect(header.hasClass('sg-header-primary')).toBeTruthy();
  });

  test('size', () => {
    const header = shallow(
      <HeaderPrimary size={HEADER_SIZE.SMALL}>Test</HeaderPrimary>
    );

    expect(header.hasClass('sg-header-primary--small')).toBeTruthy();
  });

  test('type', () => {
    const header = mount(
      <HeaderPrimary type={HEADER_TYPE.H3}>Test</HeaderPrimary>
    );

    expect(header.props().type).toEqual(HEADER_TYPE.H3);
  });

  test('light', () => {
    const text = shallow(
      <HeaderPrimary color={HEADER_COLOR.LIGHT}>Test</HeaderPrimary>
    );

    expect(text.hasClass('sg-header-primary--light')).toBeTruthy();
  });

  test('default size', () => {
    const header = shallow(
      <HeaderPrimary size={HEADER_SIZE.NORMAL}>Test</HeaderPrimary>
    );

    expect(header.hasClass('sg-header-primary--normal')).toBeFalsy();
  });
});

describe('Header Primary', () => {
  test('render', () => {
    const header = shallow(
      <HeaderSecondary>Test</HeaderSecondary>
    );

    expect(header.hasClass('sg-header-secondary')).toBeTruthy();
  });

  test('size', () => {
    const header = shallow(
      <HeaderSecondary size={HEADER_SIZE.SMALL}>Test</HeaderSecondary>
    );

    expect(header.hasClass('sg-header-secondary--small')).toBeTruthy();
  });

  test('type', () => {
    const header = mount(
      <HeaderSecondary type={HEADER_TYPE.H3}>Test</HeaderSecondary>
    );

    expect(header.props().type).toEqual(HEADER_TYPE.H3);
  });

  test('light', () => {
    const text = shallow(
      <HeaderSecondary color={HEADER_COLOR.LIGHT}>Test</HeaderSecondary>
    );

    expect(text.hasClass('sg-header-secondary--light')).toBeTruthy();
  });

  test('default size', () => {
    const header = shallow(
      <HeaderSecondary size={HEADER_SIZE.NORMAL}>Test</HeaderSecondary>
    );

    expect(header.hasClass('sg-header-secondary--normal')).toBeFalsy();
  });
});
