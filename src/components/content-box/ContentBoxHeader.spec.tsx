import * as React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxHeader from './ContentBoxHeader';
import {render} from '@testing-library/react';

describe('<ContentBoxHeader />', () => {
  it('renders', () => {
    const testBox = render(<ContentBoxHeader>test</ContentBoxHeader>);

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header'
      )
    ).toEqual(true);
  });
  it('has class that aligns elements to center', () => {
    const testBox = render(
      <ContentBoxHeader align={ALIGNMENT.CENTER}>test</ContentBoxHeader>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header--with-centered-elements'
      )
    ).toEqual(true);
  });
  it('has spaced class', () => {
    const testBox = render(<ContentBoxHeader spaced>test</ContentBoxHeader>);
    const testBox2 = render(
      <ContentBoxHeader spacedSmall>test</ContentBoxHeader>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header--spaced'
      )
    ).toEqual(true);
    expect(
      // @ts-ignore TS18047
      testBox2.container.firstElementChild.classList.contains(
        'sg-content-box__header--spaced-small'
      )
    ).toEqual(true);
  });
  it('has spacedTop proper class', () => {
    const testBox = render(
      <ContentBoxHeader spacedTop={SIZE.NORMAL}>test</ContentBoxHeader>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header--spaced-top'
      )
    ).toBeTruthy();
    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header--spaced-top-normal'
      )
    ).toBeFalsy();
  });
  it('has spacedTop class with proper size', () => {
    const testBox = render(
      <ContentBoxHeader spacedTop={SIZE.XSMALL}>test</ContentBoxHeader>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header--spaced-top-xsmall'
      )
    ).toEqual(true);
  });
  it('has spacedBottom proper class', () => {
    const testBox = render(
      <ContentBoxHeader spacedBottom={SIZE.NORMAL}>test</ContentBoxHeader>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header--spaced-bottom'
      )
    ).toBeTruthy();
    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header--spaced-bottom-normal'
      )
    ).toBeFalsy();
  });
  it('has spacedBottom class with proper size', () => {
    const testBox = render(
      <ContentBoxHeader spacedBottom={SIZE.XSMALL}>test</ContentBoxHeader>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__header--spaced-bottom-xsmall'
      )
    ).toEqual(true);
  });
});
