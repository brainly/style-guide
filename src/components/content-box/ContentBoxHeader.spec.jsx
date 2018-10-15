import React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxHeader from './ContentBoxHeader';
import {shallow} from 'enzyme';

describe('<ContentBoxHeader />', () => {
  it('renders', () => {
    const testBox = shallow(
      <ContentBoxHeader>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header')).toEqual(true);
  });

  it('has class that aligns elements to center', () => {
    const testBox = shallow(
      <ContentBoxHeader align={ALIGNMENT.CENTER}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--with-centered-elements')).toEqual(true);
  });

  it('has spaced class', () => {
    const testBox = shallow(
      <ContentBoxHeader spaced>test</ContentBoxHeader>
    );
    const testBox2 = shallow(
      <ContentBoxHeader spacedSmall>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced')).toEqual(true);
    expect(testBox2.hasClass('sg-content-box__header--spaced-small')).toEqual(true);
  });

  it('has spacedTop proper class', () => {
    const testBox = shallow(
      <ContentBoxHeader spacedTop={SIZE.NORMAL}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced-top')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__header--spaced-top-normal')).toBeFalsy();
  });

  it('has spacedTop class with proper size', () => {
    const testBox = shallow(
      <ContentBoxHeader spacedTop={SIZE.XSMALL}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced-top-xsmall')).toEqual(true);
  });

  it('has spacedBottom proper class', () => {
    const testBox = shallow(
      <ContentBoxHeader spacedBottom={SIZE.NORMAL}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced-bottom')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__header--spaced-bottom-normal')).toBeFalsy();
  });

  it('has spacedBottom class with proper size', () => {
    const testBox = shallow(
      <ContentBoxHeader spacedBottom={SIZE.XSMALL}>test</ContentBoxHeader>
    );

    expect(testBox.hasClass('sg-content-box__header--spaced-bottom-xsmall')).toEqual(true);
  });
});
