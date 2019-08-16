import React from 'react';
import Icon, {TYPE, ICON_COLOR} from './Icon';
import {shallow} from 'enzyme';

test('render if type', () => {
  const icon = shallow(<Icon type={TYPE.ANSWER} />);

  expect(icon.hasClass('sg-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});

test('render if children', () => {
  const icon = shallow(
    <Icon>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fillRule="nonzero"
            d="M8.45 1v4.84h3.57L6.5 18.74H2v4.85h12.9v-4.84h-3.56l5.52-12.9h4.5V1z"
          />
        </svg>
      </div>
    </Icon>
  );

  expect(icon.hasClass('sg-icon')).toEqual(true);
  expect(icon.find('svg')).toHaveLength(1);
});

test('type passed to xlink:href', () => {
  const type = TYPE.ANSWER;
  const icon = shallow(<Icon type={type} />);
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual(`#icon-${type}`);
});

test('new type passed to xlink:href', () => {
  const type = 'std-answer';
  const icon = shallow(<Icon type={type} />);
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual(`#icon-${type}`);
});

test('colors', () => {
  const type = TYPE.ANSWER;
  const color = ICON_COLOR.DARK;
  const icon = shallow(<Icon type={type} color={color} />);

  expect(icon.hasClass(`sg-icon--${color}`)).toEqual(true);
});

test('size', () => {
  const size = 10;
  const type = TYPE.ANSWER;
  const icon = shallow(<Icon type={type} size={size} />);

  expect(icon.hasClass(`sg-icon--x${size}`)).toEqual(true);
});

test('tag type', () => {
  const component = shallow(
    <Icon type={TYPE.ANSWER} size="10" tagType="span" />
  );

  expect(component.find('span')).toHaveLength(1);
});

test('other props', () => {
  const type = TYPE.ANSWER;
  const icon = shallow(<Icon type={type} data-something="else" />);

  expect(icon.find('[data-something="else"]')).toHaveLength(1);
});
