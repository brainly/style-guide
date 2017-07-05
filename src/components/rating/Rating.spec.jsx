import React from 'react';
import Rating from './Rating';
import {shallow} from 'enzyme';


describe('rating', () => {

  test('render', () => {
    const rating = shallow(
      <Rating />
    );

    expect(rating.hasClass('sg-rate-box')).toEqual(true);
  });

  test('shouldn\'t throw error when no onChange', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<Rating/>);
    expect(console.error.mock.calls).toHaveLength(0);

    spy.mockRestore();
  });

  xtest('active', () => {
    // dump
  });


  xtest('onchange same value', () => {
    // dump
  });

  xtest('onchange + active', () => {
    // dump
  });


  xtest('on change + no active', () => {
    // dump
  });


  xtest('small', () => {
    // dump
  });


  xtest('counter', () => {
    // dump
  });

  xtest('no counter', () => {
    // dump
  });
});


describe('star', () => {

  xtest('render', () => {
    const rating = shallow(
      <Rating />
    );

    expect(rating.hasClass('sg-rate-box')).toEqual(true);
  });

  xtest('shouldn\'t throw error when no onClick', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<Rating/>);
    expect(console.error.mock.calls).toHaveLength(0);

    spy.mockRestore();
  });

  xtest('checked', () => {
    // dump
  });


  xtest('size', () => {
    // dump
  });
});
