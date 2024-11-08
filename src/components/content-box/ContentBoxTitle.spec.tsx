import * as React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxTitle from './ContentBoxTitle';
import {render} from '@testing-library/react';

describe('<ContentBoxTitle />', () => {
  it('renders', () => {
    const testBox = render(<ContentBoxTitle>test</ContentBoxTitle>);

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title'
      )
    ).toEqual(true);
  });
  it('has class that aligns elements to center', () => {
    const testBox = render(
      <ContentBoxTitle align={ALIGNMENT.CENTER}>test</ContentBoxTitle>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title--with-centered-elements'
      )
    ).toEqual(true);
  });
  it('has spaced class', () => {
    const testBox = render(<ContentBoxTitle spaced>test</ContentBoxTitle>);
    const testBox2 = render(
      <ContentBoxTitle spacedSmall>test</ContentBoxTitle>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title--spaced'
      )
    ).toEqual(true);
    expect(
      // @ts-ignore TS18047
      testBox2.container.firstElementChild.classList.contains(
        'sg-content-box__title--spaced-small'
      )
    ).toEqual(true);
  });
  it('has spacedTop proper class', () => {
    const testBox = render(
      <ContentBoxTitle spacedTop={SIZE.NORMAL}>test</ContentBoxTitle>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title--spaced-top'
      )
    ).toBeTruthy();
    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title--spaced-top-normal'
      )
    ).toBeFalsy();
  });
  it('has spacedTop class with proper size', () => {
    const testBox = render(
      <ContentBoxTitle spacedTop={SIZE.XSMALL}>test</ContentBoxTitle>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title--spaced-top-xsmall'
      )
    ).toEqual(true);
  });
  it('has spacedBottom proper class', () => {
    const testBox = render(
      <ContentBoxTitle spacedBottom={SIZE.NORMAL}>test</ContentBoxTitle>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title--spaced-bottom'
      )
    ).toBeTruthy();
    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title--spaced-bottom-normal'
      )
    ).toBeFalsy();
  });
  it('has spacedBottom class with proper size', () => {
    const testBox = render(
      <ContentBoxTitle spacedBottom={SIZE.XSMALL}>test</ContentBoxTitle>
    );

    expect(
      // @ts-ignore TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__title--spaced-bottom-xsmall'
      )
    ).toEqual(true);
  });
});
