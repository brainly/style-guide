import React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxActions from './ContentBoxActions';
import {shallow} from 'enzyme';

describe('<ContentBoxActions />', () => {
  it('renders', () => {
    const testBox = shallow(
      <ContentBoxActions>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions')).toEqual(true);
  });

  it('has class that aligns elements to center', () => {
    const testBox = shallow(
      <ContentBoxActions align={ALIGNMENT.CENTER}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--with-centered-elements')).toEqual(true);
  });

  it('has class that aligns elements to right', () => {
    const testBox = shallow(
      <ContentBoxActions align={ALIGNMENT.RIGHT}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--with-elements-to-right')).toEqual(true);
  });

  it('has spacedTop class with proper size', () => {
    const testBox = shallow(
      <ContentBoxActions spacedTop={SIZE.XSMALL}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--spaced-top-xsmall')).toEqual(true);
  });

  it('has spacedBottom class with proper size', () => {
    const testBox = shallow(
      <ContentBoxActions spacedBottom={SIZE.XSMALL}>test</ContentBoxActions>
    );

    expect(testBox.hasClass('sg-content-box__actions--spaced-bottom-xsmall')).toEqual(true);
  });
});
