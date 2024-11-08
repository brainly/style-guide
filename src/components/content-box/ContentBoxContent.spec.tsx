import * as React from 'react';
import ContentBoxContent from './ContentBoxContent';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import {render} from '@testing-library/react';

describe('<ContentBoxContent />', () => {
  it('renders', () => {
    const testBox = render(<ContentBoxContent>test</ContentBoxContent>);

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content'
      )
    ).toEqual(true);
  });
  it('has full class', () => {
    const testBox = render(<ContentBoxContent full>test</ContentBoxContent>);

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--full'
      )
    ).toEqual(true);
  });
  it('has class that aligns elements to right', () => {
    const testBox = render(
      <ContentBoxContent align={ALIGNMENT.RIGHT}>test</ContentBoxContent>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--with-elements-to-right'
      )
    ).toEqual(false);
  });
  it('has class that aligns elements to center', () => {
    const testBox = render(
      <ContentBoxContent align={ALIGNMENT.CENTER}>test</ContentBoxContent>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--with-centered-text'
      )
    ).toEqual(true);
  });
  it('has spacedTop proper class', () => {
    const testBox = render(
      <ContentBoxContent spacedTop={SIZE.NORMAL}>test</ContentBoxContent>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--spaced-top'
      )
    ).toBeTruthy();
    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--spaced-top-normal'
      )
    ).toBeFalsy();
  });
  it('has spacedTop class with proper size', () => {
    const testBox = render(
      <ContentBoxContent spacedTop={SIZE.XSMALL}>test</ContentBoxContent>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--spaced-top-xsmall'
      )
    ).toEqual(true);
  });
  it('has spacedBottom proper class', () => {
    const testBox = render(
      <ContentBoxContent spacedBottom={SIZE.NORMAL}>test</ContentBoxContent>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--spaced-bottom'
      )
    ).toBeTruthy();
    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--spaced-bottom-normal'
      )
    ).toBeFalsy();
  });
  it('has spacedBottom class with proper size', () => {
    const testBox = render(
      <ContentBoxContent spacedBottom={SIZE.XSMALL}>test</ContentBoxContent>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__content--spaced-bottom-xsmall'
      )
    ).toEqual(true);
  });
});
