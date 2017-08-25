import React from 'react';
import FlashMessage, {TYPE} from './FlashMessage';
import {shallow} from 'enzyme';

test('render', () => {
  const flashMessage = shallow(
    <FlashMessage text="test" />
  );

  expect(flashMessage.hasClass('sg-flash')).toEqual(true);
  expect(flashMessage.find('div.sg-flash__message')).toHaveLength(1);
});

test('default type', () => {
  const flashMessage = shallow(
    <FlashMessage text="test" />
  );
  const messageDiv = flashMessage.find('div.sg-flash__message');

  expect(messageDiv.hasClass('sg-flash__message')).toEqual(true);
  expect(messageDiv.hasClass('sg-flash__message--default')).toEqual(false);
});

test('type', () => {
  const flashMessage = shallow(
    <FlashMessage text="test" type={TYPE.ERROR} />
  );

  const messageDiv = flashMessage.find('div.sg-flash__message');

  expect(messageDiv.hasClass('sg-flash__message--error')).toEqual(true);
});

test('error when no text', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(
    <FlashMessage type={TYPE.SUCCESS} />);

  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});
