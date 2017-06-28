import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary, {types} from './ButtonSecondary';
import ButtonRound from './ButtonRound';
import {shallow} from 'enzyme';

describe('Button Primary', () => {
  test('render', () => {
    const button = shallow(
      <ButtonPrimary>Some text</ButtonPrimary>
    );

    expect(button.hasClass('sg-button-primary')).toEqual(true);

  });

  test('type', () => {
    const type = types.alt;
    const button = shallow(
      <ButtonPrimary type={type}>Some text</ButtonPrimary>
    );

    expect(button.hasClass('sg-button-primary--' + type)).toEqual(true);
  });

  test('disabled', () => {
    const button = shallow(
      <ButtonPrimary disabled={true}>Some text</ButtonPrimary>
    );

    expect(button.hasClass('sg-button-primary--disabled')).toEqual(true);
    expect(button.is('[disabled]')).toEqual(true);

  });
  test('not disabled', () => {
    const button = shallow(
      <ButtonPrimary>Some text</ButtonPrimary>
    );

    expect(button.hasClass('sg-button-primary--disabled')).toEqual(false);
    expect(button.is('[disabled]')).toEqual(false);

  });

  test('primary don\'t have small', () => {
    const button = shallow(
      <ButtonPrimary small={true}>Some text</ButtonPrimary>
    );

    expect(button.hasClass('sg-button-primary--small')).toEqual(false);
  });
  test('wide', () => {
    const button = shallow(
      <ButtonPrimary wide={true}>Some text</ButtonPrimary>
    );

    expect(button.hasClass('sg-button-primary--full-width')).toEqual(true);
  });

  test('icon', () => {
    const icon = <span>:P</span>;
    const button = shallow(
      <ButtonPrimary icon={icon}>Some text</ButtonPrimary>
    );

    expect(button.contains(icon)).toEqual(true);
    expect(button.find('.sg-button-primary__icon')).toHaveLength(1);
  });

  test('no icon', () => {
    const button = shallow(
      <ButtonPrimary>Some text</ButtonPrimary>
    );

    expect(button.find('.sg-button-primary__icon')).toHaveLength(0);
  });
});

describe('Button Secondary', () => {
  test('render', () => {
    const button = shallow(
      <ButtonSecondary>Some text</ButtonSecondary>
    );

    expect(button.hasClass('sg-button-secondary')).toEqual(true);
  });

  test('type', () => {
    const type = types.alt;
    const button = shallow(
      <ButtonSecondary type={type}>Some text</ButtonSecondary>
    );

    expect(button.hasClass('sg-button-secondary--' + type)).toEqual(true);
  });

  test('disabled', () => {
    const button = shallow(
      <ButtonSecondary disabled={true}>Some text</ButtonSecondary>
    );

    expect(button.hasClass('sg-button-secondary--disabled')).toEqual(true);
    expect(button.is('[disabled]')).toEqual(true);

  });
  test('not disabled', () => {
    const button = shallow(
      <ButtonSecondary >Some text</ButtonSecondary>
    );

    expect(button.hasClass('sg-button-secondary--disabled')).toEqual(false);
    expect(button.is('[disabled]')).toEqual(false);

  });


  test('small', () => {
    const button = shallow(
      <ButtonSecondary small={true}>Some text</ButtonSecondary>
    );

    expect(button.hasClass('sg-button-secondary--small')).toEqual(true);
  });

  test('wide', () => {
    const button = shallow(
      <ButtonSecondary wide={true}>Some text</ButtonSecondary>
    );

    expect(button.hasClass('sg-button-secondary--full-width')).toEqual(true);
  });

  test('secondary button don\'t have icon', () => {
    const icon = <span>:P</span>;
    const button = shallow(
      <ButtonSecondary icon={icon}>Some text</ButtonSecondary>
    );

    expect(button.contains(icon)).toEqual(false);
  });


  test('active-inverse-disabled', () => {

    const typeActiveInverse = types.active_inverse;
    const button = shallow(
      <ButtonSecondary disabled={true} type={typeActiveInverse}>Some text</ButtonSecondary>
    );

    expect(button.hasClass('sg-button-secondary--disabled')).toEqual(true);
    expect(button.hasClass('sg-button-secondary--' + typeActiveInverse)).toEqual(true);
    expect(button.hasClass('sg-button-secondary--' + typeActiveInverse + '-disabled')).toEqual(true);
  });
});


describe('Button Round', () => {
  test('render', () => {
    const button = shallow(
      <ButtonRound>Some text</ButtonRound>
    );

    expect(button.hasClass('sg-button-primary-round')).toEqual(true);
  });


  test('href', () => {
    const href = '#test';
    const button = shallow(
      <ButtonRound href={href}>Some text</ButtonRound>
    );

    expect(button.is(`[href="${href}"]`)).toEqual(true);
  });

  test('label', () => {
    const label = 'example label';
    const button = shallow(
      <ButtonRound label={label}>Some text</ButtonRound>
    );

    expect(button.contains(label)).toEqual(true);
    expect(button.find('.sg-button-primary-round__label')).toHaveLength(1);
  });

  test('no label', () => {
    const button = shallow(
      <ButtonRound >Some text</ButtonRound>
    );

    expect(button.find('sg-button-primary-round__label')).toHaveLength(0);
  });


  test('func', () => {
    let counter = 0;
    const onClick = () => counter++;
    const button = shallow(
      <ButtonRound onClick={onClick}>Some text</ButtonRound>
    );

    expect(counter).toEqual(0);
    button.simulate('click');
    expect(counter).toEqual(1);
  });

  test('func throw testing 1part - undefined function', () => {
    const button = shallow(
      <ButtonRound >Some text</ButtonRound>
    );

    expect(() => button.simulate('click')).not.toThrow();

    const button2 = shallow(
      <ButtonRound onClick={undefined}>Some text</ButtonRound>
    );

    expect(() => button2.simulate('click')).not.toThrow();
  });

  test('func throw testing 2part - defined bad type', () => {
    const spy = jest.spyOn(console, 'error');

    console['error'] = jest.fn();

    const notFunctionObject = 'there should be func not string';
    const button = shallow(
      <ButtonRound onClick={notFunctionObject}>Some text</ButtonRound>
    );

    expect(() => button.simulate('click')).toThrow();

    spy.mockRestore();
  });
});
