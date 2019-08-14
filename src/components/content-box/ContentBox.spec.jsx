import React from 'react';
import ContentBox, {CONTENT_BOX_SPACING_SIZE} from './ContentBox';
import {shallow} from 'enzyme';

describe('<ContentBox />', () => {
  it('renders', () => {
    const contentBox = shallow(<ContentBox>test</ContentBox>);

    expect(contentBox.hasClass('sg-content-box')).toEqual(true);
  });

  it('has full class', () => {
    const contentBox = shallow(<ContentBox full>test</ContentBox>);

    expect(contentBox.hasClass('sg-content-box--full')).toEqual(true);
  });

  it('has spaced class', () => {
    const contentBox = shallow(<ContentBox spaced>test</ContentBox>);
    const contentBox2 = shallow(<ContentBox spacedSmall>test</ContentBox>);

    expect(contentBox.hasClass('sg-content-box--spaced')).toEqual(true);
    expect(contentBox2.hasClass('sg-content-box--spaced-small')).toEqual(true);
  });

  it('has spacedBottom proper class', () => {
    const testBox = shallow(
      <ContentBox spacedBottom={CONTENT_BOX_SPACING_SIZE.NORMAL}>
        test
      </ContentBox>
    );

    expect(testBox.hasClass('sg-content-box--spaced-bottom')).toEqual(true);
    expect(testBox.hasClass('sg-content-box--spaced-bottom-normal')).toEqual(
      false
    );
  });

  it('has spacedBottom class with proper size', () => {
    const testBox = shallow(
      <ContentBox spacedBottom={CONTENT_BOX_SPACING_SIZE.XSMALL}>
        test
      </ContentBox>
    );

    expect(testBox.hasClass('sg-content-box--spaced-bottom-xsmall')).toEqual(
      true
    );
  });

  it('has spacedTop proper class', () => {
    const testBox = shallow(
      <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.NORMAL}>test</ContentBox>
    );

    expect(testBox.hasClass('sg-content-box--spaced-top')).toEqual(true);
    expect(testBox.hasClass('sg-content-box--spaced-top-normal')).toEqual(
      false
    );
  });

  it('has spacedTop class with proper size', () => {
    const testBox = shallow(
      <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.XSMALL}>test</ContentBox>
    );

    expect(testBox.hasClass('sg-content-box--spaced-top-xsmall')).toEqual(true);
  });
});
