import React from 'react';
import Icon, {TYPE, ICON_COLOR} from './Icon';
import {shallow} from 'enzyme';

const svgImage = '<svg xmlns= "http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
'<path fill-rule="nonzero" d="M8.45 1v4.84h3.57L6.5 18.74H2v4.85h12.9v-4.84h-3.56l5.52-12.9h4.5V1z" /></svg>';

test('render', () => {
  const icon = shallow(
    <Icon type={TYPE.ANSWER} />
  );

  expect(icon.find('svg')).toHaveLength(1);
  expect(icon.find('svg').hasClass('sg-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});

test('render customSvg', () => {
  const icon = shallow(
    <Icon
      customSvg={svgImage}
    />
  );

  expect(icon.find('div')).toHaveLength(1);
  expect(icon.find('div').hasClass('sg-icon')).toEqual(true);
  expect(icon.children().props().dangerouslySetInnerHTML.__html).toBe(svgImage);
});

test('type passed to xlink:href', () => {
  const type = TYPE.ANSWER;
  const icon = shallow(
    <Icon type={type} />
  );
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual('#icon-' + type);
});

test('colors', () => {
  const type = TYPE.ANSWER;
  const color = ICON_COLOR.DARK;
  const icon = shallow(
    <Icon type={type} color={color} />
  );

  expect(icon.find('svg').hasClass(`sg-icon--${color}`)).toEqual(true);
});

test('size', () => {
  const size = 10;
  const type = TYPE.ANSWER;
  const icon = shallow(
    <Icon type={type} size={size} />
  );

  expect(icon.find('svg').hasClass(`sg-icon--x${size}`)).toEqual(true);
});

test('other props', () => {
  const type = TYPE.ANSWER;
  const icon = shallow(
    <Icon type={type} data-something={'else'} />
  );

  expect(icon.find('[data-something="else"]')).toHaveLength(1);
});

